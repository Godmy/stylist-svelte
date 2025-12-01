<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NotificationPreferences from './NotificationPreferences.svelte';

  type Props = {
    title: string;
    showEmail: boolean;
    showPush: boolean;
    showSms: boolean;
    showInApp: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Notification Preferences'
    },
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
</script>

<Story
  id="molecules-notification-preferences"
  title="NotificationPreferences"
  component={NotificationPreferences}
  category="Molecules"
  description="A form component for managing notification preferences."
  tags={['preferences', 'settings', 'notifications']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">{props.title}</h2>
      <NotificationPreferences
        title={props.title}
        categories={[
          { id: 'category1', name: 'Marketing', description: 'Promotional emails and offers', channels: ['email', 'push', 'sms'] },
          { id: 'category2', name: 'Updates', description: 'Product updates and announcements', channels: ['email', 'push', 'in-app'] },
          { id: 'category3', name: 'Security', description: 'Security alerts and account notifications', channels: ['email', 'sms'] }
        ]}
        preferences={[
          { categoryId: 'category1', channel: 'email', enabled: true },
          { categoryId: 'category1', channel: 'push', enabled: false },
          { categoryId: 'category2', channel: 'email', enabled: true },
          { categoryId: 'category3', channel: 'email', enabled: true },
          { categoryId: 'category3', channel: 'sms', enabled: true }
        ]}
        showEmail={props.showEmail}
        showPush={props.showPush}
        showSms={props.showSms}
        showInApp={props.showInApp}
      />
    </div>
  {/snippet}
</Story>