<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import SplitButton from './SplitButton.svelte';
  import type { ISplitButtonItem } from './types';

  const variantOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'] as const;
  const sizeOptions = ['sm', 'md', 'lg'] as const;

  type SplitButtonStoryProps = {
    variant: (typeof variantOptions)[number];
    size: (typeof sizeOptions)[number];
    disabled: boolean;
    primaryLabel: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: [...variantOptions]
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'primaryLabel',
      type: 'text',
      defaultValue: 'Action'
    }
  ];

  // Example items for the dropdown
  const exampleItems: ISplitButtonItem[] = [
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

<Story
  id="atoms-split-button"
  title="SplitButton"
  component={SplitButton}
  category="Atoms"
  description="Button with primary action and dropdown menu for additional actions. Note: This component has high complexity and may be better suited for the molecules category."
  tags={['action', 'form', 'dropdown', 'menu']}
  controls={controls}
>
  {#snippet children(props: SplitButtonStoryProps)}
    <div class="flex flex-col gap-6">
      <!-- Interactive Split Button -->
      <div class="p-4 border rounded">
        <h3 class="text-md font-semibold mb-2">Interactive Split Button</h3>
        <div class="flex gap-4 items-center">
          <SplitButton
            variant={props.variant}
            size={props.size}
            disabled={props.disabled}
            items={exampleItems}
            primaryAction={primaryAction}
            primaryLabel={props.primaryLabel}
          />
          <span>Split Button with dropdown menu</span>
        </div>
      </div>

      <!-- All Variants -->
      <div class="p-4 border rounded">
        <h3 class="text-md font-semibold mb-2">All Variants</h3>
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

      <!-- All Sizes -->
      <div class="p-4 border rounded">
        <h3 class="text-md font-semibold mb-2">All Sizes</h3>
        <div class="flex items-center gap-4">
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
      <div class="p-4 border rounded">
        <h3 class="text-md font-semibold mb-2">Disabled State</h3>
        <SplitButton
          disabled
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel="Disabled Button"
        />
      </div>

      <!-- Usage Example -->
      <div class="p-4 border rounded">
        <h3 class="text-md font-semibold mb-2">Usage Example</h3>
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
    </div>
  {/snippet}
</Story>