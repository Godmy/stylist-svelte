import type { PlaygroundComponentTreeTreeNodeData } from '$stylist/playground/type/struct/playground-component-tree-tree-node-data';
export function playgroundComponentTreeSortTreeNode(node: PlaygroundComponentTreeTreeNodeData): void {
  if (!node.children) return;

  node.children.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'folder' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  node.children.forEach(playgroundComponentTreeSortTreeNode);
}
