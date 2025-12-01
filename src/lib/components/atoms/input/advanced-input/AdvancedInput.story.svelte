<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AdvancedInput from './AdvancedInput.svelte';

  type AdvancedInputStoryProps = {
    label: string;
    value: string;
    placeholder: string;
    type: string;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Username'
    },
    {
      name: 'value',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter your username'
    },
    {
      name: 'type',
      type: 'text',
      defaultValue: 'text'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-advanced-input"
  title="AdvancedInput"
  component={AdvancedInput}
  category="Molecules"
  description="An advanced input component with label and error handling."
  tags={['form', 'input', 'validation']}
  controls={controls}
>
  {#snippet children(props: AdvancedInputStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AdvancedInput Story</h2>
      <AdvancedInput
        label={props.label}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
      />
    </div>
  {/snippet}
</Story>