<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import EmailInput from './EmailInput.svelte';
  import type { IEmailInputProps } from './types';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = IEmailInputProps & HTMLInputAttributes;

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
</script>

<Story

  id="atoms-input-specialized-emailinput"

  title="EmailInput"

  component={EmailInput}

  category="Atoms/Input/Specialized"

  description="An email input component that provides a specialized input field for email addresses."

  tags={[]}

  controls={controls}

>

  {#snippet children(props: Props)}

    <div class="p-4">

      <EmailInput {...props} />

    </div>

  {/snippet}

</Story>