<script>
  import { Story } from '$lib/playground';
  import Input from './Input.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Input/Base/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
      layout: 'padded',
      docs: {
        description: {
          component: 'An input component that provides a styled input field with label and error handling.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'id', label: 'ID', type: 'text', defaultValue: 'input-1' },
    { name: 'label', label: 'Label', type: 'text', defaultValue: 'Name' },
    { name: 'type', label: 'Type', type: 'select', options: ['text', 'email', 'password', 'number'] },
    { name: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Enter text...' },
    { name: 'required', label: 'Required', type: 'boolean', defaultValue: false },
    { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'value', label: 'Value', type: 'text' },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default Input component with text type.'}
>
  <Input id="input-1" label="Name" />
</Story>