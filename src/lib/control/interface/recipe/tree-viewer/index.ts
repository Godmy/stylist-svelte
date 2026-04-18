import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';

export interface TreeViewerProps extends StructIntersectAll<[]> {
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
