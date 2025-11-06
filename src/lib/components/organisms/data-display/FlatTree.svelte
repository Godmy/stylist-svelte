<script lang="ts">
  import type { TreeNode } from '$lib/types';
  import { createEventDispatcher } from 'svelte';

  interface FlatNode {
    node: TreeNode;
    level: number;
    key: string;
    parentKey?: string;
    visible: boolean;
  }

  let { 
    tree = [],
    onSelectCallback = () => {},
    onToggleCallback = () => {},
    class: className = '',
    ...restProps
  }: { 
    tree?: TreeNode[]; 
    onSelectCallback?: (key: string | undefined) => void; 
    onToggleCallback?: (key: string | undefined) => void;
    class?: string;
  } & Record<string, any> = $props();

  const dispatch = createEventDispatcher();

  // Define state for expanded nodes using Map for better performance
  let expandedNodes: Map<string, boolean> = $state(new Map());

  // Flatten the tree structure
  const flattenTree = (nodes: TreeNode[], level = 0, parentKey?: string): FlatNode[] => {
    let result: FlatNode[] = [];
    
    for (const node of nodes) {
      if (!node.key) continue; // Skip nodes without keys
      
      const key = node.key;
      const isParentExpanded = parentKey ? expandedNodes.get(parentKey) : true;
      const isVisible = isParentExpanded !== false; // If parent is collapsed or undefined (root), node is visible
      
      result.push({
        node,
        level,
        key,
        parentKey,
        visible: isVisible
      });
      
      if (node.child && node.child.length > 0) {
        const isExpanded = expandedNodes.get(key) ?? false;
        if (isExpanded) {
          result = result.concat(flattenTree(node.child, level + 1, key));
        }
      }
    }
    
    return result;
  };
  
  // Get flattened tree
  const flatTree = $derived(flattenTree(tree));

  // Toggle node expansion
  const toggleNode = (flatNode: FlatNode) => {
    const { key, node } = flatNode;
    if (!key) return;
    
    const isCurrentlyExpanded = expandedNodes.get(key);
    const newExpandedState = !isCurrentlyExpanded;
    
    expandedNodes.set(key, newExpandedState);
    
    if (newExpandedState) {
      dispatch('expand', { node });
    } else {
      dispatch('collapse', { node });
    }
    
    onToggleCallback(key);
  };
  
  // Handle node selection
  const handleSelect = (flatNode: FlatNode) => {
    if (flatNode.key) {
      onSelectCallback(flatNode.key);
      dispatch('select', { node: flatNode.node });
    }
  };
</script>

<div class="flat-tree {className}" {...restProps}>
  {#each flatTree as flatNode (flatNode.key)}
    {#if flatNode.visible}
      <div 
        class="tree-node flex items-center py-1" 
        style={`padding-left: ${flatNode.level * 24}px;`}
      >
        {#if flatNode.node.child && flatNode.node.child.length > 0}
          <button 
            class="toggle-btn mr-2" 
            onclick={() => toggleNode(flatNode)}
            aria-label={expandedNodes.get(flatNode.key) ? 'Collapse' : 'Expand'}
          >
            {#if expandedNodes.get(flatNode.key)} ▼ {:else} ► {/if}
          </button>
        {:else}
          <span class="toggle-placeholder mr-2">•</span>
        {/if}
        
        <button 
          class="node-label flex-1 text-left" 
          onclick={() => handleSelect(flatNode)}
        >
          {flatNode.node.desc}
        </button>
      </div>
    {/if}
  {/each}
</div>

<style>
  .flat-tree {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .tree-node {
    border-radius: 0.25rem;
    transition: background-color 0.2s;
  }
  
  .tree-node:hover {
    background-color: #f8fafc;
  }
  
  .toggle-btn, .toggle-placeholder {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    font-size: 0.75rem;
    width: 1.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
  }
  
  .node-label {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    text-align: left;
    width: 100%;
    font-family: inherit;
  }
  
  .node-label:hover {
    color: #2563eb;
  }
</style>