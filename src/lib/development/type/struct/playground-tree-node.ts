export type Story = {
  id: string;
  componentName: string;
  category: string;
  subcategory?: string;
  path: string;
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
  node: TreeNodeData;
  level: number;
  expandedNodes: Set<string>;
  categoryConfig: Record<string, {
    icon: any;
    color: string;
    bg: string;
    border: string;
  }>;
  onToggle: (path: string) => void;
  onComponentClick: (story: Story) => void;
  selectedStoryId?: string | null;
  focusedPath?: string | null;
}
