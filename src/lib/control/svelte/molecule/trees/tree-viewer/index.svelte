<script lang="ts">
  import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';
  import AdvancedVirtualTree from './index.svelte';
  import { createTreeViewerState } from '$stylist/control/function/state/tree-viewer';

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

  const state = createTreeViewerState(props);

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

<div class="tree-viewer {state.className}" {...restProps}>
  <AdvancedVirtualTree
    tree={state.tree}
    itemHeight={state.itemHeight}
    visibleItemCount={state.visibleItemCount}
    bufferSize={state.bufferSize}
    onToggleCallback={state.handleToggle}
    on:select={state.handleSelect}
    on:expand={state.handleExpand}
    on:collapse={state.handleCollapse}
  />
</div>

<style>
  .tree-viewer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }
</style>
