<script lang="ts">
  import PhoneNumberInput from './index.svelte';
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { IPhoneNumberInputProps } from '$stylist/design-system/props/phone-number-input';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = IPhoneNumberInputProps & HTMLInputAttributes;

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: '79999999999', description: 'Raw phone number digits' },
    { name: 'placeholder', type: 'text', defaultValue: '+7 (___) ___-__-__', description: 'Placeholder text' },
    { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Whether the input is disabled' },
    { name: 'required', type: 'boolean', defaultValue: false, description: 'Whether the input is required' },
    { name: 'error', type: 'boolean', defaultValue: false, description: 'Whether the input has an error' },
    { name: 'helpText', type: 'text', defaultValue: 'Supports Russian format +7 (XXX) XXX-XX-XX.', description: 'Help text to display' },
    { name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
  ];
</script>

<Story
  id="atoms-phone-number-input"
  title="PhoneNumberInput"
  component={PhoneNumberInput}
  category="Atoms"
  description="Guided formatter for Russian-style phone numbers."
  tags={['input', 'phone']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-4">
      <PhoneNumberInput {...props} />
    </div>
  {/snippet}
</Story>





