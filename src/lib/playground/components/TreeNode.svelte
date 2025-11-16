<script lang="ts">
  import { ChevronRight, Folder, FolderOpen, FileCode } from 'lucide-svelte';
  import Self from './TreeNode.svelte';

  interface Story {
    id: string;
    componentName: string;
    category: string;
    subcategory?: string;
    path: string;
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
    node: TreeNodeData;
    level: number;
    expandedNodes: Set<string>;
    categoryConfig: Record<string, {
      icon: any;
      color: string;
      bg: string;
      border: string;
    }>;
    onToggle: (path: string) => void;
    onComponentClick: (story: Story) => void;
  }

  let { node, level, expandedNodes, categoryConfig, onToggle, onComponentClick }: Props = $props();

  const isExpanded = $derived(expandedNodes.has(node.path));
  const hasChildren = $derived(node.children && node.children.length > 0);

  // Get category config based on path
  const config = $derived.by(() => {
    const categoryName = node.path.split('/')[0];
    return categoryConfig[categoryName];
  });

  // Calculate padding based on level and type
  // Folders use level * 12px
  // Components add extra space to align with folder content (chevron 14px + gap 8px = 22px)
  const leftPadding = $derived(
    node.type === 'component'
      ? `padding-left: ${level * 12 + 22}px`
      : `padding-left: ${level * 12}px`
  );
</script>

{#if node.type === 'category'}
  <!-- Category Node -->
  <div class="space-y-0.5">
    <button
      onclick={() => onToggle(node.path)}
      class="w-full flex items-center gap-2 pr-2 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 group"
      style="padding-left: 0px"
    >
      <!-- Chevron -->
      <div class="flex-shrink-0 w-3.5 transition-transform duration-200 {isExpanded ? 'rotate-90' : ''}">
        <ChevronRight class="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
      </div>

      <!-- Icon -->
      {#if config?.icon}
        {@const IconComponent = config.icon}
        <div class="flex-shrink-0 w-3.5">
          <IconComponent class="w-3.5 h-3.5 {config.color}" />
        </div>
      {/if}

      <!-- Name -->
      <span class="flex-1 text-left font-semibold text-xs text-gray-900 dark:text-gray-100 min-w-0">
        {node.name}
      </span>

      <!-- Count -->
      <span class="w-8 text-right text-xs font-bold text-gray-500 dark:text-gray-400 tabular-nums flex-shrink-0">
        {node.count || 0}
      </span>
    </button>

    <!-- Category Children with border -->
    {#if isExpanded && hasChildren}
      <div class="relative mt-1">
        <!-- Vertical border line -->
        <div class="absolute left-[14px] top-0 bottom-0 w-0.5 {config.border} bg-current"></div>

        <!-- Children -->
        <div class="space-y-0.5">
          {#each node.children || [] as child}
            <Self
              node={child}
              level={level + 1}
              {expandedNodes}
              {categoryConfig}
              {onToggle}
              {onComponentClick}
            />
          {/each}
        </div>
      </div>
    {/if}
  </div>
{:else if node.type === 'folder'}
  <!-- Folder Node -->
  <div class="space-y-0.5">
    <button
      onclick={() => onToggle(node.path)}
      style={leftPadding}
      class="w-full flex items-center gap-2 pr-2 py-1.5 rounded-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
    >
      <!-- Chevron -->
      <div class="flex-shrink-0 w-3.5 transition-transform duration-200 {isExpanded ? 'rotate-90' : ''}">
        <ChevronRight class="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
      </div>

      <!-- Folder Icon -->
      <div class="flex-shrink-0 w-3.5">
        {#if isExpanded}
          <FolderOpen class="w-3.5 h-3.5 {config.color} opacity-70" />
        {:else}
          <Folder class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
        {/if}
      </div>

      <!-- Name -->
      <span class="flex-1 text-left text-xs font-medium text-gray-700 dark:text-gray-300 min-w-0">
        {node.name}
      </span>

      <!-- Count -->
      <span class="w-8 text-right text-xs font-medium text-gray-400 dark:text-gray-500 tabular-nums flex-shrink-0">
        {node.count || 0}
      </span>
    </button>

    <!-- Folder Children with border -->
    {#if isExpanded && hasChildren}
      <div class="relative mt-0.5">
        <!-- Vertical border line -->
        <div class="absolute w-px bg-gray-200 dark:bg-gray-700 top-0 bottom-0" style="left: {level * 12 + 14}px"></div>

        <!-- Children -->
        <div class="space-y-0.5">
          {#each node.children || [] as child}
            <Self
              node={child}
              level={level + 1}
              {expandedNodes}
              {categoryConfig}
              {onToggle}
              {onComponentClick}
            />
          {/each}
        </div>
      </div>
    {/if}
  </div>
{:else if node.type === 'component' && node.story}
  <!-- Component Node -->
  <button
    onclick={() => onComponentClick(node.story!)}
    style={leftPadding}
    class="w-full flex items-center gap-2 pr-2 py-1.5 text-xs rounded-md transition-all duration-150 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 group text-gray-600 dark:text-gray-400"
  >
    <div class="flex-shrink-0 w-3.5">
      <FileCode class="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
    </div>
    <span class="flex-1 text-left truncate font-medium min-w-0">
      {node.name}
    </span>
  </button>
{/if}
