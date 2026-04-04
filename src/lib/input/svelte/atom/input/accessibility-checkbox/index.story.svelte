<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import AccessibilityCheckbox from './index.svelte';

  type AccessibilityCheckboxStoryProps = {
    label: string;
    checked: boolean;
    disabled: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Accept terms and conditions'
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-accessibility-checkbox"
  title="AccessibilityCheckbox"
  component={AccessibilityCheckbox}
  category="Molecules"
  description="An accessible checkbox component with proper labeling."
  tags={['form', 'input', 'accessibility']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-[var(--color-background-secondary)] rounded-lg">
      <h2 class="text-xl font-bold mb-4">AccessibilityCheckbox Story</h2>
      <AccessibilityCheckbox
        label={values.label}
        checked={values.checked}
        disabled={values.disabled}
      />
    </div>
  {/snippet}
</Story>










