export type ViewMode = 'grid' | 'list';
export type SortBy = 'name' | 'category' | 'recent';

export interface ComponentCatalogStory {
  id: string;
  componentName: string;
  category: string;
  subcategory?: string;
}

export interface ComponentCatalogStats {
  total: number;
  filtered: number;
}

export interface Props {
  stories: ComponentCatalogStory[];
  categories: string[];
  categoryCounts: Record<string, number>;
  tags: string[];
  searchQuery: string;
  selectedCategories: Set<string>;
  selectedTags: Set<string>;
  viewMode: ViewMode;
  sortBy: SortBy;
  showFilters: boolean;
  stats: ComponentCatalogStats;
  onSearchQueryChange: (value: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleTag: (tag: string) => void;
  onViewModeChange: (mode: ViewMode) => void;
  onSortByChange: (sortBy: SortBy) => void;
  onToggleFilters: () => void;
  onClearFilters: () => void;
  onOpenStory: (storyId: string) => void;
}
