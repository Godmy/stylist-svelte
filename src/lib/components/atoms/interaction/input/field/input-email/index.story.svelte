<script lang="ts">
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import EmailInput from './index.svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputProps } from '$stylist/design-system/input';

  type Props = InputProps & Omit<HTMLInputAttributes, 'size'> & {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helpText?: string;
    class?: string;
  };

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'value', description: 'Current email value', type: 'text', defaultValue: '' },
    { name: 'placeholder', description: 'Placeholder text', type: 'text', defaultValue: 'Введите email' },
    { name: 'disabled', description: 'Whether the input is disabled', type: 'boolean', defaultValue: false },
    { name: 'required', description: 'Whether the input is required', type: 'boolean', defaultValue: false },
    { name: 'error', description: 'Whether the input has an error', type: 'boolean', defaultValue: false },
    { name: 'helpText', description: 'Help text to display', type: 'text', defaultValue: '' },
    { name: 'class', description: 'Additional CSS classes', type: 'text', defaultValue: '' }
  ];

  const props: Props = {};
</script>

<div class="p-4">
  <EmailInput {...props} />
</div>

