import type { PlaygroundTreeNodeStory } from '$stylist/development/type/struct/playground-tree-node-story';

export type PlaygroundTreeNodeTreeNodeData = {
  name: string;
  type: 'category' | 'folder' | 'component';
  children?: PlaygroundTreeNodeTreeNodeData[];
  story?: PlaygroundTreeNodeStory;
  autoStory?: PlaygroundTreeNodeStory;
  path: string;
  count?: number;
}
