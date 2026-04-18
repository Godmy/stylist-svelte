import type { PlaygroundComponentTreeStory } from '$stylist/development/type/struct/playground-component-tree-story';

export type PlaygroundComponentTreeGroupedStories = {
  [category: string]: {
    [subcategory: string]: PlaygroundComponentTreeStory[];
  };
}
