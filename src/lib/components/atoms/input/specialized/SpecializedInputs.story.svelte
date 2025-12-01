<script lang="ts">
  import { Story } from '$lib/playground';
  import { atoms, molecules } from '$lib';
  import type { ControlConfig } from '$lib/playground';

  const { EmailInput, PasswordInput } = atoms;
  const { PhoneNumberInput } = molecules;

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
      defaultValue: '' // Use empty string to allow individual inputs to use their own defaults
    },
    {
      name: 'helpText',
      type: 'text',
      defaultValue: '' // Use empty string to allow individual inputs to use their own defaults
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
          {...props}
          placeholder={props.placeholder || 'Enter email'}
        />
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-4">Password Input</h2>
        <PasswordInput
          {...props}
          placeholder={props.placeholder || 'Enter password'}
        />
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-4">Phone Number Input</h2>
        <PhoneNumberInput
          {...props}
          placeholder={props.placeholder || '+7 (___) ___-__-__'}
        />
      </div>
    </div>
  {/snippet}
</Story>
