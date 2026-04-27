<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import type { AccountSettingsFormElementProps, AccountSettings } from '$stylist';
  import { AccountSettingsStyleManager } from '$stylist';
  import AccountSettingsForm from './index.svelte';

  type Props = {
    showEmailChange: boolean;
    showPasswordChange: boolean;
    showDeleteAccount: boolean;
    showTwoFactor: boolean;
    loading: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'showEmailChange', type: 'boolean', defaultValue: true },
    { name: 'showPasswordChange', type: 'boolean', defaultValue: true },
    { name: 'showDeleteAccount', type: 'boolean', defaultValue: true },
    { name: 'showTwoFactor', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false }
  ];

  function handleSubmit(settings: AccountSettings) {
    console.log('Account settings submitted:', settings);
    alert('Account settings saved!');
  }

  function handleDeleteAccount() {
    console.log('Delete account requested');
    if (confirm('Are you sure you want to delete your account?')) {
      alert('Account deletion initiated');
    }
  }
</script>

<Story
  id="organisms-account-settings-form"
  title="Organisms / Interaction / Forms / Account / Account Settings Form"
  component={AccountSettingsForm}
  category="Organisms/Interaction/Forms/Account"
  description="An account settings form for managing user account preferences and security settings."
  tags={['form', 'account', 'settings', 'security']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={AccountSettingsStyleManager.form('sb-organisms-account-settings-form p-4')}>
      <h1 class="text-lg font-semibold mb-4">AccountSettingsForm Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive AccountSettingsForm</h2>
        <div class="max-w-lg">
          <AccountSettingsForm
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>




