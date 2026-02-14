<script lang="ts">
  import ControlPanel from './index.svelte';

  let showToolbar: boolean = true;
  let showFilter: boolean = true;
  let showSearch: boolean = true;

  function handleSearch(query: string) {
    console.log('Search query:', query);
  }

  function handleFilterChange(filters: any) {
    console.log('Filter changed:', filters);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ControlPanel Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ControlPanel</h2>
    <div class="flex flex-col gap-4">
      <ControlPanel
        {showToolbar}
        {showFilter}
        {showSearch}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-toolbar" class="flex items-center gap-1">
          <input id="show-toolbar" type="checkbox" bind:checked={showToolbar} />
          Show Toolbar
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-filter" class="flex items-center gap-1">
          <input id="show-filter" type="checkbox" bind:checked={showFilter} />
          Show Filter
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-search" class="flex items-center gap-1">
          <input id="show-search" type="checkbox" bind:checked={showSearch} />
          Show Search
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Full ControlPanel</h2>
      <ControlPanel
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Search Only</h2>
      <ControlPanel
        showToolbar={false}
        showFilter={false}
        showSearch={true}
        onSearch={handleSearch}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Filter Only</h2>
      <ControlPanel
        showToolbar={false}
        showFilter={true}
        showSearch={false}
        onFilterChange={handleFilterChange}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Toolbar Only</h2>
      <ControlPanel 
        showToolbar={true}
        showFilter={false}
        showSearch={false}
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ControlPanel with All Features</h2>
    <ControlPanel
      onSearch={handleSearch}
      onFilterChange={handleFilterChange}
    />
  </div>
</div>