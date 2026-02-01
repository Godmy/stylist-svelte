<script lang="ts">
  import PasswordInput from './index.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputProps } from '$stylist/design-system/input';

  type Props = InputProps & Omit<HTMLInputAttributes, 'size'> & {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helpText?: string;
    showPassword?: boolean;
    onTogglePassword?: () => void;
    class?: string;
  };

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: 'Secret#123', description: 'Current password value' },
    { name: 'placeholder', type: 'text', defaultValue: 'Введите пароль', description: 'Placeholder text' },
    { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Whether the input is disabled' },
    { name: 'required', type: 'boolean', defaultValue: true, description: 'Whether the input is required' },
    { name: 'error', type: 'boolean', defaultValue: false, description: 'Whether the input has an error' },
    { name: 'helpText', type: 'text', defaultValue: 'Must contain 8+ characters, number and symbol.', description: 'Help text to display' },
    { name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
  ];

  const props: Props = {};
</script>

<div class="p-4">
  <PasswordInput {...props} />
</div>


