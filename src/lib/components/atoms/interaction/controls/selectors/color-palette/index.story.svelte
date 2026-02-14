<script lang="ts">
  import ColorPalette from './index.svelte';

  let colors = [
    { name: 'Primary', value: '#3b82f6', category: 'blue' },
    { name: 'Secondary', value: '#64748b', category: 'gray' },
    { name: 'Success', value: '#10b981', category: 'green' },
    { name: 'Warning', value: '#f59e0b', category: 'yellow' },
    { name: 'Danger', value: '#ef4444', category: 'red' },
    { name: 'Info', value: '#0ea5e9', category: 'cyan' },
    { name: 'Purple', value: '#8b5cf6', category: 'purple' },
    { name: 'Pink', value: '#ec4899', category: 'pink' }
  ];

  let title: string = 'Design System Colors';
  let showLabels: boolean = true;
  let showValues: boolean = false;
  let columns: number = 4;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ColorPalette Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ColorPalette</h2>
    <ColorPalette 
      {colors}
      {title}
      {showLabels}
      {showValues}
      {columns}
      onValueChange={(color) => console.log('Selected color:', color)}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="color-title" class="block text-sm mb-1">Title:</label>
        <input
          id="color-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="color-columns" class="block text-sm mb-1">Columns:</label>
        <select
          id="color-columns"
          bind:value={columns}
          class="border rounded p-1"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="show-labels" class="flex items-center gap-1">
          <input id="show-labels" type="checkbox" bind:checked={showLabels} />
          Show Labels
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-values" class="flex items-center gap-1">
          <input id="show-values" type="checkbox" bind:checked={showValues} />
          Show Values
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ColorPalette Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Color Values</h3>
        <ColorPalette 
          colors={[
            { name: 'Red', value: '#ef4444' },
            { name: 'Blue', value: '#3b82f6' },
            { name: 'Green', value: '#10b981' },
            { name: 'Yellow', value: '#f59e0b' }
          ]}
          title="Color Values Display"
          showLabels={true}
          showValues={true}
          columns={4}
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Labels</h3>
        <ColorPalette 
          colors={[
            { name: 'Primary', value: '#3b82f6' },
            { name: 'Secondary', value: '#64748b' },
            { name: 'Success', value: '#10b981' },
            { name: 'Warning', value: '#f59e0b' },
            { name: 'Danger', value: '#ef4444' }
          ]}
          title="Color Swatches Only"
          showLabels={false}
          showValues={false}
          columns={5}
        />
      </div>
    </div>
  </div>
</div>


