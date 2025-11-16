<script lang="ts">
  import { Code, Layers, Package, ChevronRight, Folder, FolderOpen, FileCode } from 'lucide-svelte';
  import TreeNode from './TreeNode.svelte';

  interface Story {
    id: string;
    componentName: string;
    category: string;
    subcategory?: string;
    path: string;
  }

  interface GroupedStories {
    [category: string]: {
      [subcategory: string]: Story[];
    };
  }

  interface TreeNodeData {
    name: string;
    type: 'category' | 'folder' | 'component';
    children?: TreeNodeData[];
    story?: Story;
    path: string;
    count?: number;
  }

  interface Props {
    onComponentSelect?: (storyId: string) => void;
    groupedStories?: GroupedStories;
  }

  let { onComponentSelect, groupedStories = {} }: Props = $props();

  // State for expanded nodes - Level 0 (categories) and Level 1 (first-level folders) open by default
  let expandedNodes = $state<Set<string>>(new Set());

  // Category configuration
  const categoryConfig: Record<string, {
    icon: any;
    color: string;
    bg: string;
    border: string;
  }> = {
    'Atoms': {
      icon: Code,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/10',
      border: 'border-blue-200 dark:border-blue-700'
    },
    'Molecules': {
      icon: Layers,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/10',
      border: 'border-purple-200 dark:border-purple-700'
    },
    'Organisms': {
      icon: Package,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/10',
      border: 'border-green-200 dark:border-green-700'
    }
  };

  // Build tree structure from flat stories
  function buildTree(): TreeNodeData[] {
    const tree: TreeNodeData[] = [];

    Object.keys(categoryConfig).forEach(category => {
      const categoryNode: TreeNodeData = {
        name: category,
        type: 'category',
        path: category,
        children: [],
        count: 0
      };

      const categoryStories = groupedStories[category];
      if (!categoryStories) {
        tree.push(categoryNode);
        return;
      }

      // Build folder hierarchy
      const folderMap = new Map<string, TreeNodeData>();

      Object.entries(categoryStories).forEach(([subcategory, stories]) => {
        stories.forEach(story => {
          // Extract folder path from file path
          // e.g., "atoms/typography/inline/Kbd.story.svelte" -> ["typography", "inline"]
          const pathParts = story.path.split('/');
          const componentsIndex = pathParts.findIndex(p => p === 'components');

          if (componentsIndex === -1) return;

          // Get path segments between 'components' and the file
          const segments = pathParts.slice(componentsIndex + 2, -1); // Skip category and filename

          // Build nested folder structure
          let currentPath = category;
          let currentChildren = categoryNode.children!;

          segments.forEach((segment, index) => {
            const segmentPath = `${currentPath}/${segment}`;

            if (!folderMap.has(segmentPath)) {
              const folderNode: TreeNodeData = {
                name: segment.charAt(0).toUpperCase() + segment.slice(1),
                type: 'folder',
                path: segmentPath,
                children: [],
                count: 0
              };
              folderMap.set(segmentPath, folderNode);
              currentChildren.push(folderNode);
            }

            const folderNode = folderMap.get(segmentPath)!;
            folderNode.count = (folderNode.count || 0) + 1;
            currentChildren = folderNode.children!;
            currentPath = segmentPath;
          });

          // Add component as leaf node
          currentChildren.push({
            name: story.componentName,
            type: 'component',
            path: `${currentPath}/${story.componentName}`,
            story
          });

          categoryNode.count = (categoryNode.count || 0) + 1;
        });
      });

      // Sort children recursively
      sortTreeNode(categoryNode);
      tree.push(categoryNode);
    });

    return tree;
  }

  function sortTreeNode(node: TreeNodeData) {
    if (!node.children) return;

    node.children.sort((a, b) => {
      // Folders first, then components
      if (a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });

    node.children.forEach(sortTreeNode);
  }

  const tree = $derived(buildTree());

  // Auto-expand Level 0 (categories) and Level 1 (first-level folders) on mount
  $effect(() => {
    if (tree.length > 0 && expandedNodes.size === 0) {
      const toExpand = new Set<string>();

      // Expand all categories (Level 0)
      tree.forEach(categoryNode => {
        toExpand.add(categoryNode.path);

        // Expand all first-level folders (Level 1)
        if (categoryNode.children) {
          categoryNode.children.forEach(folderNode => {
            if (folderNode.type === 'folder') {
              toExpand.add(folderNode.path);
            }
          });
        }
      });

      expandedNodes = toExpand;
    }
  });

  function toggleNode(path: string) {
    if (expandedNodes.has(path)) {
      expandedNodes.delete(path);
    } else {
      expandedNodes.add(path);
    }
    expandedNodes = new Set(expandedNodes);
  }

  function handleComponentClick(story: Story) {
    if (onComponentSelect) {
      onComponentSelect(story.id);
    }
  }
</script>

<div class="tree-container bg-white dark:bg-gray-900 p-3">
  <nav class="space-y-1">
    {#each tree as categoryNode}
      <TreeNode
        node={categoryNode}
        level={0}
        {expandedNodes}
        {categoryConfig}
        onToggle={toggleNode}
        onComponentClick={handleComponentClick}
      />
    {/each}
  </nav>
</div>

<style>
  .tree-container {
    height: 100%;
    min-height: 0;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    -webkit-overflow-scrolling: touch;
  }

  /* Custom scrollbar */
  .tree-container::-webkit-scrollbar {
    width: 8px;
  }

  .tree-container::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }

  .tree-container::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.5);
    border-radius: 4px;
  }

  .tree-container::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.7);
  }

  :global(.dark) .tree-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  :global(.dark) .tree-container::-webkit-scrollbar-thumb {
    background: rgba(75, 85, 99, 0.5);
  }

  :global(.dark) .tree-container::-webkit-scrollbar-thumb:hover {
    background: rgba(75, 85, 99, 0.7);
  }
</style>
