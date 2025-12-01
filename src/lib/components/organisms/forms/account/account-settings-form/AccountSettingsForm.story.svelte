<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AccountSettingsForm from './AccountSettingsForm.svelte';

  type Props = {
    title: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Account Settings'
    }
  ];
</script>

<Story
  id="molecules-account-settings-form"
  title="AccountSettingsForm"
  component={AccountSettingsForm}
  category="Molecules"
  description="A form for managing user account settings and preferences."
  tags={['form', 'settings', 'user-profile']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <div class="mb-6">
        <h2 class="text-xl font-semibold">{props.title}</h2>
        <p class="text-gray-500">Manage your account information and preferences</p>
      </div>
      <AccountSettingsForm />
    </div>
  {/snippet}
</Story>