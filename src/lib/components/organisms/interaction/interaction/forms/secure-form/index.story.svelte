<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { SecureFormProps } from '$stylist/design-system/props';
  import { SecureFormStyleManager } from '$stylist/design-system/styles';
  import SecureForm from './index.svelte';

  type Props = {
    showEncryption: boolean;
    showSecureIndicator: boolean;
    autoLock: boolean;
    sessionTimeout: number;
  };

  const controls: ControlConfig[] = [
    { name: 'showEncryption', type: 'boolean', defaultValue: true },
    { name: 'showSecureIndicator', type: 'boolean', defaultValue: true },
    { name: 'autoLock', type: 'boolean', defaultValue: true },
    { name: 'sessionTimeout', type: 'number', defaultValue: 300 }
  ];

  function handleSubmit(data: any) {
    console.log('Secure form submitted:', data);
    alert('Secure form submitted successfully!');
  }

  function handleSessionExpired() {
    console.log('Session expired');
    alert('Session expired. Please login again.');
  }
</script>

<Story
  id="organisms-secure-form"
  title="Organisms / Interaction / Forms / Secure Form"
  component={SecureForm}
  category="Organisms/Interaction/Forms"
  description="A secure form component with encryption and session management for sensitive data."
  tags={['form', 'secure', 'encryption', 'session']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={SecureFormStyleManager.container('sb-organisms-secure-form p-4')}>
      <h1 class="text-lg font-semibold mb-4">SecureForm Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive SecureForm</h2>
        <div class="max-w-md">
          <SecureForm
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

