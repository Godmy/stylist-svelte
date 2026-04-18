<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundTreeNodeState } from '$stylist/development/function/state/playground-tree-node';

  import Self from './index.svelte';
  import type { PlaygroundTreeNodeProps } from '$stylist/development/type/struct/playground-tree-node-props';
const ChevronRight = 'chevron-right';
const Folder = 'folder';
const FolderOpen = 'folder-open';
const FileCode = 'file-code';

  let props: PlaygroundTreeNodeProps = $props();
  const state = createPlaygroundTreeNodeState(props);
</script>

{#if state.node.type === 'category'}
  <!-- Category Node -->
  <div class="space-y-0.5">
    <button
      onclick={state.handleToggle}
      class="w-full flex items-center gap-2 pr-2 py-2 rounded-lg transition-all duration-[var(--duration-200)] hover:bg-gray-100 dark:hover:bg-gray-800 group"
      class:focused={state.isFocused}
      style="padding-left: 0px"
    >
      <!-- Chevron -->
      <div class="flex-shrink-0 w-3.5 transition-transform duration-[var(--duration-200)] {state.isExpanded ? 'rotate-90' : ''}">
        <BaseIcon name={ChevronRight} class="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
      </div>

      <!-- Icon -->
      {#if state.config?.icon}
        <div class="flex-shrink-0 w-3.5">
          <BaseIcon name={state.config.icon} class="w-3.5 h-3.5 {state.config.color}" />
        </div>
      {/if}

      <!-- Name -->
      <span class="flex-1 text-left font-semibold text-xs text-gray-900 dark:text-gray-100 min-w-0">
        {state.node.name}
      </span>

      <!-- Count -->
      <span class="w-8 text-right text-xs font-bold text-gray-500 dark:text-gray-400 tabular-nums flex-shrink-0">
        {state.node.count || 0}
      </span>
    </button>

    <!-- Category Children with border -->
    {#if state.isExpanded && state.hasChildren}
      <div class="relative mt-1">
        <!-- Vertical border line -->
        <div class="absolute left-[14px] top-0 bottom-0 w-0.5 {state.config.border} bg-current"></div>

        <!-- Children -->
        <div class="space-y-0.5">
          {#each state.node.children || [] as child}
            <Self
              node={child}
              level={state.level + 1}
              expandedNodes={state.expandedNodes}
              categoryConfig={state.categoryConfig}
              onToggle={state.onToggle}
              onComponentClick={state.onComponentClick}
              selectedStoryId={state.selectedStoryId}
              focusedPath={state.focusedPath}
            />
          {/each}
        </div>
      </div>
    {/if}
  </div>
{:else if state.node.type === 'folder'}
  <!-- Folder Node -->
  <div class="space-y-0.5">
    <button
      onclick={state.handleClick}
      style={state.leftPadding}
      class="folder-node w-full flex items-center gap-2 pr-2 py-1.5 rounded-md transition-all duration-[var(--duration-200)] hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
      class:auto-selectable={state.isAutoSelectable}
      class:auto-selected={state.isAutoSelectable && state.node.autoStory?.id === state.selectedStoryId}
      class:focused={state.isFocused}
      aria-current={state.isAutoSelectable && state.node.autoStory?.id === state.selectedStoryId ? 'true' : undefined}
    >
      <!-- Chevron -->
      {#if !state.isAutoSelectable}
        <div class="flex-shrink-0 w-3.5 transition-transform duration-[var(--duration-200)] {state.isExpanded ? 'rotate-90' : ''}">
          <BaseIcon name={ChevronRight} class="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
        </div>
      {:else}
        <div class="flex-shrink-0 w-3.5">
          <span class="inline-flex w-2 h-2 rounded-full bg-[var(--playground-accent,var(--color-warning-500))]"></span>
        </div>
      {/if}

      <!-- Folder Icon -->
      <div class="flex-shrink-0 w-3.5">
        {#if state.isAutoSelectable}
          <BaseIcon name={Folder} class="w-3.5 h-3.5 text-[var(--playground-accent,var(--color-warning-500))]" />
        {:else}
          {#if state.isExpanded}
            <BaseIcon name={FolderOpen} class="w-3.5 h-3.5 {state.config.color} opacity-[var(--opacity-70)]" />
          {:else}
            <BaseIcon name={Folder} class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
          {/if}
        {/if}
      </div>

      <!-- Name -->
      <span class="flex-1 text-left text-xs font-medium text-gray-700 dark:text-gray-300 min-w-0">
        {state.node.name}
      </span>

      <!-- Count -->
      <span class="w-8 text-right text-xs font-medium text-gray-400 dark:text-gray-500 tabular-nums flex-shrink-0">
        {state.node.count || 0}
      </span>
    </button>

    <!-- Folder Children with border -->
    {#if !state.isAutoSelectable && state.isExpanded && state.hasChildren}
      <div class="relative mt-0.5">
        <!-- Vertical border line -->
        <div class="absolute w-px bg-gray-200 dark:bg-gray-700 top-0 bottom-0" style="left: {state.level * 12 + 14}px"></div>

        <!-- Children -->
        <div class="space-y-0.5">
          {#each state.node.children || [] as child}
            <Self
              node={child}
              level={state.level + 1}
              expandedNodes={state.expandedNodes}
              categoryConfig={state.categoryConfig}
              onToggle={state.onToggle}
              onComponentClick={state.onComponentClick}
              selectedStoryId={state.selectedStoryId}
              focusedPath={state.focusedPath}
            />
          {/each}
        </div>
      </div>
    {/if}
  </div>
{:else if state.node.type === 'component' && state.node.story}
  <!-- Component Node -->
  <button
    onclick={state.handleComponentClick}
    style={state.leftPadding}
    class="component-node w-full flex items-center gap-2 pr-2 pl-1 py-1.5 text-xs rounded-md border border-transparent transition-all duration-[var(--duration-150)] group text-gray-600 dark:text-gray-400"
    class:selected={state.isSelected}
    class:focused={state.isFocused}
    aria-current={state.isSelected ? 'true' : undefined}
  >
    <span class="component-indicator" aria-hidden="true"></span>
    <div class="flex items-center gap-2 flex-1 min-w-0">
      <div class="flex-shrink-0 w-3.5">
        <BaseIcon name={FileCode} class="w-3.5 h-3.5 opacity-[var(--opacity-40)] group-hover:opacity-[var(--opacity-100)] transition-opacity" />
      </div>
      <span class="flex-1 text-left truncate font-medium min-w-0">
        {state.node.name}
      </span>
    </div>
  </button>
{/if}

<style>
  .component-node {
    position: relative;
  }

  .component-node.selected {
    color: var(--playground-accent, var(--color-warning-500));
    background-color: var(--playground-accent-surface, color-mix(in srgb, var(--color-warning-500) 12%, transparent));
    border-color: color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 45%, transparent);
    box-shadow: var(--shadow-custom06);
  }

  .component-indicator {
    width: var(--size-0_35rem);
    height: var(--spacing-5);
    border-radius: var(--border-radius-full);
    background-color: transparent;
    transition: background-color var(--duration-120) var(--animation-ease);
    flex-shrink: 0;
  }

  .component-node.selected .component-indicator {
    background-color: var(--playground-accent, var(--color-warning-500));
  }

  .folder-node.auto-selectable {
    border: 1px solid transparent;
  }

  .folder-node.auto-selected {
    background-color: var(--playground-accent-surface, color-mix(in srgb, var(--color-warning-500) 12%, transparent));
    border-color: color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 30%, transparent);
    color: var(--playground-accent, var(--color-warning-500));
    box-shadow: var(--shadow-custom05);
  }

  .folder-node.auto-selectable:hover {
    border-color: color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 25%, transparent);
  }

  /* Keyboard navigation focus styles */
  button.focused {
    background-color: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
    outline: 2px solid color-mix(in srgb, var(--color-primary-500) 50%, transparent);
    outline-offset: -2px;
  }

  :global(.dark) button.focused {
    background-color: color-mix(in srgb, var(--color-primary-500) 15%, transparent);
    outline-color: color-mix(in srgb, var(--color-primary-500) 60%, transparent);
  }
</style>
