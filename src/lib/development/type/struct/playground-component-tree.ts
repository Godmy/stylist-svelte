export interface Story {
  id: string;
  componentName: string;
  category: string;
  subcategory?: string;
  path: string;
}

export interface GroupedStories {
  [category: string]: {
    [subcategory: string]: Story[];
  };
}

export interface TreeNodeData {
  name: string;
  type: 'category' | 'folder' | 'component';
  children?: TreeNodeData[];
  story?: Story;
  autoStory?: Story;
  path: string;
  count?: number;
}

export interface Props {
  onComponentSelect?: (storyId: string) => void;
  groupedStories?: GroupedStories;
  selectedStoryId?: string | null;
}
