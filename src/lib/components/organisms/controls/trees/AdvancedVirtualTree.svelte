<script lang="ts">
  import type { TreeNode } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  
  // Локальная реализация debounce
  function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: any;
    return function(this: any, ...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    } as T;
  }

  interface FlatNode {
    node: TreeNode;
    level: number;
    key: string;
    parentKey?: string;
    visible: boolean;
    startIndex: number; // Starting index in the flattened array
    endIndex: number;   // Ending index of its subtree
  }

  let { 
    tree = [],
    onSelectCallback = () => {},
    onToggleCallback = () => {},
    itemHeight = 36,
    visibleItemCount = 15,
    bufferSize = 5, // Количество дополнительных элементов сверху и снизу для плавности
    class: className = '',
    ...restProps
  }: { 
    tree?: TreeNode[]; 
    onSelectCallback?: (key: string | undefined) => void; 
    onToggleCallback?: (key: string | undefined) => void;
    itemHeight?: number;
    visibleItemCount?: number;
    bufferSize?: number;
    class?: string;
  } & Record<string, any> = $props();

  const dispatch = createEventDispatcher();

  // Define state for expanded nodes using Map for better performance
  let expandedNodes: Map<string, boolean> = $state(new Map());
  let scrollTop: number = $state(0);
  let containerRef: HTMLDivElement | null = $state(null);
  
  // Cache for flattened tree and key-to-index mapping
  let flatTreeCache: FlatNode[] | null = $state(null);
  let keyToIndexMap: Map<string, number> = $state(new Map());
  let treeVersion: number = $state(0); // Для инвалидации кеша при изменении дерева

  // Функция для выравнивания дерева с оптимизациями
  const buildFlatTree = (nodes: TreeNode[], level = 0, parentKey?: string, startIndex = 0): { nodes: FlatNode[], count: number } => {
    let result: FlatNode[] = [];
    let currentIndex = startIndex;
    
    for (const node of nodes) {
      if (!node.key) continue; // Skip nodes without keys
      
      const key = node.key;
      const parentExpanded = parentKey ? expandedNodes.get(parentKey) : true;
      const isVisible = parentExpanded !== false;
      
      const flatNode: FlatNode = {
        node,
        level,
        key,
        parentKey,
        visible: isVisible,
        startIndex: currentIndex,
        endIndex: 0 // Will be updated later
      };
      
      result.push(flatNode);
      currentIndex++;
      
      if (node.child && node.child.length > 0) {
        const isExpanded = expandedNodes.get(key) ?? false;
        if (isExpanded) {
          const { nodes: childNodes, count: childCount } = buildFlatTree(
            node.child, 
            level + 1, 
            key, 
            currentIndex
          );
          
          result = result.concat(childNodes);
          currentIndex += childCount;
        }
      }
      
      // Update the endIndex to reflect the end of this node's subtree
      flatNode.endIndex = currentIndex - 1;
    }
    
    return { nodes: result, count: currentIndex - startIndex };
  };
  
  // Обновленная версия flatTree с кешированием
  let flatTree = $derived.by(() => {
    if (flatTreeCache && treeVersion === 0) { // Упрощенная проверка кеша
      // В реальной реализации нужно проверять, изменилось ли дерево
      return flatTreeCache;
    }
    
    const { nodes } = buildFlatTree(tree);
    flatTreeCache = nodes;
    
    // Build key-to-index map for fast lookups
    const map = new Map<string, number>();
    nodes.forEach((node, index) => {
      if (node.key) map.set(node.key, index);
    });
    keyToIndexMap = map;
    
    return nodes;
  });
  
  // Calculate the total height of the virtual container
  const totalHeight = $derived(flatTree.length * itemHeight);
  
  // Calculate the range of nodes to render based on scroll position with buffer
  const startIndex = $derived(Math.max(0, Math.floor(scrollTop / itemHeight) - bufferSize));
  const endIndex = $derived(Math.min(
    flatTree.length, 
    startIndex + visibleItemCount + (bufferSize * 2)
  ));
  
  // Get the nodes to render
  const renderedNodes = $derived(
    flatTree
      .filter(node => node.visible)
      .slice(startIndex, endIndex)
  );
  
  // Calculate offsets for proper positioning
  const startOffset = $derived(startIndex * itemHeight);

  // Toggle node expansion with debouncing
  const toggleNode = debounce((flatNode: FlatNode) => {
    const { key, node } = flatNode;
    if (!key) return;
    
    const isCurrentlyExpanded = expandedNodes.get(key);
    const newExpandedState = !isCurrentlyExpanded;
    
    expandedNodes.set(key, newExpandedState);
    
    // Invalidate cache when expanding/collapsing
    treeVersion++;
    
    if (newExpandedState) {
      dispatch('expand', { node });
    } else {
      dispatch('collapse', { node });
    }
    
    onToggleCallback(key);
  }, 50); // 50ms debounce

  // Handle node selection
  const handleSelect = (flatNode: FlatNode) => {
    if (flatNode.key) {
      onSelectCallback(flatNode.key);
      dispatch('select', { node: flatNode.node });
    }
  };
  
  // Handle scroll with debouncing to reduce updates
  const handleScroll = debounce((e: Event) => {
    const target = e.target as HTMLElement;
    if (target) {
      scrollTop = target.scrollTop;
    }
  }, 16); // ~60fps
  
  // Scroll to specific node by key - наиболее эффективная реализация
  const scrollToNode = (key: string) => {
    const index = keyToIndexMap.get(key);
    if (index !== undefined && containerRef) {
      containerRef.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
    }
  };
  
  // Expand to node and scroll to it
  const expandToNode = (key: string) => {
    const index = keyToIndexMap.get(key);
    if (index === undefined) return;
    
    const node = flatTree[index];
    if (!node) return;
    
    // Build path from node to root
    let currentKey = node.parentKey;
    const expansionsNeeded: string[] = [];
    
    while (currentKey) {
      const parentNode = flatTree.find(n => n.key === currentKey);
      if (!parentNode || expandedNodes.get(currentKey)) {
        if (parentNode && !expandedNodes.get(currentKey)) {
          expansionsNeeded.push(currentKey);
        }
        break;
      }
      
      expansionsNeeded.push(currentKey);
      currentKey = parentNode.parentKey;
    }
    
    // Expand all parent nodes
    for (const key of expansionsNeeded) {
      expandedNodes.set(key, true);
    }
    
    // Invalidate cache
    treeVersion++;
    
    // Scroll to the target node after a brief delay to allow updates
    setTimeout(() => scrollToNode(key), 50);
  };
  
  // Find nodes by criteria (for search functionality)
  const findNodes = (predicate: (node: TreeNode) => boolean) => {
    return flatTree.filter(flatNode => predicate(flatNode.node)).map(flatNode => flatNode.node);
  };
  
  // Get visible node count (useful for displaying counts, etc.)
  const visibleNodeCount = $derived(flatTree.filter(node => node.visible).length);
</script>

<div 
  class="advanced-virtual-tree-container {className}" 
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
  
  <!-- Optional: Display some status information -->
  <div class="status-bar">
    <small>Visible: {visibleNodeCount} of {flatTree.length} nodes</small>
  </div>
</div>

<style>
  .advanced-virtual-tree-container {
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
  
  .status-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #e2e8f0;
    font-size: 0.75rem;
    color: #64748b;
  }
</style>