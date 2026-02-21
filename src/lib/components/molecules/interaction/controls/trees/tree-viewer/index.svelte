<script lang="ts">
  import type { TreeNodeItemNode } from '$stylist/design-system/props/interaction/tree-node-item';
  import AdvancedVirtualTree from './index.svelte';
  import { createEventDispatcher } from 'svelte';
  
  let { 
    tree = [],
    onSelectCallback = () => {},
    onToggleCallback = () => {},
    itemHeight = 36,
    visibleItemCount = 15,
    bufferSize = 5,
    class: className = '',
    ...restProps
  }: { 
    tree?: TreeNodeItemNode[]; 
    onSelectCallback?: (key: string | undefined) => void; 
    onToggleCallback?: (key: string | undefined) => void;
    itemHeight?: number;
    visibleItemCount?: number;
    bufferSize?: number;
    class?: string;
  } & Record<string, any> = $props();

  const dispatch = createEventDispatcher();

  // Handle node selection
  const handleSelect = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
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
  const handleExpand = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    dispatch('expand', e.detail);
  };
  
  const handleCollapse = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    dispatch('collapse', e.detail);
  };
</script>

<div class="tree-viewer {className}" {...restProps}>
  <AdvancedVirtualTree 
    {tree}
    {itemHeight}
    {visibleItemCount}
    {bufferSize}
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
