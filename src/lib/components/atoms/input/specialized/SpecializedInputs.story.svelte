<script lang="ts">
  import { Story } from '$lib/playground';
  import { EmailInput, PasswordInput, PhoneNumberInput } from '$lib';
  import type { ControlConfig } from '$lib/playground';

  type Props = {
    disabled: boolean;
    required: boolean;
    error: boolean;
    placeholder: string;
    helpText: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'helpText',
      type: 'text',
      defaultValue: ''
    }
  ];
</script>

<Story
  id="atoms-input-specialized"
  title="Specialized Inputs"
  component={EmailInput}
  category="Atoms"
  description="Specialized input components for specific data types"
  tags={['input', 'email', 'password', 'phone']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="space-y-8 p-4">
      <div>
        <h2 class="text-lg font-semibold mb-4">Email Input</h2>
        <EmailInput
          disabled={props.disabled}
          required={props.required}
          error={props.error}
          placeholder={props.placeholder || 'Enter email'}
          helpText={props.helpText}
        />
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-4">Password Input</h2>
        <PasswordInput
          disabled={props.disabled}
          required={props.required}
          error={props.error}
          placeholder={props.placeholder || 'Enter password'}
          helpText={props.helpText}
        />
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-4">Phone Number Input</h2>
        <PhoneNumberInput
          disabled={props.disabled}
          required={props.required}
          error={props.error}
          placeholder={props.placeholder || '+7 (___) ___-__-__'}
          helpText={props.helpText}
        />
      </div>
    </div>
  {/snippet}
</Story>