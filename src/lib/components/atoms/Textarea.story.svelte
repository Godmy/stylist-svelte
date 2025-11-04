<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Textarea from './Textarea.svelte';

  type TextareaStoryProps = {
    label: string;
    placeholder: string;
    value: string;
    rows: number;
    maxlength: number;
    required: boolean;
    disabled: boolean;
    withError: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Message'
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Share your thoughts...'
    },
    {
      name: 'value',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'rows',
      type: 'number',
      defaultValue: 4,
      min: 2,
      max: 12,
      step: 1
    },
    {
      name: 'maxlength',
      type: 'number',
      defaultValue: 280,
      min: 50,
      max: 500,
      step: 10
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
  id="atoms-textarea"
  title="Textarea"
  component={Textarea}
  category="Atoms"
  description="Multi-line text input with character counter and validation."
  tags={['form', 'input', 'text']}
  controls={controls}
>
  {#snippet children(props: TextareaStoryProps)}
    <Textarea
      id="textarea-demo"
      label={props.label || 'Message'}
      placeholder={props.placeholder}
      value={props.value}
      rows={props.rows}
      maxlength={props.maxlength}
      required={props.required}
      disabled={props.disabled}
      errors={props.withError ? ['Please enter a message'] : []}
    />
  {/snippet}
</Story>
