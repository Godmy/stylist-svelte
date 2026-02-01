<script context="module">
  export const title = "SplitButton";
  export const category = "Atoms/Controls/Buttons";
</script>

<script lang="ts">
  import SplitButton from "./index.svelte";

  let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' = 'primary';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let disabled = false;
  let primaryLabel = 'Action';

  // Example items for the dropdown
  const exampleItems = [
    {
      label: 'Option 1',
      onClick: () => alert('Option 1 clicked!')
    },
    {
      label: 'Option 2',
      onClick: () => alert('Option 2 clicked!')
    },
    {
      label: 'Option 3',
      onClick: () => alert('Option 3 clicked!'),
      disabled: true
    }
  ];

  const primaryAction = () => alert('Primary action clicked!');
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Split Button</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Split Button</h2>
    <div class="flex flex-col gap-4">
      <SplitButton
        variant={variant}
        size={size}
        disabled={disabled}
        items={exampleItems}
        primaryAction={primaryAction}
        primaryLabel={primaryLabel}
      />
      <p class="text-sm text-gray-500">Primary action with a dropdown for related secondary actions.</p>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="split-variant" class="block text-sm mb-1">Variant:</label>
        <select id="split-variant" bind:value={variant} class="border rounded p-1">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
      </div>

      <div>
        <label for="split-size" class="block text-sm mb-1">Size:</label>
        <select id="split-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="split-primary-label" class="block text-sm mb-1">Primary label:</label>
        <input
          id="split-primary-label"
          bind:value={primaryLabel}
          class="border rounded p-1 w-full md:w-48"
        />
      </div>

      <div class="flex items-end">
        <label for="split-disabled" class="flex items-center gap-1">
          <input id="split-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Variants</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center">
        <SplitButton
          variant="primary"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Primary"
        />
        <span class="text-xs mt-1">Primary</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          variant="secondary"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Secondary"
        />
        <span class="text-xs mt-1">Secondary</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          variant="success"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Success"
        />
        <span class="text-xs mt-1">Success</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          variant="warning"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Warning"
        />
        <span class="text-xs mt-1">Warning</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          variant="danger"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Danger"
        />
        <span class="text-xs mt-1">Danger</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          variant="ghost"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Ghost"
        />
        <span class="text-xs mt-1">Ghost</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          variant="link"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Link"
        />
        <span class="text-xs mt-1">Link</span>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <SplitButton
        size="sm"
        items={exampleItems}
        primaryAction={primaryAction}
        primaryLabel="Small"
      />
      <SplitButton
        size="md"
        items={exampleItems}
        primaryAction={primaryAction}
        primaryLabel="Medium"
      />
      <SplitButton
        size="lg"
        items={exampleItems}
        primaryAction={primaryAction}
        primaryLabel="Large"
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Disabled State</h2>
    <SplitButton
      disabled
      items={exampleItems}
      primaryAction={primaryAction}
      primaryLabel="Disabled Button"
    />
  </div>
</div>
