<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Select from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const exampleOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const controls = [
    {
      name: 'label',
      type: 'text' as ControlType,
      defaultValue: 'Select an option',
      description: 'Label for the select component'
    },
    {
      name: 'required',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the select is required'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the select is disabled'
    },
    {
      name: 'withError',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether to show error state'
    },
    {
      name: 'withPlaceholder',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show placeholder'
    }
  ];

  const id = `select-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story
  {controls}
  title="Select Component"
  description="Select component for choosing one option from a list"
 
>
  {#snippet children(controlValues: any)}
  <Select
    {id}
    label={controlValues.label}
    options={exampleOptions}
    required={controlValues.required}
    disabled={controlValues.disabled}
    placeholder={controlValues.withPlaceholder ? 'Choose an option...' : undefined}
    errors={controlValues.withError ? ['This field is required'] : []}
  />

  {/snippet}
</Story>