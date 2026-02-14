<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AccessibilityCheckbox from './index.svelte';

  type AccessibilityCheckboxStoryProps = {
    label: string;
    checked: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
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
  {#snippet children(props: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AccessibilityCheckbox Story</h2>
      <AccessibilityCheckbox
        label={props.label}
        checked={props.checked}
        disabled={props.disabled}
      />
    </div>
  {/snippet}
</Story>


