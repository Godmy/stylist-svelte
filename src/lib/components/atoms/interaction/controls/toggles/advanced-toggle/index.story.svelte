<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AdvancedToggle from './AdvancedToggle.svelte';

  type AdvancedToggleStoryProps = {
    label: string;
    checked: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Enable notifications'
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
  id="molecules-advanced-toggle"
  title="AdvancedToggle"
  component={AdvancedToggle}
  category="Molecules"
  description="An advanced toggle switch component."
  tags={['form', 'input', 'switch']}
  controls={controls}
>
  {#snippet children(props: AdvancedToggleStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AdvancedToggle Story</h2>
      <AdvancedToggle
        label={props.label}
        checked={props.checked}
        disabled={props.disabled}
      />
    </div>
  {/snippet}
</Story>
