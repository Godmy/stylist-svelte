<script lang="ts">
  import FilterPanel from './index.svelte';

  let showObjects: boolean = true;
  let showInterfaces: boolean = true;
  let showUnions: boolean = true;
  let showEnums: boolean = true;
  let showScalars: boolean = true;
  let showInputs: boolean = true;
  let layout: 'force-directed' | 'hierarchical' | 'circular' | 'grid' = 'force-directed';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FilterPanel Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FilterPanel</h2>
    <div class="max-w-xs">
      <FilterPanel
        {showObjects}
        {showInterfaces}
        {showUnions}
        {showEnums}
        {showScalars}
        {showInputs}
        {layout}
        on:filterChange={(e: CustomEvent<{showObjects: boolean; showInterfaces: boolean; showUnions: boolean; showEnums: boolean; showScalars: boolean; showInputs: boolean; layout: string}>) => {
          console.log('Filters changed:', e.detail);
        }}
        on:reset={() => {
          console.log('Filters reset');
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-objects" class="flex items-center gap-1">
          <input id="show-objects" type="checkbox" bind:checked={showObjects} />
          Show Objects
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-interfaces" class="flex items-center gap-1">
          <input id="show-interfaces" type="checkbox" bind:checked={showInterfaces} />
          Show Interfaces
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-unions" class="flex items-center gap-1">
          <input id="show-unions" type="checkbox" bind:checked={showUnions} />
          Show Unions
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-enums" class="flex items-center gap-1">
          <input id="show-enums" type="checkbox" bind:checked={showEnums} />
          Show Enums
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-scalars" class="flex items-center gap-1">
          <input id="show-scalars" type="checkbox" bind:checked={showScalars} />
          Show Scalars
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-inputs" class="flex items-center gap-1">
          <input id="show-inputs" type="checkbox" bind:checked={showInputs} />
          Show Inputs
        </label>
      </div>

      <div>
        <label for="filter-layout" class="block text-sm mb-1">Layout:</label>
        <select
          id="filter-layout"
          bind:value={layout}
          class="border rounded p-1"
        >
          <option value="force-directed">Force Directed</option>
          <option value="hierarchical">Hierarchical</option>
          <option value="circular">Circular</option>
          <option value="grid">Grid</option>
        </select>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FilterPanel with Different Layout</h2>
    <div class="max-w-xs">
      <FilterPanel
        showObjects={false}
        showInterfaces={true}
        showUnions={false}
        showEnums={true}
        showScalars={false}
        showInputs={true}
        layout="hierarchical"
        on:filterChange={(e: CustomEvent<{showObjects: boolean; showInterfaces: boolean; showUnions: boolean; showEnums: boolean; showScalars: boolean; showInputs: boolean; layout: string}>) => {
          console.log('Filters changed:', e.detail);
        }}
      />
    </div>
  </div>
</div>
