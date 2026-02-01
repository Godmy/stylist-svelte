<script lang="ts">
  import NPMBadge from './index.svelte';

  let type: 'version' | 'downloads' | 'license' | 'size' | 'custom' = 'version';
  let value = '1.0.0';
  let label = '';
  let link = '';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">NPMBadge</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Type</span>
      <select bind:value={type} class="border rounded p-1">
        <option value="version">Version</option>
        <option value="downloads">Downloads</option>
        <option value="license">License</option>
        <option value="size">Size</option>
        <option value="custom">Custom</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Value</span>
      <input type="text" bind:value={value} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Label</span>
      <input type="text" bind:value={label} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Link</span>
      <input type="text" bind:value={link} class="border rounded p-1" />
    </label>
  </div>

  <div class="p-4 border rounded">
    <NPMBadge {type} {value} {label} {link} />
  </div>
</div>
