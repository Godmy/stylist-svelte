<script lang="ts">
  import Favicon from './index.svelte';

  let url = 'https://example.com';
  let size = 24;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Favicon</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">URL</span>
      <input type="text" bind:value={url} class="border rounded p-1 w-64" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <input type="number" bind:value={size} class="border rounded p-1 w-20" />
    </label>
  </div>

  <div class="p-4 border rounded inline-flex items-center">
    <Favicon {url} {size} />
  </div>
</div>
