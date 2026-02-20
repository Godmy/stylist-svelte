// Props for SortableGrid component
export interface SortableGridItem {
  id: string;
  title: string;
  content?: string;
  render?: any; // Snippet type
  data?: any;
}

export interface SortableGridProps {
  items: SortableGridItem[];
  class?: string;
  itemClass?: string;
  gridClass?: string;
  onItemsChange?: (items: SortableGridItem[]) => void;
  onItemDragStart?: (item: SortableGridItem) => void;
  onItemDragEnd?: (item: SortableGridItem) => void;
  disabled?: boolean;
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
  variant?: 'card' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}