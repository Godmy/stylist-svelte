import type { PlaygroundComponentTreeStory } from '$stylist/development/type/struct/playground-component-tree-story';

export type PlaygroundComponentTreeTreeNodeData = {
  name: string;
  type: 'category' | 'folder' | 'component';
  children?: PlaygroundComponentTreeTreeNodeData[];
  story?: PlaygroundComponentTreeStory;
  autoStory?: PlaygroundComponentTreeStory;
  path: string;
  count?: number;
}
