<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NotificationCenter from './NotificationCenter.svelte';
  import type { INotificationCenterNotification } from './types';

  type Props = {
    title: string;
    showFilter: boolean;
    maxNotifications: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Notifications'
    },
    {
      name: 'showFilter',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'maxNotifications',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 50
    }
  ];

  const sampleNotifications: INotificationCenterNotification[] = [
    {
      id: 'notif-1',
      title: 'New comment on proposal',
      message: 'Elena left feedback on the pricing doc.',
      type: 'info',
      timestamp: new Date(),
      read: false
    },
    {
      id: 'notif-2',
      title: 'Deploy succeeded',
      message: 'API gateway rollout completed without incidents.',
      type: 'success',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: true
    },
    {
      id: 'notif-3',
      title: 'Usage alert',
      message: 'Data warehouse credits exceeded 80% of the monthly quota.',
      type: 'warning',
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      read: false
    }
  ];
</script>

<Story
  id="molecules-notification-center"
  title="NotificationCenter"
  component={NotificationCenter}
  category="Molecules"
  description="A component to display a collection of notifications in a centralized panel."
  tags={['notifications', 'panel', 'center']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Notification Center</h2>
      <div class="max-w-md mx-auto">
        <NotificationCenter
          title={props.title}
          showFilter={props.showFilter}
          maxNotifications={props.maxNotifications}
          notifications={sampleNotifications}
        />
      </div>
    </div>
  {/snippet}
</Story>
