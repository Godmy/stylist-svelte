<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Textarea from './Textarea.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'id', description: 'ID', type: 'text', defaultValue: 'textarea-1' },
    { name: 'label', description: 'Label', type: 'text', defaultValue: 'Message' },
    { name: 'placeholder', description: 'Placeholder', type: 'text', defaultValue: 'Enter text...' },
    { name: 'required', description: 'Required', type: 'boolean', defaultValue: false },
    { name: 'disabled', description: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'value', description: 'Value', type: 'text' },
    { name: 'rows', description: 'Rows', type: 'number', defaultValue: 3 },
    { name: 'maxlength', description: 'Max Length', type: 'number' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-input-base-textarea"
  title="Textarea"
  component={Textarea}
  category="Atoms/Input/Base"
  description="A textarea component that provides a styled textarea field with label and error handling."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { id: string; label: string; placeholder: string; required: boolean; disabled: boolean; value: string; rows: number; maxlength: number; class: string; })}
    <Textarea id={props.id} label={props.label} value={props.value} rows={props.rows} />
  {/snippet}
</Story>