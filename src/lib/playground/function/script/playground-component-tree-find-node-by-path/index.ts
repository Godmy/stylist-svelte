import type { PlaygroundComponentTreeTreeNodeData } from '$stylist/playground/type/struct/playground-component-tree-tree-node-data';

export function playgroundComponentTreeFindNodeByPath(nodes: PlaygroundComponentTreeTreeNodeData[], path: string): PlaygroundComponentTreeTreeNodeData | null {
  for (const node of nodes) {
    if (node.path === path) return node;
    if (node.children) {
      const found = playgroundComponentTreeFindNodeByPath(node.children, path);
      if (found) return found;
    }
  }
  return null;
}
