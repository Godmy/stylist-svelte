<script lang="ts">
  import GraphNode from './index.svelte';

  let id = 'node-1';
  let x = 40;
  let y = 40;
  let label = 'Node A';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let color = '#3b82f6';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">GraphNode</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Label</span>
      <input type="text" bind:value={label} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <select bind:value={size} class="border rounded p-1">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Color</span>
      <input type="text" bind:value={color} class="border rounded p-1" />
    </label>
  </div>

  <div class="relative h-40 border rounded">
    <GraphNode {id} {x} {y} {label} {size} {color} />
  </div>
</div>
