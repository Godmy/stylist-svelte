<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Select from './Select.svelte';

  const options = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' }
  ];

  type SelectStoryProps = {
    label: string;
    value: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    withError: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Choose an option'
    },
    {
      name: 'value',
      type: 'select',
      defaultValue: 'option-1',
      options: options.map((option) => option.value)
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Select one'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'withError',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-select"
  title="Select"
  component={Select}
  category="Atoms"
  description="Dropdown select field with label, placeholder, and validation support."
  tags={['form', 'input', 'select']}
  controls={controls}
>
  {#snippet children(props: SelectStoryProps)}
    <Select
      id="select-demo"
      label={props.label || 'Choose an option'}
      options={options}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      required={props.required}
      errors={props.withError ? ['Selection required'] : []}
    />
  {/snippet}
</Story>
