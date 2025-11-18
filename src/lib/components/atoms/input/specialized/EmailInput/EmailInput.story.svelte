<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import EmailInput from '../EmailInput.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'value', description: 'Value', type: 'text' },
    { name: 'placeholder', description: 'Placeholder', type: 'text', defaultValue: 'Введите email' },
    { name: 'disabled', description: 'Disabled', type: 'boolean', defaultValue: false },
    { name: 'required', description: 'Required', type: 'boolean', defaultValue: false },
    { name: 'error', description: 'Error', type: 'boolean', defaultValue: false },
    { name: 'helpText', description: 'Help Text', type: 'text' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
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
  {#snippet children(props: { value: string; placeholder: string; disabled: boolean; required: boolean; error: boolean; helpText: string; class: string; })}
    <EmailInput value={props.value} placeholder={props.placeholder} />
  {/snippet}
</Story>