import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';

export interface TreeViewerProps {
  tree?: TreeNodeItemNode[];
  onSelect?: (detail: { node: TreeNodeItemNode }) => void;
  onSelectCallback?: (key: string | undefined) => void;
  onToggleCallback?: (key: string | undefined) => void;
  onExpand?: (detail: { node: TreeNodeItemNode }) => void;
  onCollapse?: (detail: { node: TreeNodeItemNode }) => void;
  itemHeight?: number;
  visibleItemCount?: number;
  bufferSize?: number;
  class?: string;
}

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

  return { tree, itemHeight, visibleItemCount, bufferSize, className, handleSelect, handleToggle, handleExpand, handleCollapse };
}

export default createTreeViewerState;
