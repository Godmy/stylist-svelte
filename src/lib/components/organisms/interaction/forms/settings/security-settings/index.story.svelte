<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import { SecuritySettingsStyleManager } from '$stylist/design-system/styles';
  import SecuritySettingsComponent from './index.svelte';

  type Props = {
    showPasswordChange: boolean;
    showTwoFactor: boolean;
    showSessionManagement: boolean;
    showLoginHistory: boolean;
    showSecurityLevel: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showPasswordChange', type: 'boolean', defaultValue: true },
    { name: 'showTwoFactor', type: 'boolean', defaultValue: true },
    { name: 'showSessionManagement', type: 'boolean', defaultValue: true },
    { name: 'showLoginHistory', type: 'boolean', defaultValue: true },
    { name: 'showSecurityLevel', type: 'boolean', defaultValue: true }
  ];

  function handleSubmit(settings: unknown) {
    console.log('Security settings submitted:', settings);
    alert('Security settings saved!');
  }

  function handleEnableTwoFactor() {
    console.log('Two-factor authentication enabled');
  }

  function handleChangePassword() {
    console.log('Password change requested');
  }
</script>

<Story
  id="organisms-security-settings"
  title="Organisms / Interaction / Forms / Settings / Security Settings"
  component={SecuritySettingsComponent}
  category="Organisms/Interaction/Forms/Settings"
  description="A security settings component for managing password, 2FA, and security preferences."
  tags={['settings', 'security', 'password', '2fa']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={SecuritySettingsStyleManager.preferences('sb-organisms-security-settings p-4')}>
      <h1 class="text-lg font-semibold mb-4">SecuritySettings Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive SecuritySettings</h2>
        <div class="max-w-md">
          <SecuritySettingsComponent
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

