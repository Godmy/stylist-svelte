import type { PlaygroundComponentCatalogViewMode } from '$stylist/development/type/struct/playground-component-catalog-view-mode';
import type { PlaygroundComponentCatalogSortBy } from '$stylist/development/type/struct/playground-component-catalog-sort-by';
import type { PlaygroundComponentCatalogComponentCatalogStory } from '$stylist/development/type/struct/playground-component-catalog-component-catalog-story';
import type { PlaygroundComponentCatalogComponentCatalogStats } from '$stylist/development/type/struct/playground-component-catalog-component-catalog-stats';

export type PlaygroundComponentCatalogProps = {
  stories: PlaygroundComponentCatalogComponentCatalogStory[];
  categories: string[];
  categoryCounts: Record<string, number>;
  tags: string[];
  searchQuery: string;
  selectedCategories: Set<string>;
  selectedTags: Set<string>;
  viewMode: PlaygroundComponentCatalogViewMode;
  sortBy: PlaygroundComponentCatalogSortBy;
  showFilters: boolean;
  stats: PlaygroundComponentCatalogComponentCatalogStats;
  onSearchQueryChange: (value: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleTag: (tag: string) => void;
  onViewModeChange: (mode: PlaygroundComponentCatalogViewMode) => void;
  onSortByChange: (sortBy: PlaygroundComponentCatalogSortBy) => void;
  onToggleFilters: () => void;
  onClearFilters: () => void;
  onOpenStory: (storyId: string) => void;
}
