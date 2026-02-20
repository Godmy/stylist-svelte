<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import NotificationSettings from './index.svelte';
  import type { INotificationSettingsPreference } from '$stylist/design-system/props/notification-settings';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'showEmail',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show email channel'
    },
    {
      name: 'showPush',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show push channel'
    },
    {
      name: 'showSms',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show SMS channel'
    },
    {
      name: 'showInApp',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show in-app channel'
    }
  ];

  const defaultPreferences: INotificationSettingsPreference[] = [
    {
      id: 'pref-1',
      name: 'Product updates',
      description: 'New feature rollouts and roadmap milestones.',
      channels: { email: true, push: true, sms: false, 'in_app': true }
    },
    {
      id: 'pref-2',
      name: 'Billing alerts',
      description: 'Invoices, payment reminders, and receipts.',
      channels: { email: true, push: false, sms: true, 'in_app': true }
    },
    {
      id: 'pref-3',
      name: 'Security events',
      description: 'Password changes, MFA prompts, and new login alerts.',
      channels: { email: true, push: true, sms: true, 'in_app': true }
    }
  ];
</script>

<Story
  {controls}
  title="NotificationSettings Component"
  description="A settings panel for configuring notification options"
  let:controlValues
>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-6">Notification Settings</h2>
    <NotificationSettings
      showEmail={controlValues.showEmail}
      showPush={controlValues.showPush}
      showSms={controlValues.showSms}
      showInApp={controlValues.showInApp}
      preferences={defaultPreferences}
    />
  </div>
</Story>