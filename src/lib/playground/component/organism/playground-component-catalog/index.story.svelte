<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundComponentCatalog from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'viewMode', type: 'select', defaultValue: 'grid', options: ['grid', 'list'] },
    { name: 'showFilters', type: 'boolean', defaultValue: true }
  ];

  const stories = [
    { id: 'button-story', componentName: 'Button', category: 'Atoms', subcategory: 'controls' },
    { id: 'card-story', componentName: 'Card', category: 'Molecules', subcategory: 'layout' },
    { id: 'dashboard-story', componentName: 'Dashboard', category: 'Organisms', subcategory: 'analytics' }
  ];

  const categories = ['Atoms', 'Molecules', 'Organisms'];
  const categoryCounts = { Atoms: 1, Molecules: 1, Organisms: 1 };
  const tags = ['button', 'layout', 'analytics'];
</script>

<Story
  component={RecipePlaygroundComponentCatalog}
  title="Playground Component Catalog"
  description="Browse and search component library catalog."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundComponentCatalog
      stories={stories}
      categories={categories}
      categoryCounts={categoryCounts}
      tags={tags}
      searchQuery=""
      selectedCategories={new Set()}
      selectedTags={new Set()}
      viewMode={values.viewMode}
      sortBy="name"
      showFilters={values.showFilters}
      stats={{ total: stories.length, filtered: stories.length }}
      onSearchQueryChange={() => {}}
      onToggleCategory={() => {}}
      onToggleTag={() => {}}
      onViewModeChange={() => {}}
      onSortByChange={() => {}}
      onToggleFilters={() => {}}
      onClearFilters={() => {}}
      onOpenStory={() => {}}
    />
  {/snippet}
</Story>

