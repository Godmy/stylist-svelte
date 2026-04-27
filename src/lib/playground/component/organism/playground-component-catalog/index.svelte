<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundComponentCatalogState } from '$stylist/playground/function/state/playground-component-catalog';
  import type { PlaygroundComponentCatalogViewMode } from '$stylist/playground/type/struct/playground-component-catalog-view-mode';
  import type { PlaygroundComponentCatalogSortBy } from '$stylist/playground/type/struct/playground-component-catalog-sort-by';
  import type { PlaygroundComponentCatalogComponentCatalogStory } from '$stylist/playground/type/struct/playground-component-catalog-component-catalog-story';
  import type { PlaygroundComponentCatalogComponentCatalogStats } from '$stylist/playground/type/struct/playground-component-catalog-component-catalog-stats';
  import type { PlaygroundComponentCatalogProps } from '$stylist/playground/type/struct/playground-component-catalog-props';
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

  let props: PlaygroundComponentCatalogProps = $props();
  const state = createPlaygroundComponentCatalogState(props);
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div class="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-6 space-y-4">
      <div class="flex items-center gap-4">
        <div class="flex-1 relative">
          <BaseIcon name={Search} class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
          <input
            type="text"
            value={state.searchQuery}
            oninput={(event) => state.onSearchQueryChange((event.currentTarget as HTMLInputElement).value)}
            placeholder="Search components... (try 'button', 'input', 'card')"
            class="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 transition-all shadow-sm"
          />
          {#if state.searchQuery}
            <button
              onclick={() => state.onSearchQueryChange('')}
              class="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all"
            >
              <BaseIcon name={X} class="w-4 h-4" />
            </button>
          {/if}
        </div>

        <div class="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-2 border-orange-200 dark:border-gray-700 p-1.5 shadow-sm">
          <button
            onclick={() => state.onViewModeChange('grid')}
            class="px-3 py-2 rounded-md transition-all duration-[var(--duration-200)] {state.viewMode === 'grid' ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' : 'text-gray-400 dark:text-gray-500 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-white/50 dark:hover:bg-gray-700/50'}"
            title="Grid view"
          >
            <BaseIcon name={Grid} class="w-5 h-5" />
          </button>
          <button
            onclick={() => state.onViewModeChange('list')}
            class="px-3 py-2 rounded-md transition-all duration-[var(--duration-200)] {state.viewMode === 'list' ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' : 'text-gray-400 dark:text-gray-500 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-white/50 dark:hover:bg-gray-700/50'}"
            title="List view"
          >
            <BaseIcon name={List} class="w-5 h-5" />
          </button>
        </div>

        <div class="relative">
          <select
            value={state.sortBy}
            onchange={(event) => state.onSortByChange((event.currentTarget as HTMLSelectElement).value as PlaygroundComponentCatalogSortBy)}
            class="appearance-none pl-4 pr-12 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-colors cursor-pointer hover:border-orange-400 dark:hover:border-orange-500 min-w-[180px] shadow-sm"
            style="color-scheme: light dark;"
          >
            <option value="name" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sort by Name</option>
            <option value="category" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sort by Category</option>
            <option value="recent" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Recently Updated</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <BaseIcon name={SortAsc} class="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <button
          onclick={state.onToggleFilters}
          class="px-4 py-3 rounded-lg border-2 transition-all shadow-sm {state.showFilters ? 'border-orange-500 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:border-orange-400 dark:hover:border-orange-500'}"
          title={state.showFilters ? 'Hide filters' : 'Show filters'}
        >
          <BaseIcon name={Filter} class="w-5 h-5" />
        </button>
      </div>

      {#if state.showFilters}
        <div class="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-orange-200 dark:border-gray-700 space-y-6 shadow-md">
          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Categories</h3>
            <div class="flex flex-wrap gap-3">
              {#each state.categories as category}
                {@const colors = state.getCategoryColor(category)}
                {@const isSelected = state.selectedCategories.has(category)}
                <button
                  onclick={() => state.onToggleCategory(category)}
                  class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all border-2 hover:scale-105 shadow-sm {isSelected ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-orange-500 shadow-lg ring-4 ring-orange-200 dark:ring-orange-900/50' : colors.bg + ' ' + colors.text + ' ' + colors.border + ' hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-md'}"
                >
                  {category}
                  <span class="ml-2 {isSelected ? 'opacity-[var(--opacity-90)]' : 'opacity-[var(--opacity-70)]'} text-xs">
                    ({state.categoryCounts[category] ?? 0})
                  </span>
                </button>
              {/each}
            </div>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
            <div class="flex flex-wrap gap-2">
              {#each state.tags.slice(0, 20) as tag}
                {@const isSelected = state.selectedTags.has(tag)}
                <button
                  onclick={() => state.onToggleTag(tag)}
                  class="px-3 py-2 rounded-lg text-sm font-bold transition-all border-2 flex items-center gap-1.5 shadow-sm {isSelected ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-500 shadow-lg ring-4 ring-purple-200 dark:ring-purple-900/50' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 hover:scale-105 hover:shadow-md'}"
                >
                  <BaseIcon name={Tag} class="w-3.5 h-3.5" />
                  {tag}
                </button>
              {/each}
            </div>
          </div>

          {#if state.hasActiveFilters}
            <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onclick={state.onClearFilters}
                class="px-5 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-sm rounded-xl border-2 border-red-400 hover:shadow-xl hover:shadow-red-500/50 hover:scale-105 transition-all flex items-center gap-2 shadow-md"
              >
                <BaseIcon name={X} class="w-4 h-4" />
                Clear all filters
              </button>
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <div class="mb-6 px-4 py-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-orange-500 text-sm text-gray-700 dark:text-gray-300 shadow-sm">
      Showing <span class="font-bold text-orange-600 dark:text-orange-400">{state.stats.filtered}</span> of <span class="font-bold text-orange-600 dark:text-orange-400">{state.stats.total}</span> components
    </div>

    {#if state.viewMode === 'grid'}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each state.stories as story}
          {@const colors = state.getCategoryColor(story.category)}
          <button
            onclick={() => state.onOpenStory(story.id)}
            class="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all text-left hover:scale-105 hover:-translate-y-2"
          >
            <div class="w-full h-32 mb-6 rounded-xl bg-gradient-to-br {colors.bg} border-2 {colors.border} flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform">
              <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <BaseIcon name={state.getCategoryIcon(story.category)} class="w-16 h-16 {colors.text} opacity-[var(--opacity-30)] group-hover:opacity-[var(--opacity-50)] transition-opacity" />
              <div class="absolute bottom-2 right-2 px-2 py-1 bg-white/90 dark:bg-gray-900/90 rounded text-xs font-semibold {colors.text}">
                Preview
              </div>
            </div>

            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 rounded-lg {colors.bg} border-2 {colors.border} flex items-center justify-center shadow-sm">
                <BaseIcon name={state.getCategoryIcon(story.category)} class="w-5 h-5 {colors.text}" />
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-500 text-white capitalize shadow-sm">
                {story.category}
              </span>
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
              {story.componentName}
            </h3>

            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {state.getComponentDescription(story)}
            </p>

            <div class="flex flex-wrap items-center gap-2 mb-4">
              {#if story.subcategory}
                <div class="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs text-gray-600 dark:text-gray-300">
                  <BaseIcon name={Tag} class="w-3 h-3" />
                  <span class="capitalize">{story.subcategory}</span>
                </div>
              {/if}
              <div class="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-md text-xs text-green-700 dark:text-green-400 font-semibold">
                <BaseIcon name={Sparkles} class="w-3 h-3" />
                AI-Generated
              </div>
            </div>

            <div class="flex items-center justify-between pt-3 border-t-2 border-gray-100 dark:border-gray-700">
              <span class="text-xs text-gray-400">Svelte 5</span>
              <div class="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-sm font-semibold opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)] transition-opacity">
                <span>Open</span>
                <BaseIcon name={ArrowRight} class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        {/each}
      </div>
    {:else}
      <div class="space-y-4">
        {#each state.stories as story}
          {@const colors = state.getCategoryColor(story.category)}
          <button
            onclick={() => state.onOpenStory(story.id)}
            class="group w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all flex items-center gap-6 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div class="w-20 h-20 rounded-xl bg-gradient-to-br {colors.bg} border-2 {colors.border} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
              <BaseIcon name={state.getCategoryIcon(story.category)} class="w-10 h-10 {colors.text}" />
            </div>

            <div class="flex-1 text-left">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
                {story.componentName}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {state.getComponentDescription(story)}
              </p>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs px-3 py-1.5 rounded-full font-bold bg-orange-500 text-white capitalize shadow-sm">
                  {story.category}
                </span>
                {#if story.subcategory}
                  <div class="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs text-gray-600 dark:text-gray-300">
                    <BaseIcon name={Tag} class="w-3 h-3" />
                    <span class="capitalize">{story.subcategory}</span>
                  </div>
                {/if}
                <div class="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-md text-xs text-green-700 dark:text-green-400 font-semibold">
                  <BaseIcon name={Sparkles} class="w-3 h-3" />
                  AI-Generated
                </div>
                <span class="text-xs text-gray-400 ml-auto">Svelte 5</span>
              </div>
            </div>

            <div class="text-gray-300 dark:text-gray-600 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-x-3 transition-all flex-shrink-0">
              <BaseIcon name={ArrowRight} class="w-8 h-8" />
            </div>
          </button>
        {/each}
      </div>
    {/if}

    {#if state.stories.length === 0}
      <div class="text-center py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border-2 border-dashed border-orange-300 dark:border-gray-700 shadow-inner">
        <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:bg-gray-700 mb-8 shadow-lg">
          <BaseIcon name={Search} class="w-12 h-12 text-orange-500 dark:text-orange-400" />
        </div>
        <h3 class="text-3xl font-black text-gray-900 dark:text-white mb-3">No components found</h3>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">Try adjusting your search or filters</p>
        <button
          onclick={state.onClearFilters}
          class="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all shadow-lg"
        >
          Clear all filters
        </button>
      </div>
    {/if}
  </div>
</div>
