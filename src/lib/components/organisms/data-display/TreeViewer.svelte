<script lang="ts">
  import type { TreeNode } from '$lib/types';
  import TreeNodeItem from './TreeNodeItem.svelte';
  import { createEventDispatcher } from 'svelte';
  
  let { 
    tree = [],
    onSelectCallback = () => {},
    secondaryIcon = undefined,
    faIcon = false,
    class: className = '',
    ...restProps
  }: { 
    tree?: TreeNode[]; 
    onSelectCallback?: (key: string | undefined) => void; 
    secondaryIcon?: any; 
    faIcon?: boolean;
    class?: string;
  } & Record<string, any> = $props();
  
  const dispatch = createEventDispatcher();

  // Define state for expanded nodes
  let expandedNodes: Set<string> = $state(new Set());
  
  // Handle node selection
  const handleSelect = (e: CustomEvent<{ node: TreeNode }>) => {
    const node = e.detail.node;
    if (node.key) {
      onSelectCallback(node.key);
      dispatch('select', { node });
    }
  };
  
  // Handle toggle events
  const handleToggle = (e: CustomEvent<{ node: TreeNode }>) => {
    const node = e.detail.node;
    if (node.key) {
      if (expandedNodes.has(node.key)) {
        expandedNodes.delete(node.key);
      } else {
        expandedNodes.add(node.key);
      }
    }
  };
</script>

<div class="tree-viewer {className}" {...restProps}>
  {#each tree as node (node.key || node.desc)}
    <TreeNodeItem 
      {node} 
      {onSelectCallback}
      {secondaryIcon} 
      {faIcon}
      {expandedNodes}
      on:select={handleSelect}
      on:toggle={handleToggle}
    />
  {/each}
</div>

<style>
  .tree-viewer {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>