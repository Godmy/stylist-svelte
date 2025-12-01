<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AccessibilityCheckbox from './AccessibilityCheckbox.svelte';

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
  {#snippet children(props: AccessibilityCheckboxStoryProps)}
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