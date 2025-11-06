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
    itemHeight = 36, // высота одного элемента в пикселях
    visibleItemCount = 15, // количество видимых элементов одновременно
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

  // Define state for expanded nodes using Map for better performance
  let expandedNodes: Map<string, boolean> = $state(new Map());
  let scrollTop: number = $state(0);
  let containerRef: HTMLDivElement | null = $state(null);

  // Flatten the tree structure
  const flattenTree = (nodes: TreeNode[], level = 0, parentKey?: string): FlatNode[] => {
    let result: FlatNode[] = [];
    
    for (const node of nodes) {
      if (!node.key) continue; // Skip nodes without keys
      
      const key = node.key;
      const parentExpanded = parentKey ? expandedNodes.get(parentKey) : true;
      const isVisible = parentExpanded !== false;
      
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
  
  // Calculate the total height of the virtual container
  const totalHeight = $derived(flatTree.length * itemHeight);
  
  // Calculate the range of nodes to render based on scroll position
  const startIndex = $derived(Math.max(0, Math.floor(scrollTop / itemHeight)));
  const endIndex = $derived(Math.min(
    flatTree.length, 
    startIndex + visibleItemCount
  ));
  
  // Get the nodes to render
  const renderedNodes = $derived(
    flatTree
      .filter(node => node.visible)
      .slice(startIndex, endIndex)
  );
  
  // Calculate offsets for proper positioning
  const startOffset = $derived(startIndex * itemHeight);

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
  
  // Handle scroll
  const handleScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target) {
      scrollTop = target.scrollTop;
    }
  };
  
  // Scroll to specific node
  const scrollToNode = (key: string) => {
    const nodeIndex = flatTree.findIndex(n => n.key === key);
    if (nodeIndex !== -1 && containerRef) {
      containerRef.scrollTo({ top: nodeIndex * itemHeight, behavior: 'smooth' });
    }
  };
</script>

<div 
  class="virtual-tree-container {className}" 
  bind:this={containerRef}
  onscroll={handleScroll}
  {...restProps}
>
  <!-- Virtual container to hold total scroll height -->
  <div style={`height: ${totalHeight}px; position: relative;`}>
    <!-- Spacer div to position the visible items correctly -->
    <div style={`position: absolute; top: ${startOffset}px; width: 100%;`}>
      {#each renderedNodes as flatNode (flatNode.key)}
        <div 
          class="tree-node flex items-center py-1" 
          style={`height: ${itemHeight}px; padding-left: ${flatNode.level * 24}px;`}
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
      {/each}
    </div>
  </div>
</div>

<style>
  .virtual-tree-container {
    height: 500px; /* adjustable height */
    overflow-y: auto;
    border: 1px solid #cbd5e0;
    border-radius: 0.375rem;
    position: relative;
  }
  
  .tree-node {
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
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