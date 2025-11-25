<script lang="ts">
  import CloseButton from './CloseButton.svelte';

  let size: 'sm' | 'md' | 'lg' = 'md';
  let variant: 'solid' | 'outline' | 'ghost' = 'ghost';
  let disabled: boolean = false;
  let loading: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CloseButton Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Close Button</h2>
    <div class="flex gap-4 items-center">
      <CloseButton
        size={size}
        variant={variant}
        disabled={disabled}
        loading={loading}
        aria-label="Close"
      />
      <span>Close Button</span>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="closebutton-size" class="block text-sm mb-1">Size:</label>
        <select id="closebutton-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="closebutton-variant" class="block text-sm mb-1">Variant:</label>
        <select id="closebutton-variant" bind:value={variant} class="border rounded p-1">
          <option value="solid">Solid</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="closebutton-disabled" class="flex items-center gap-1">
          <input id="closebutton-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="closebutton-loading" class="flex items-center gap-1">
          <input id="closebutton-loading" type="checkbox" bind:checked={loading} />
          Loading
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <CloseButton size="sm" aria-label="Close" />
        <span class="text-xs mt-1">Small</span>
      </div>
      <div class="flex flex-col items-center">
        <CloseButton size="md" aria-label="Close" />
        <span class="text-xs mt-1">Medium</span>
      </div>
      <div class="flex flex-col items-center">
        <CloseButton size="lg" aria-label="Close" />
        <span class="text-xs mt-1">Large</span>
      </div>
    </div>
  </div>

  <div class="mt-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Variants</h2>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <CloseButton variant="solid" aria-label="Close" />
        <span class="text-xs mt-1">Solid</span>
      </div>
      <div class="flex flex-col items-center">
        <CloseButton variant="outline" aria-label="Close" />
        <span class="text-xs mt-1">Outline</span>
      </div>
      <div class="flex flex-col items-center">
        <CloseButton variant="ghost" aria-label="Close" />
        <span class="text-xs mt-1">Ghost</span>
      </div>
    </div>
  </div>
</div>