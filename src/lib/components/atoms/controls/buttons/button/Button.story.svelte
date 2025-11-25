<script lang="ts">
  import Button from './Button.svelte';

  let label: string = 'Click me';
  let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' | 'outline' = 'primary';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let disabled: boolean = false;
  let loading: boolean = false;
  let block: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Button Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Button</h2>
    <div class="flex flex-col gap-4">
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        block={block}
      >
        {label}
      </Button>
      {#if block}
        <p class="text-sm text-gray-500">
          Block mode stretches the button to full width.
        </p>
      {/if}
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="button-label" class="block text-sm mb-1">Label:</label>
        <input
          id="button-label"
          type="text"
          bind:value={label}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="button-variant" class="block text-sm mb-1">Variant:</label>
        <select id="button-variant" bind:value={variant} class="border rounded p-1">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
      </div>

      <div>
        <label for="button-size" class="block text-sm mb-1">Size:</label>
        <select id="button-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="button-disabled" class="flex items-center gap-1">
          <input id="button-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="button-loading" class="flex items-center gap-1">
          <input id="button-loading" type="checkbox" bind:checked={loading} />
          Loading
        </label>
      </div>

      <div class="flex items-end">
        <label for="button-block" class="flex items-center gap-1">
          <input id="button-block" type="checkbox" bind:checked={block} />
          Block
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Variants</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center">
        <Button variant="primary">Primary</Button>
        <span class="text-xs mt-1">Primary</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="secondary">Secondary</Button>
        <span class="text-xs mt-1">Secondary</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="success">Success</Button>
        <span class="text-xs mt-1">Success</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="warning">Warning</Button>
        <span class="text-xs mt-1">Warning</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="danger">Danger</Button>
        <span class="text-xs mt-1">Danger</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="outline">Outline</Button>
        <span class="text-xs mt-1">Outline</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="ghost">Ghost</Button>
        <span class="text-xs mt-1">Ghost</span>
      </div>
      <div class="flex flex-col items-center">
        <Button variant="link">Link</Button>
        <span class="text-xs mt-1">Link</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </div>
</div>
