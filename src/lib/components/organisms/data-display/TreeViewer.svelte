<script lang="ts">
  import type { TreeNode } from '$lib/types';
  import VirtualTree from './VirtualTree.svelte';
  import { createEventDispatcher } from 'svelte';
  
  let { 
    tree = [],
    onSelectCallback = () => {},
    onToggleCallback = () => {},
    itemHeight = 36,
    visibleItemCount = 15,
    class: className = '',
    ...restProps
  }: { 
    tree?: TreeNode[]; 
    onSelectCallback?: (key: string | undefined) => void; 
    onToggleCallback?: (key: string | undefined) => void;
    itemHeight?: number;
    visibleItemCount?: number;
    class?: string;
  } & Record<string, any> = $props();

  const dispatch = createEventDispatcher();

  // Handle node selection
  const handleSelect = (e: CustomEvent<{ node: TreeNode }>) => {
    dispatch('select', e.detail);
    onSelectCallback(e.detail.node.key);
  };
  
  // Handle toggle events
  const handleToggle = (key: string | undefined) => {
    if (key) {
      onToggleCallback(key);
    }
  };
  
  // Handle expand/collapse
  const handleExpand = (e: CustomEvent<{ node: TreeNode }>) => {
    dispatch('expand', e.detail);
  };
  
  const handleCollapse = (e: CustomEvent<{ node: TreeNode }>) => {
    dispatch('collapse', e.detail);
  };
</script>

<div class="tree-viewer {className}" {...restProps}>
  <VirtualTree 
    {tree}
    {itemHeight}
    {visibleItemCount}
    onSelectCallback={onSelectCallback}
    onToggleCallback={handleToggle}
    on:select={handleSelect}
    on:expand={handleExpand}
    on:collapse={handleCollapse}
  />
</div>

<style>
  .tree-viewer {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>