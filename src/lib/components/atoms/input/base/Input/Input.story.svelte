<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Input from './Input.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'id', description: 'ID', type: 'text', defaultValue: 'input-1' },
    { name: 'label', description: 'Label', type: 'text', defaultValue: 'Name' },
    { name: 'type', description: 'Type', type: 'select', options: ['text', 'email', 'password', 'number'] },
    { name: 'placeholder', description: 'Placeholder', type: 'text', defaultValue: 'Enter text...' },
    { name: 'required', description: 'Required', type: 'boolean', defaultValue: false },
    { name: 'disabled', description: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'value', description: 'Value', type: 'text' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-input-base-input"
  title="Input"
  component={Input}
  category="Atoms/Input/Base"
  description="An input component that provides a styled input field with label and error handling."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { id: string; label: string; type: string; placeholder: string; required: boolean; disabled: boolean; value: string; class: string; })}
    <Input id={props.id} label={props.label} type={props.type} value={props.value} />
  {/snippet}
</Story>