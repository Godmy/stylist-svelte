import type { PlaygroundComponentCatalogProps } from '$stylist/playground/type/struct/playground-component-catalog-props';
import type { PlaygroundComponentCatalogViewMode } from '$stylist/playground/type/struct/playground-component-catalog-view-mode';
import type { PlaygroundComponentCatalogSortBy } from '$stylist/playground/type/struct/playground-component-catalog-sort-by';
import type { PlaygroundComponentCatalogComponentCatalogStory } from '$stylist/playground/type/struct/playground-component-catalog-component-catalog-story';
const Search = 'search';
const Filter = 'filter';
const Grid = 'grid';
const List = 'list';
const SortAsc = 'sort-asc';
const X = 'x';
const Tag = 'tag';
const Code = 'code';
const Layers = 'layers';
const Package = 'package';
const ArrowRight = 'arrow-right';
const Sparkles = 'sparkles';

export function createPlaygroundComponentCatalogState(props: PlaygroundComponentCatalogProps) {
  const stories = $derived(props.stories);
  const categories = $derived(props.categories);
  const categoryCounts = $derived(props.categoryCounts);
  const tags = $derived(props.tags);
  const searchQuery = $derived(props.searchQuery);
  const selectedCategories = $derived(props.selectedCategories);
  const selectedTags = $derived(props.selectedTags);
  const viewMode = $derived(props.viewMode);
  const sortBy = $derived(props.sortBy);
  const showFilters = $derived(props.showFilters);
  const stats = $derived(props.stats);
  const onSearchQueryChange = $derived(props.onSearchQueryChange);
  const onToggleCategory = $derived(props.onToggleCategory);
  const onToggleTag = $derived(props.onToggleTag);
  const onViewModeChange = $derived(props.onViewModeChange);
  const onSortByChange = $derived(props.onSortByChange);
  const onToggleFilters = $derived(props.onToggleFilters);
  const onClearFilters = $derived(props.onClearFilters);
  const onOpenStory = $derived(props.onOpenStory);

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    atoms: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
    molecules: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
    organisms: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-700 dark:text-green-300', border: 'border-green-200 dark:border-green-800' }
  };

  function getCategoryColor(category: string) {
    return categoryColors[category.toLowerCase()] || categoryColors.atoms;
  }

  function getCategoryIcon(category: string) {
    const cat = category.toLowerCase();
    if (cat === 'atoms') return Code;
    if (cat === 'molecules') return Layers;
    if (cat === 'organisms') return Package;
    return Sparkles;
  }

  function getComponentDescription(story: PlaygroundComponentCatalogComponentCatalogStory) {
    const category = story.category.toLowerCase();
    const subcategory = story.subcategory || '';

    if (subcategory.includes('button')) return 'Interactive button component with variants';
    if (subcategory.includes('input')) return 'Form input with validation';
    if (subcategory.includes('card')) return 'Flexible card container';
    if (subcategory.includes('modal')) return 'Modal dialog overlay';
    if (subcategory.includes('toggle')) return 'SlotToggle switch control';
    if (subcategory.includes('select')) return 'Dropdown selection';
    if (subcategory.includes('slider')) return 'Range slider control';

    if (category === 'atoms') return 'Basic UI building block';
    if (category === 'molecules') return 'Composite UI component';
    if (category === 'organisms') return 'Complex UI section';

    return 'Svelte 5 component';
  }

  const hasActiveFilters = $derived(selectedCategories.size > 0 || selectedTags.size > 0 || !!searchQuery);

  return {
    get stories() { return stories; },
    get categories() { return categories; },
    get categoryCounts() { return categoryCounts; },
    get tags() { return tags; },
    get searchQuery() { return searchQuery; },
    get selectedCategories() { return selectedCategories; },
    get selectedTags() { return selectedTags; },
    get viewMode() { return viewMode; },
    get sortBy() { return sortBy; },
    get showFilters() { return showFilters; },
    get stats() { return stats; },
    get hasActiveFilters() { return hasActiveFilters; },
    getCategoryColor,
    getCategoryIcon,
    getComponentDescription,
    get onSearchQueryChange() { return onSearchQueryChange; },
    get onToggleCategory() { return onToggleCategory; },
    get onToggleTag() { return onToggleTag; },
    get onViewModeChange() { return onViewModeChange; },
    get onSortByChange() { return onSortByChange; },
    get onToggleFilters() { return onToggleFilters; },
    get onClearFilters() { return onClearFilters; },
    get onOpenStory() { return onOpenStory; }
  };
}

export default createPlaygroundComponentCatalogState;
