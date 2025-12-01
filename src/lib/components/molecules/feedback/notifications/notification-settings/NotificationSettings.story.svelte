<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NotificationSettings from './NotificationSettings.svelte';
  import type { INotificationSettingsPreference } from '../notification copy/UnifiedNotification.types';

  type Props = {
    showEmail: boolean;
    showPush: boolean;
    showSms: boolean;
    showInApp: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showEmail',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showPush',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showSms',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showInApp',
      type: 'boolean',
      defaultValue: true
    }
  ];

  const defaultPreferences: INotificationSettingsPreference[] = [
    {
      id: 'pref-1',
      name: 'Product updates',
      description: 'New feature rollouts and roadmap milestones.',
      channels: { email: true, push: true, sms: false, 'in-app': true }
    },
    {
      id: 'pref-2',
      name: 'Billing alerts',
      description: 'Invoices, payment reminders, and receipts.',
      channels: { email: true, push: false, sms: true, 'in-app': true }
    },
    {
      id: 'pref-3',
      name: 'Security events',
      description: 'Password changes, MFA prompts, and new login alerts.',
      channels: { email: true, push: true, sms: true, 'in-app': true }
    }
  ];
</script>

<Story
  id="molecules-notification-settings"
  title="NotificationSettings"
  component={NotificationSettings}
  category="Molecules"
  description="A settings panel for configuring notification options."
  tags={['settings', 'notifications', 'preferences']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">Notification Settings</h2>
      <NotificationSettings
        showEmail={props.showEmail}
        showPush={props.showPush}
        showSms={props.showSms}
        showInApp={props.showInApp}
        preferences={defaultPreferences}
      />
    </div>
  {/snippet}
</Story>
