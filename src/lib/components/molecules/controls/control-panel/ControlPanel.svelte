<script lang="ts">
  import SearchBar from '$lib/components/molecules/controls/search/search-bar/SearchBar.svelte';
  import type { ISearchBarEvents } from '$lib/components/molecules/controls/search/search-bar/types.ts';
  import FilterPanel from '$lib/components/molecules/forms/filter-panel/FilterPanel.svelte';
  import Toolbar from '$lib/components/molecules/controls/toolbar/Toolbar.svelte';

  // Props
  let {
    showToolbar = true,
    showFilter = true,
    showSearch = true,
    onSearch,
    onFilterChange
  }: {
    showToolbar?: boolean;
    showFilter?: boolean;
    showSearch?: boolean;
    onSearch?: (query: string) => void;
    onFilterChange?: (filters: any) => void;
  } = $props();

  // Local state
  let isLegendVisible = $state(true);
  let isSearchVisible = $state(true);

  // Define event handlers separately to ensure proper typing
  function handleSearch(e: CustomEvent<ISearchBarEvents['search']>) {
    onSearch?.(e.detail.query);
  }

  function handleClear() {
    onSearch?.('');
  }
</script>

<style>
  .control-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8fafc;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
  }

  .panel-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>

<div class="control-panel">
  {#if showSearch}
    <div class="panel-section">
      <SearchBar
        placeholder="Search for types or fields..."
        onsearch={handleSearch}
        onclear={handleClear}
      />
    </div>
  {/if}

  {#if showFilter}
    <div class="panel-section">
      <FilterPanel
        on:filterchange={(e: CustomEvent<{ filters: string[] }>) => onFilterChange?.(e.detail)}
      />
    </div>
  {/if}

  {#if showToolbar}
    <div class="panel-section">
      <Toolbar
        on:togglelegend={() => isLegendVisible = !isLegendVisible}
        on:togglesearch={() => isSearchVisible = !isSearchVisible}
      />
    </div>
  {/if}
</div>