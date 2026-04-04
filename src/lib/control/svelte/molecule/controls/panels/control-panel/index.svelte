<script lang="ts">
  import SearchBar from '$stylist/interaction/svelte/molecule/search/search-bar/index.svelte';

  import FilterPanel from '$stylist/form/svelte/molecule/forms/filter-panel/index.svelte';
  import Toolbar from '$stylist/control/svelte/molecule/controls/toolbars/toolbar/index.svelte';

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
  function handleSearch(query: string) {
    onSearch?.(query);
  }

  function handleClear() {
    onSearch?.('');
  }
</script>

<style>
  .control-panel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-4);
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border-primary);
  }

  .panel-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
</style>

<div class="control-panel">
  {#if showSearch}
    <div class="panel-section">
      <SearchBar
        placeholder="Search for types or fields..."
        onSearch={handleSearch}
        onClear={handleClear}
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






