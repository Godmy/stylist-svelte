<script lang="ts">
  import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';
  import AdvancedVirtualTree from './index.svelte';

  let props = $props<{
    tree?: TreeNodeItemNode[];
    onSelectCallback?: (key: string | undefined) => void;
    onToggleCallback?: (key: string | undefined) => void;
    itemHeight?: number;
    visibleItemCount?: number;
    bufferSize?: number;
    class?: string;
    onSelect?: (detail: { node: TreeNodeItemNode }) => void;
    onExpand?: (detail: { node: TreeNodeItemNode }) => void;
    onCollapse?: (detail: { node: TreeNodeItemNode }) => void;
  }>();

  const tree = $derived(props.tree ?? []);
  const itemHeight = $derived(props.itemHeight ?? 36);
  const visibleItemCount = $derived(props.visibleItemCount ?? 15);
  const bufferSize = $derived(props.bufferSize ?? 5);
  const className = $derived(props.class ?? '');

  // Handle node selection
  const handleSelect = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    props.onSelect?.(e.detail);
    props.onSelectCallback?.(e.detail.node.key);
  };

  // Handle toggle events
  const handleToggle = (key: string | undefined) => {
    if (key) {
      props.onToggleCallback?.(key);
    }
  };

  // Handle expand/collapse
  const handleExpand = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    props.onExpand?.(e.detail);
  };

  const handleCollapse = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    props.onCollapse?.(e.detail);
  };

  const restProps = $derived.by(() => {
    const {
      class: _class,
      tree: _tree,
      onSelectCallback: _onSelectCallback,
      onToggleCallback: _onToggleCallback,
      itemHeight: _itemHeight,
      visibleItemCount: _visibleItemCount,
      bufferSize: _bufferSize,
      onSelect: _onSelect,
      onExpand: _onExpand,
      onCollapse: _onCollapse,
      ...rest
    } = props;
    return rest;
  });
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
    gap: var(--spacing-1);
  }
</style>


