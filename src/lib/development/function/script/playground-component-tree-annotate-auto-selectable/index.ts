import type { PlaygroundComponentTreeTreeNodeData } from '$stylist/development/type/struct/playground-component-tree-tree-node-data';

export function playgroundComponentTreeAnnotateAutoSelectable(node: PlaygroundComponentTreeTreeNodeData): void {
  if (!node.children || node.children.length === 0) return;

  node.children.forEach(playgroundComponentTreeAnnotateAutoSelectable);

  if (node.type === 'folder' && node.children.length === 1 && node.children[0].type === 'component') {
    node.autoStory = node.children[0].story;
    node.children = [];
  }
}
