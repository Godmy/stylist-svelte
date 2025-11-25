<script lang="ts">
  import PasswordInput from './PasswordInput.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import type { IPasswordInputProps } from './types';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = IPasswordInputProps & HTMLInputAttributes;

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: 'Secret#123', description: 'Current password value' },
    { name: 'placeholder', type: 'text', defaultValue: 'Введите пароль', description: 'Placeholder text' },
    { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Whether the input is disabled' },
    { name: 'required', type: 'boolean', defaultValue: true, description: 'Whether the input is required' },
    { name: 'error', type: 'boolean', defaultValue: false, description: 'Whether the input has an error' },
    { name: 'helpText', type: 'text', defaultValue: 'Must contain 8+ characters, number and symbol.', description: 'Help text to display' },
    { name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
  ];
</script>

<Story
  id="atoms-password-input"
  title="PasswordInput"
  component={PasswordInput}
  category="Atoms"
  description="Password field with show/hide toggle and helper text."
  tags={['input', 'password']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-4">
      <PasswordInput {...props} />
    </div>
  {/snippet}
</Story>
