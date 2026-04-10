<script lang="ts">
  import SearchBar from '$stylist/input/svelte/molecule/search/search-bar/index.svelte';
  import FilterPanel from '$stylist/form/svelte/molecule/forms/filter-panel/index.svelte';
  import Toolbar from '$stylist/control/svelte/molecule/toolbars/toolbar/index.svelte';
  import { createControlPanelState } from '$stylist/control/function/state/control-panel';

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

  const state = createControlPanelState({ onSearch });
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
        onSearch={state.handleSearch}
        onClear={state.handleClear}
      />
    </div>
  {/if}

  {#if showFilter}
    <div class="panel-section">
      <FilterPanel
        onFilterChange={(filters) => onFilterChange?.(filters)}
      />
    </div>
  {/if}

  {#if showToolbar}
    <div class="panel-section">
      <Toolbar />
    </div>
  {/if}
</div>






