<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NotificationList from './NotificationList.svelte';

  type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'message' | 'mention' | 'follow' | 'like' | 'comment';

  type DemoNotification = {
    id: string;
    title: string;
    content: string;
    type: NotificationType;
    timestamp: Date;
    unread?: boolean;
  };

  type Props = {
    showUnreadBadge: boolean;
    maxNotifications: number;
    showTimestamp: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showUnreadBadge',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'maxNotifications',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 20
    },
    {
      name: 'showTimestamp',
      type: 'boolean',
      defaultValue: true
    }
  ];

  const demoNotifications: DemoNotification[] = [
    {
      id: 'notif-1',
      title: 'New mention',
      content: 'Alex mentioned you in the release checklist.',
      type: 'mention',
      timestamp: new Date(),
      unread: true
    },
    {
      id: 'notif-2',
      title: 'Comment added',
      content: 'Sales appended a note to the opportunity brief.',
      type: 'comment',
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      unread: false
    },
    {
      id: 'notif-3',
      title: 'Deployment completed',
      content: 'Edge network rollout finished successfully.',
      type: 'success',
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      unread: false
    }
  ];
</script>

<Story
  id="molecules-notification-list"
  title="NotificationList"
  component={NotificationList}
  category="Molecules"
  description="A list component to display multiple notifications."
  tags={['notifications', 'list', 'messages']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Notification List</h2>
      <div class="max-w-md mx-auto">
        <NotificationList
          showUnreadBadge={props.showUnreadBadge}
          maxNotifications={props.maxNotifications}
          showTimestamp={props.showTimestamp}
          notifications={demoNotifications}
        />
      </div>
    </div>
  {/snippet}
</Story>
