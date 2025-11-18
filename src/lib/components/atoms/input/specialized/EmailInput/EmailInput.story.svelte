<script>
  import { Story } from '$lib/playground';
  import EmailInput from '../EmailInput.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Input/Specialized/EmailInput',
    component: EmailInput,
    tags: ['autodocs'],
    parameters: {
      layout: 'padded',
      docs: {
        description: {
          component: 'An email input component that provides a specialized input field for email addresses.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'value', label: 'Value', type: 'text' },
    { name: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Введите email' },
    { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'required', label: 'Required', type: 'boolean', defaultValue: false },
    { name: 'error', label: 'Error', type: 'boolean', defaultValue: false },
    { name: 'helpText', label: 'Help Text', type: 'text' },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default EmailInput component with placeholder text.'}
>
  <EmailInput />
</Story>