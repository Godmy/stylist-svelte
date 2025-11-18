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
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <SplitButton
          variant={props.variant}
          size={props.size}
          disabled={props.disabled}
          items={exampleItems}
          primaryAction={primaryAction}
          primaryLabel={props.primaryLabel}
        />
        <span>Split Button</span>
      </div>
    </div>
  {/snippet}
</Story>