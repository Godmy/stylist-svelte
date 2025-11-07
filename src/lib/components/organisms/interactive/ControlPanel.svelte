<script lang="ts">
  import { SearchBar } from '../../molecules/forms';
  import { FilterPanel } from '../../molecules/tools';
  import { Toolbar } from '../../molecules/tools';

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
        on:search={(e: CustomEvent<{ query: string }>) => onSearch?.(e.detail.query)}
        on:clear={() => onSearch?.('')}
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