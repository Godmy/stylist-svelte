<script lang="ts">
  import AnimatedNumber from './index.svelte';

  let value = 12345;
  let prefix = '';
  let suffix = '';
  let separator = ',';
  let decimals = 0;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AnimatedNumber</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Value</span>
      <input type="number" bind:value={value} class="border rounded p-1 w-24" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Prefix</span>
      <input type="text" bind:value={prefix} class="border rounded p-1 w-16" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Suffix</span>
      <input type="text" bind:value={suffix} class="border rounded p-1 w-16" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Separator</span>
      <input type="text" bind:value={separator} class="border rounded p-1 w-12" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Decimals</span>
      <input type="number" bind:value={decimals} class="border rounded p-1 w-16" />
    </label>
  </div>

  <AnimatedNumber {value} {prefix} {suffix} {separator} {decimals} />
</div>
