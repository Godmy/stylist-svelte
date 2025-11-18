<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Select from './Select.svelte';
  import type { ISelectOption } from './types';

  type SelectStoryProps = {
    label: string;
    required: boolean;
    disabled: boolean;
    withError: boolean;
    withPlaceholder: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Select an option'
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'withError',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'withPlaceholder',
      type: 'boolean',
      defaultValue: true
    }
  ];

  // Example options
  const exampleOptions: ISelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  // Generate a random ID for the select
  const id = `select-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story
  id="atoms-select"
  title="Select"
  component={Select}
  category="Atoms"
  description="Form select element with label and error handling."
  tags={['form', 'input', 'select', 'dropdown']}
  controls={controls}
>
  {#snippet children(props: SelectStoryProps)}
    <div class="flex flex-col gap-4">
      <Select
        id={id}
        label={props.label}
        options={exampleOptions}
        required={props.required}
        disabled={props.disabled}
        placeholder={props.withPlaceholder ? 'Choose an option...' : undefined}
        errors={props.withError ? ['This field is required'] : []}
      />
    </div>
  {/snippet}
</Story>