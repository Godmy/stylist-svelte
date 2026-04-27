import type { PlaygroundComponentTreeGroupedStories } from '$stylist/playground/type/struct/playground-component-tree-grouped-stories';

export type PlaygroundComponentTreeProps = {
  onComponentSelect?: (storyId: string) => void;
  groupedStories?: PlaygroundComponentTreeGroupedStories;
  selectedStoryId?: string | null;
}
