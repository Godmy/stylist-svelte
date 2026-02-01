<script lang="ts">
  import NumberFlow from './index.svelte';

  let value = 12345.67;
  let prefix = '';
  let suffix = '';
  let locales = 'en-US';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">NumberFlow</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Value</span>
      <input type="number" bind:value={value} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Prefix</span>
      <input type="text" bind:value={prefix} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Suffix</span>
      <input type="text" bind:value={suffix} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Locale</span>
      <input type="text" bind:value={locales} class="border rounded p-1" />
    </label>
  </div>

  <div class="p-4 border rounded">
    <NumberFlow {value} {prefix} {suffix} {locales} />
  </div>
</div>
