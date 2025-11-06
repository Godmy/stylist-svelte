<script lang="ts">
  import type { TreeNode } from '$lib/types';
  import { ChevronRight, ChevronDown } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';
  
  let { 
    node, 
    onSelectCallback = () => {}, 
    secondaryIcon = undefined, 
    faIcon = false,
    expandedNodes
  }: {
    node: TreeNode;
    onSelectCallback?: (key: string | undefined) => void;
    secondaryIcon?: any;
    faIcon?: boolean;
    expandedNodes?: Set<string>;
  } = $props();

  // Initialize expandedNodes if not provided
  if (!expandedNodes) {
    expandedNodes = new Set();
  }

  const dispatch = createEventDispatcher();

  // Function to handle node selection
  const handleSelect = () => {
    if (node.key) {
      onSelectCallback(node.key);
      dispatch('select', { node });
    }
  };

  // Function to toggle node expansion
  const toggleExpand = (e: Event) => {
    e.stopPropagation();
    if (node.key) {
      if (expandedNodes.has(node.key)) {
        expandedNodes.delete(node.key);
      } else {
        expandedNodes.add(node.key);
      }
    }
    dispatch('toggle', { node });
  };

  // Function to check if node has children
  const hasChildren = (node: TreeNode): boolean => {
    return node.child !== undefined && node.child.length > 0;
  };
  
  // Check if this node is expanded
  let expanded = $derived(node.key ? expandedNodes.has(node.key) : false);
</script>

<div class="node-container">
  <div 
    class="node-header" 
    class:expanded={expanded}
    onclick={() => !hasChildren(node) && handleSelect()}
    onkeydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        !hasChildren(node) && handleSelect();
      }
    }}
    role="treeitem"
    tabindex="0"
    aria-expanded={hasChildren(node) ? expanded : undefined}
    aria-selected="false"
  >
    {#if hasChildren(node)}
      <button 
        type="button"
        class="toggle-icon"
        onclick={toggleExpand}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand(e);
          }
        }}
        role="button"
        tabindex="0"
        aria-label={expanded ? 'Collapse' : 'Expand'}
      >
        {#if expanded}
          <ChevronDown class="w-4 h-4" />
        {:else}
          <ChevronRight class="w-4 h-4" />
        {/if}
      </button>
    {:else}
      <div class="no-toggle"></div>
    {/if}
    
    <span class="node-text">{node.desc}</span>
    
    {#if secondaryIcon}
      {#if faIcon}
        <!-- Using Svelte FA or similar icon implementation would go here -->
        <span class="secondary-icon">{secondaryIcon}</span>
      {:else}
        <img src={secondaryIcon} alt="secondary icon" class="secondary-icon-img" />
      {/if}
    {/if}
  </div>
  
  {#if hasChildren(node) && expanded}
    <div class="node-children" role="group">
      {#each node.child as child (child.key || child.desc)}
        <svelte:self 
          node={child}
          onSelectCallback={onSelectCallback}
          secondaryIcon={secondaryIcon}
          faIcon={faIcon}
          expandedNodes={expandedNodes}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .node-container {
    display: flex;
    flex-direction: column;
  }
  
  .node-header {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 150ms;
    transition: color 150ms;
    min-height: 32px;
  }
  
  .node-header:hover {
    background-color: #f3f4f6;
  }
  
  .node-header.expanded {
    background-color: #f9fafb;
  }
  
  .toggle-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    cursor: pointer;
    color: #6b7280;
  }
  
  .toggle-icon:hover {
    color: #374151;
  }
  
  .no-toggle {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  
  .node-text {
    flex: 1;
    color: #1f2937;
  }
  
  .secondary-icon {
    margin-left: 0.5rem;
    color: #6b7280;
  }
  
  .secondary-icon-img {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
  
  .node-children {
    margin-left: 1.5rem;
    border-left: 2px solid #e5e7eb;
    padding-left: 0.5rem;
  }
</style>