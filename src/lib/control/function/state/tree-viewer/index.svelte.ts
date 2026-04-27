import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';
import type { TreeViewerProps } from '$stylist/control/interface/recipe/tree-viewer';

export function createTreeViewerState(props: TreeViewerProps) {
  const tree = $derived(props.tree ?? []);
  const itemHeight = $derived(props.itemHeight ?? 36);
  const visibleItemCount = $derived(props.visibleItemCount ?? 15);
  const bufferSize = $derived(props.bufferSize ?? 5);
  const className = $derived(props.class ?? '');

  const handleSelect = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    props.onSelect?.(e.detail);
    props.onSelectCallback?.(e.detail.node.key);
  };

  const handleToggle = (key: string | undefined) => {
    if (key) props.onToggleCallback?.(key);
  };

  const handleExpand = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    props.onExpand?.(e.detail);
  };

  const handleCollapse = (e: CustomEvent<{ node: TreeNodeItemNode }>) => {
    props.onCollapse?.(e.detail);
  };

  return {
    get tree() { return tree; },
    get itemHeight() { return itemHeight; },
    get visibleItemCount() { return visibleItemCount; },
    get bufferSize() { return bufferSize; },
    get className() { return className; },
    handleSelect,
    handleToggle,
    handleExpand,
    handleCollapse
  };
}

export default createTreeViewerState;
