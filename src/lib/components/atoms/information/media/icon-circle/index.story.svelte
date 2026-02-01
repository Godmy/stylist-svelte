<script lang="ts">
  import IconCircle from './index.svelte';

  let icon = '★';
  let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
  let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  let gradient = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">IconCircle</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Icon</span>
      <input type="text" bind:value={icon} class="border rounded p-1" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Variant</span>
      <select bind:value={variant} class="border rounded p-1">
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
        <option value="info">Info</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <select bind:value={size} class="border rounded p-1">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
        <option value="xl">XL</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Gradient</span>
      <input type="checkbox" bind:checked={gradient} />
    </label>
  </div>

  <div class="p-4 border rounded inline-flex items-center">
    <IconCircle {icon} {variant} {size} {gradient} />
  </div>
</div>
