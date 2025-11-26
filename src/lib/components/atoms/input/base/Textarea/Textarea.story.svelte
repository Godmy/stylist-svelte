<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Textarea from './Textarea.svelte';
  import type { ITextareaProps } from './types';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  type Props = Omit<ITextareaProps, 'errors'> & {
    errors?: string | string[];
  } & HTMLTextareaAttributes;

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'id', description: 'ID', type: 'text', defaultValue: 'textarea-1' },
    { name: 'label', description: 'Label', type: 'text', defaultValue: 'Message' },
    { name: 'placeholder', description: 'Placeholder', type: 'text', defaultValue: 'Enter text...' },
    { name: 'required', description: 'Required', type: 'boolean', defaultValue: false },
    { name: 'disabled', description: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'value', description: 'Value', type: 'text', defaultValue: '' },
    { name: 'errors', description: 'Errors (comma-separated)', type: 'text', defaultValue: '' },
    { name: 'rows', description: 'Rows', type: 'number', defaultValue: 3 },
    { name: 'maxlength', description: 'Max Length', type: 'number', defaultValue: undefined },
    { name: 'class', description: 'CSS Classes', type: 'text', defaultValue: '' }
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
  {#snippet children(props: Props)}
    {@const normalizedErrors =
      typeof props.errors === 'string'
        ? props.errors
            .split(',')
            .map((segment: string) => segment.trim())
            .filter((segment: string): segment is string => segment.length > 0)
        : props.errors ?? []}

    <Textarea
      {...props}
      errors={normalizedErrors}
    />
  {/snippet}
</Story>
