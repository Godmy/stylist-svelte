export type Story = {
  id: string;
  componentName: string;
  category: string;
  subcategory?: string;
  path: string;
}

export type GroupedStories = {
  [category: string]: {
    [subcategory: string]: Story[];
  };
}

export type TreeNodeData = {
  name: string;
  type: 'category' | 'folder' | 'component';
  children?: TreeNodeData[];
  story?: Story;
  autoStory?: Story;
  path: string;
  count?: number;
}

export type Props = {
  onComponentSelect?: (storyId: string) => void;
  groupedStories?: GroupedStories;
  selectedStoryId?: string | null;
}
