<script lang="ts">
  import IconWrapper from './index.svelte';

  let size: 'sm' | 'md' | 'lg' = 'md';
  let variant: 'solid' | 'outline' | 'ghost' = 'solid';
  let shape: 'circle' | 'square' | 'rounded' = 'circle';
  let color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">IconWrapper</h1>

  <div class="flex flex-wrap gap-4 mb-6 items-center">
    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <select bind:value={size} class="border rounded p-1">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Variant</span>
      <select bind:value={variant} class="border rounded p-1">
        <option value="solid">Solid</option>
        <option value="outline">Outline</option>
        <option value="ghost">Ghost</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Shape</span>
      <select bind:value={shape} class="border rounded p-1">
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="rounded">Rounded</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Color</span>
      <select bind:value={color} class="border rounded p-1">
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </select>
    </label>
  </div>

  <div class="p-4 border rounded inline-flex items-center">
    <IconWrapper {size} {variant} {shape} {color} content={() => '★'} />
  </div>
</div>
