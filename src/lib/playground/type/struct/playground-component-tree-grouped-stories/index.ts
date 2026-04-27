import type { PlaygroundComponentTreeStory } from '$stylist/playground/type/struct/playground-component-tree-story';

export type PlaygroundComponentTreeGroupedStories = {
  [category: string]: {
    [subcategory: string]: PlaygroundComponentTreeStory[];
  };
}
