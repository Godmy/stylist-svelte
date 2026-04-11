<script lang="ts">
  import PlaygroundTreeNode from '../playground-tree-node/index.svelte';
  import type { Props } from '$stylist/development/type/struct/playground-component-tree';
  import { createPlaygroundComponentTreeState } from '$stylist/development/function/state/playground-component-tree';

  let props: Props = $props();
  const state = createPlaygroundComponentTreeState(props);
</script>

<div
  bind:this={state.treeContainer}
  class="tree-container bg-white dark:bg-gray-900 p-3"
  tabindex="0"
  onkeydown={state.handleKeyDown}
  role="tree"
  aria-label="Component tree"
>
  <nav class="space-y-1">
    {#each state.tree as categoryNode}
      <PlaygroundTreeNode
        node={categoryNode}
        level={0}
        expandedNodes={state.expandedNodes}
        categoryConfig={state.categoryConfig}
        onToggle={state.toggleNode}
        onComponentClick={state.handleComponentClick}
        selectedStoryId={props.selectedStoryId}
        focusedPath={state.focusedPath}
      />
    {/each}
  </nav>
</div>

<style>
  .tree-container {
    height: 100%;
    min-height: var(--size-0);
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    -webkit-overflow-scrolling: touch;
  }

  .tree-container:focus {
    outline: none;
  }

  /* Custom scrollbar */
  .tree-container::-webkit-scrollbar {
    width: var(--spacing-2);
  }

  .tree-container::-webkit-scrollbar-track {
    background: color-mix(in srgb, var(--color-text-primary) 5%, transparent);
  }

  .tree-container::-webkit-scrollbar-thumb {
    background: color-mix(in srgb, var(--color-text-secondary) 50%, transparent);
    border-radius: var(--border-radius-base);
  }

  .tree-container::-webkit-scrollbar-thumb:hover {
    background: color-mix(in srgb, var(--color-text-secondary) 70%, transparent);
  }

  :global(.dark) .tree-container::-webkit-scrollbar-track {
    background: color-mix(in srgb, var(--color-background-primary) 5%, transparent);
  }

  :global(.dark) .tree-container::-webkit-scrollbar-thumb {
    background: color-mix(in srgb, var(--color-border-primary) 50%, transparent);
  }

  :global(.dark) .tree-container::-webkit-scrollbar-thumb:hover {
    background: color-mix(in srgb, var(--color-border-primary) 70%, transparent);
  }
</style>
