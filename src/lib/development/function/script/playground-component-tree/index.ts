import type { PlaygroundComponentTreeTreeNodeData } from '$stylist/development/type/struct/playground-component-tree-tree-node-data';
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

export function playgroundComponentTreeAnnotateAutoSelectable(node: PlaygroundComponentTreeTreeNodeData): void {
  if (!node.children || node.children.length === 0) return;

  node.children.forEach(playgroundComponentTreeAnnotateAutoSelectable);

  if (node.type === 'folder' && node.children.length === 1 && node.children[0].type === 'component') {
    node.autoStory = node.children[0].story;
    node.children = [];
  }
}

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
