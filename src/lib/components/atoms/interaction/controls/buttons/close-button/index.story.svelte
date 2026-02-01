<script lang="ts">
  import ButtonClose from './index.svelte';

  let size: 'sm' | 'md' | 'lg' = 'md';
  let variant: 'solid' | 'outline' | 'ghost' = 'ghost';
  let disabled = false;
  let loading = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Close Button</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Close Button</h2>
    <div class="flex flex-col items-center gap-4">
      <ButtonClose
        size={size}
        variant={variant}
        disabled={disabled}
        loading={loading}
        aria-label="Close"
      />
      <p class="text-sm text-gray-500">Use for dismissing modals, banners, or inline notices.</p>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="close-size" class="block text-sm mb-1">Size:</label>
        <select id="close-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="close-variant" class="block text-sm mb-1">Variant:</label>
        <select id="close-variant" bind:value={variant} class="border rounded p-1">
          <option value="solid">Solid</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="close-disabled" class="flex items-center gap-1">
          <input id="close-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="close-loading" class="flex items-center gap-1">
          <input id="close-loading" type="checkbox" bind:checked={loading} />
          Loading
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Variants</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="flex flex-col items-center">
        <ButtonClose variant="solid" aria-label="Close" />
        <span class="text-xs mt-1">Solid</span>
      </div>
      <div class="flex flex-col items-center">
        <ButtonClose variant="outline" aria-label="Close" />
        <span class="text-xs mt-1">Outline</span>
      </div>
      <div class="flex flex-col items-center">
        <ButtonClose variant="ghost" aria-label="Close" />
        <span class="text-xs mt-1">Ghost</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <ButtonClose size="sm" aria-label="Close small" />
      <ButtonClose size="md" aria-label="Close medium" />
      <ButtonClose size="lg" aria-label="Close large" />
    </div>
  </div>
</div>
