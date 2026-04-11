import type { Props, GroupedStories, TreeNodeData, Story } from '$stylist/development/type/struct/playground-component-tree';
import {
  PLAYGROUND_COMPONENT_TREE_CODE,
  PLAYGROUND_COMPONENT_TREE_LAYERS,
  PLAYGROUND_COMPONENT_TREE_PACKAGE
} from '$stylist/development/const/map/playground-component-tree';
import {
  playgroundComponentTreeSortTreeNode,
  playgroundComponentTreeAnnotateAutoSelectable,
  playgroundComponentTreeFindNodeByPath
} from '$stylist/development/function/script/playground-component-tree';

export type PlaygroundComponentTreeState = ReturnType<typeof createPlaygroundComponentTreeState>;

export function createPlaygroundComponentTreeState(props: Props) {
  const categoryConfig: Record<string, { icon: any; color: string; bg: string; border: string }> = {
    'Atoms': {
      icon: PLAYGROUND_COMPONENT_TREE_CODE,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/10',
      border: 'border-blue-200 dark:border-blue-700'
    },
    'Molecules': {
      icon: PLAYGROUND_COMPONENT_TREE_LAYERS,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/10',
      border: 'border-purple-200 dark:border-purple-700'
    },
    'Organisms': {
      icon: PLAYGROUND_COMPONENT_TREE_PACKAGE,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/10',
      border: 'border-green-200 dark:border-green-700'
    }
  };

  const storyPathMap = new Map<string, string[]>();
  let expandedNodes = $state<Set<string>>(new Set());
  let focusedPath = $state<string | null>(null);
  let treeContainer: HTMLDivElement | undefined;

  function buildTree(): TreeNodeData[] {
    storyPathMap.clear();
    const tree: TreeNodeData[] = [];

    Object.keys(categoryConfig).forEach(category => {
      const categoryNode: TreeNodeData = {
        name: category,
        type: 'category',
        path: category,
        children: [],
        count: 0
      };

      const categoryStories = (props.groupedStories ?? {} as GroupedStories)[category];
      if (!categoryStories) {
        tree.push(categoryNode);
        return;
      }

      const folderMap = new Map<string, TreeNodeData>();

      Object.entries(categoryStories).forEach(([subcategory, stories]) => {
        stories.forEach(story => {
          const pathParts = story.path.split('/');
          const componentsIndex = pathParts.findIndex(p => p === 'components');
          if (componentsIndex === -1) return;

          const segments = pathParts.slice(componentsIndex + 2, -1);
          let currentPath = category;
          let currentChildren = categoryNode.children!;
          const segmentsToExpand = [categoryNode.path];

          segments.forEach((segment) => {
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
            segmentsToExpand.push(segmentPath);
          });

          currentChildren.push({
            name: story.componentName,
            type: 'component',
            path: `${currentPath}/${story.componentName}`,
            story
          });
          storyPathMap.set(story.id, segmentsToExpand);
          categoryNode.count = (categoryNode.count || 0) + 1;
        });
      });

      playgroundComponentTreeSortTreeNode(categoryNode);
      playgroundComponentTreeAnnotateAutoSelectable(categoryNode);
      tree.push(categoryNode);
    });

    return tree;
  }

  const tree = $derived(buildTree());

  $effect(() => {
    if (tree.length > 0 && expandedNodes.size === 0) {
      const toExpand = new Set<string>();
      tree.forEach(categoryNode => {
        toExpand.add(categoryNode.path);
        if (categoryNode.children) {
          categoryNode.children.forEach(folderNode => {
            if (folderNode.type === 'folder') toExpand.add(folderNode.path);
          });
        }
      });
      expandedNodes = toExpand;
    }
  });

  const toggleNode = (path: string) => {
    if (expandedNodes.has(path)) expandedNodes.delete(path);
    else expandedNodes.add(path);
    expandedNodes = new Set(expandedNodes);
    focusedPath = path;
  };

  const handleComponentClick = (story: Story) => {
    props.onComponentSelect?.(story.id);
    const storyPath = Array.from(storyPathMap.entries()).find(([id]) => id === story.id)?.[1];
    if (storyPath && storyPath.length > 0) focusedPath = storyPath[storyPath.length - 1];
  };

  function buildFlatNodeList(): string[] {
    const flatList: string[] = [];
    function traverse(node: TreeNodeData) {
      flatList.push(node.path);
      if (expandedNodes.has(node.path) && node.children?.length) node.children.forEach(traverse);
    }
    tree.forEach(traverse);
    return flatList;
  }

  const flatNodeList = $derived(buildFlatNodeList());

  const handleKeyDown = (event: KeyboardEvent) => {
    const handledKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' '];
    if (!handledKeys.includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();

    const currentIndex = focusedPath ? flatNodeList.indexOf(focusedPath) : -1;
    if (event.key === 'ArrowDown') {
      const next = currentIndex < flatNodeList.length - 1 ? currentIndex + 1 : currentIndex;
      if (next !== currentIndex || currentIndex === -1) focusedPath = flatNodeList[next];
    } else if (event.key === 'ArrowUp') {
      const next = currentIndex > 0 ? currentIndex - 1 : 0;
      if (next !== currentIndex || currentIndex === -1) focusedPath = flatNodeList[next];
    }

    if (focusedPath) {
      const focusedNode = playgroundComponentTreeFindNodeByPath(tree, focusedPath);
      if (!focusedNode) return;
      if (event.key === 'ArrowRight' && (focusedNode.type === 'folder' || focusedNode.type === 'category') && !expandedNodes.has(focusedPath)) toggleNode(focusedPath);
      else if (event.key === 'ArrowLeft' && (focusedNode.type === 'folder' || focusedNode.type === 'category') && expandedNodes.has(focusedPath)) toggleNode(focusedPath);
      else if (event.key === 'Enter' || event.key === ' ') {
        if (focusedNode.type === 'component' && focusedNode.story) handleComponentClick(focusedNode.story);
        else if (focusedNode.type === 'folder' && focusedNode.autoStory) handleComponentClick(focusedNode.autoStory);
        else toggleNode(focusedPath);
      }
    }
  };

  $effect(() => { if (flatNodeList.length && !focusedPath) focusedPath = flatNodeList[0]; });

  $effect(() => {
    if (!focusedPath || !treeContainer) return;
    const el = treeContainer.querySelector(`button.focused`);
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });

  $effect(() => {
    if (!props.selectedStoryId) return;
    const nodes = storyPathMap.get(props.selectedStoryId);
    if (!nodes?.length) return;
    const updated = new Set(expandedNodes);
    let changed = false;
    nodes.forEach(p => { if (!updated.has(p)) { updated.add(p); changed = true; } });
    if (changed) expandedNodes = updated;
  });

  return { tree, expandedNodes, focusedPath, treeContainer, categoryConfig, flatNodeList, toggleNode, handleComponentClick, handleKeyDown };
}

export default createPlaygroundComponentTreeState;
