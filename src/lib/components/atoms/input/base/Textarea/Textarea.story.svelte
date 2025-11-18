<script>
  import { Story } from '$lib/playground';
  import Textarea from './Textarea.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Input/Base/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
      layout: 'padded',
      docs: {
        description: {
          component: 'A textarea component that provides a styled textarea field with label and error handling.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'id', label: 'ID', type: 'text', defaultValue: 'textarea-1' },
    { name: 'label', label: 'Label', type: 'text', defaultValue: 'Message' },
    { name: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Enter text...' },
    { name: 'required', label: 'Required', type: 'boolean', defaultValue: false },
    { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'value', label: 'Value', type: 'text' },
    { name: 'rows', label: 'Rows', type: 'number', defaultValue: 3 },
    { name: 'maxlength', label: 'Max Length', type: 'number' },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default Textarea component with 3 rows.'}
>
  <Textarea id="textarea-1" label="Message" />
</Story>