<script lang="ts">
  import IconChevron from './index.svelte';

  let isOpen = false;
  let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">IconChevron</h1>

  <div class="flex flex-wrap gap-4 mb-6 items-center">
    <label class="flex items-center gap-2">
      <span class="text-sm">Open</span>
      <input type="checkbox" bind:checked={isOpen} />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <select bind:value={size} class="border rounded p-1">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>
  </div>

  <div class="p-4 border rounded inline-flex items-center">
    <IconChevron {isOpen} {size} />
  </div>
</div>
