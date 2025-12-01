<script context="module">
  export const title = "SplitButton";
  export const category = "Atoms/Controls/Buttons";
</script>

<script lang="ts">
  import SplitButton from "./SplitButton.svelte";
  import type { SplitButtonVariant, SplitButtonSize } from "./types";

  let variant: SplitButtonVariant = 'primary';
  let size: SplitButtonSize = 'md';
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

<div class="story-container">
  <h2>{title}</h2>
  <p>Button with primary action and dropdown menu for additional actions.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <div class="mb-6 p-4 border rounded">
      <h3 class="text-md font-semibold mb-2">Interactive Split Button</h3>
      <div class="flex gap-4 items-center">
        <SplitButton
          variant={variant}
          size={size}
          disabled={disabled}
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel={primaryLabel}
        />
        <span>Split Button with dropdown menu</span>
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <div>
          <label for="variant-select" class="block text-sm mb-1">Variant:</label>
          <select id="variant-select" bind:value={variant} class="border rounded p-1">
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
          <label for="size-select" class="block text-sm mb-1">Size:</label>
          <select id="size-select" bind:value={size} class="border rounded p-1">
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>

        <div>
          <label for="primary-label-input" class="block text-sm mb-1">Primary Label:</label>
          <input id="primary-label-input" bind:value={primaryLabel} class="border rounded p-1" />
        </div>

        <div class="flex items-end">
          <label class="flex items-center gap-1">
            <input type="checkbox" bind:checked={disabled} />
            Disabled
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- All Variants -->
  <div class="variants-section">
    <h3>All Variants</h3>
    <div class="variant-grid">
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

  <!-- All Sizes -->
  <div class="sizes-section">
    <h3>All Sizes</h3>
    <div class="size-grid">
      <div class="flex flex-col items-center">
        <SplitButton
          size="sm"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Small"
        />
        <span class="text-xs mt-1">Small</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          size="md"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Medium"
        />
        <span class="text-xs mt-1">Medium</span>
      </div>
      <div class="flex flex-col items-center">
        <SplitButton
          size="lg"
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Large"
        />
        <span class="text-xs mt-1">Large</span>
      </div>
    </div>
  </div>

  <!-- Disabled State -->
  <div class="states-section">
    <h3>Disabled State</h3>
    <SplitButton
      disabled
      items={exampleItems}
      primaryAction={primaryAction}
      primaryLabel="Disabled Button"
    />
  </div>

  <!-- Usage Example -->
  <div class="usage-example">
    <h3>Usage Example</h3>
    <p class="text-sm text-gray-600 mb-4">
      Click the primary button for the main action, or click the dropdown arrow to see additional options.
      Note that "Option 3" is disabled in the dropdown menu.
    </p>
    <SplitButton
      variant="primary"
      size="md"
      items={exampleItems}
      primaryAction={primaryAction}
      primaryLabel="Save Document"
    />
  </div>

  <!-- Tags -->
  <div class="tags">
    <span class="tag">button</span>
    <span class="tag">dropdown</span>
    <span class="tag">action</span>
    <span class="tag">ui</span>
  </div>
</div>

<style>
  .story-container {
    padding: 20px;
    max-width: 100%;
    font-family: sans-serif;
  }

  h2, h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .interactive-demo {
    margin: 1.5rem 0;
  }

  .variants-section,
  .sizes-section,
  .states-section,
  .usage-example {
    margin-top: 2rem;
  }

  .variant-grid,
  .size-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
</style>