<script lang="ts">
  import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';
  import type { TreeNode } from '$stylist/control/type/struct/tree-node';
  import { AdvancedVirtualTree } from '$stylist/control/svelte/organism/trees/advanced-virtual-tree';
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

  function normalizeNode(node: TreeNodeItemNode, index: number): TreeNode {
    return {
      id: String(node.key ?? `node-${index}`),
      label: String(node.desc ?? node.key ?? `Node ${index + 1}`),
      children: node.child?.map((child, childIndex) => normalizeNode(child, childIndex))
    };
  }

  const nodes = $derived(state.tree.map((node, index) => normalizeNode(node, index)));

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
    nodes={nodes}
  />
</div>

<style>
  .tree-viewer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }
</style>
