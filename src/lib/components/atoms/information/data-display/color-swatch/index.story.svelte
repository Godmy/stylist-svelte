<script lang="ts">
  import ColorSwatch from './index.svelte';

  let color = '#0ea5e9';
  let size = 32;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ColorSwatch</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Color</span>
      <input type="text" bind:value={color} class="border rounded p-1 w-28" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <input type="number" bind:value={size} class="border rounded p-1 w-20" />
    </label>
  </div>

  <div class="p-4 border rounded inline-flex items-center">
    <ColorSwatch {color} {size} />
  </div>
</div>
