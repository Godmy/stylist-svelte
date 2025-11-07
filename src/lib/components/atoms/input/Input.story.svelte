<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Input from './Input.svelte';

  const typeOptions = ['text', 'email', 'password', 'number'];

  type InputStoryProps = {
    label: string;
    placeholder: string;
    value: string;
    type: (typeof typeOptions)[number];
    required: boolean;
    disabled: boolean;
    withError: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Email address'
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'hello@example.com'
    },
    {
      name: 'value',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'email',
      options: typeOptions
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
    }
  ];
</script>

<Story
  id="atoms-input"
  title="Input"
  component={Input}
  category="Atoms"
  description="Text input with label, validation state, and accessibility helpers."
  tags={['form', 'input', 'text']}
  controls={controls}
>
  {#snippet children(props: InputStoryProps)}
    <Input
      id="input-demo"
      label={props.label || 'Email address'}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      disabled={props.disabled}
      errors={props.withError ? ['Please provide a valid value'] : []}
    />
  {/snippet}
</Story>
