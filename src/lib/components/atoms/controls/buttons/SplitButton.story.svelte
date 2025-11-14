<script lang="ts">
  import SplitButton from './SplitButton.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type ButtonSize = 'sm' | 'md' | 'lg';

  let variant = $state<ButtonVariant>('primary');
  let size = $state<ButtonSize>('md');
  let disabled = $state(false);
  let primaryLabel = $state('Save');

  const dropdownItems = [
    { label: 'Save as draft', onClick: () => console.log('Save as draft') },
    { label: 'Duplicate', onClick: () => console.log('Duplicate item') },
    { label: 'Archive', onClick: () => console.log('Archive item') }
  ];

  function handlePrimaryAction() {
    console.log('Primary split-button action');
  }

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'primary' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'primaryLabel', type: 'text', defaultValue: 'Save' }
  ];
</script>

<Story
  id="atoms-split-button"
  title="SplitButton"
  component={SplitButton}
  category="Atoms"
  description="Primary action plus dropdown of related secondary actions."
  tags={['button', 'menu', 'actions']}
  controls={controls}
>
  <div class="flex flex-col gap-6 p-6">
    <SplitButton
      variant={variant}
      size={size}
      disabled={disabled}
      primaryAction={handlePrimaryAction}
      primaryLabel={primaryLabel}
      items={dropdownItems}
    />

    <div class="grid gap-3 sm:grid-cols-2">
      <label class="flex flex-col gap-1 text-sm">
        Variant
        <select bind:value={variant} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
      </label>
      <label class="flex flex-col gap-1 text-sm">
        Size
        <select bind:value={size} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={disabled} />
        Disabled
      </label>
      <label class="flex flex-col gap-1 text-sm sm:col-span-2">
        Primary label
        <input
          type="text"
          bind:value={primaryLabel}
          class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
        />
      </label>
    </div>
  </div>
</Story>
