<script lang="ts">
  import type { TreeNode } from '$lib/types';
  import { createEventDispatcher } from 'svelte';

  let { 
    node,
    onSelectCallback = () => {},
    secondaryIcon = undefined,
    faIcon = false,
    expandedNodes = new Set<string>(),
    ...restProps
  }: { 
    node: TreeNode; 
    onSelectCallback?: (key: string | undefined) => void; 
    secondaryIcon?: any; 
    faIcon?: boolean;
    expandedNodes: Set<string>;
  } = $props();

  const dispatch = createEventDispatcher();

  let isExpanded = $derived(expandedNodes.has(node.key || ''));

  // Handle node selection
  const handleSelect = () => {
    if (node.key) {
      onSelectCallback(node.key);
      dispatch('select', { node });
    }
  };

  // Handle toggle
  const handleToggle = () => {
    if (node.key) {
      dispatch('toggle', { node });
    }
  };
</script>

<div class="tree-node-item" {...restProps}>
  <div class="node-header flex items-center">
    {#if node.child && node.child.length > 0}
      <button 
        class="toggle-btn mr-2" 
        onclick={handleToggle}
        aria-label={isExpanded ? 'Collapse' : 'Expand'}
      >
        {isExpanded ? '▼' : '►'}
      </button>
    {/if}
    
    <button 
      class="node-label flex-1 text-left" 
      onclick={handleSelect}
    >
      {node.desc}
    </button>
    
    {#if secondaryIcon}
      <span class="secondary-icon ml-2">
        {#if faIcon}
          <i class={secondaryIcon}></i>
        {:else}
          {secondaryIcon}
        {/if}
      </span>
    {/if}
  </div>
  
  {#if isExpanded && node.child && node.child.length > 0}
    <div class="node-children ml-6 mt-1">
      {#each node.child as childNode (childNode.key || childNode.desc)}
        <svelte:self 
          node={childNode}
          {onSelectCallback}
          {secondaryIcon}
          {faIcon}
          {expandedNodes}
          on:select={(e: CustomEvent<{ node: TreeNode }>) => dispatch('select', e.detail)}
          on:toggle={(e: CustomEvent<{ node: TreeNode }>) => dispatch('toggle', e.detail)}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .tree-node-item {
    display: flex;
    flex-direction: column;
  }
  
  .node-header {
    padding: 0.25rem 0;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    font-size: 0.75rem;
  }
  
  .node-label {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    text-align: left;
    width: 100%;
  }
  
  .node-label:hover {
    background-color: #f0f0f0;
  }
  
  .node-children {
    border-left: 1px solid #ddd;
  }
</style>