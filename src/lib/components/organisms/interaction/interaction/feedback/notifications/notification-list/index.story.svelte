<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { NotificationListProps, NotificationItem } from '$stylist/design-system/props';
  import { NotificationStyleManager } from '$stylist/design-system/styles';
  import NotificationList from './index.svelte';

  type Props = {
    showDismiss: boolean;
    showTypeIcon: boolean;
    showTimestamp: boolean;
    maxVisible: number;
  };

  const controls: ControlConfig[] = [
    { name: 'showDismiss', type: 'boolean', defaultValue: true },
    { name: 'showTypeIcon', type: 'boolean', defaultValue: true },
    { name: 'showTimestamp', type: 'boolean', defaultValue: true },
    { name: 'maxVisible', type: 'number', defaultValue: 5 }
  ];

  const notifications: NotificationItem[] = [
    { 
      id: '1', 
      title: 'Task assigned', 
      message: 'You have a new task: "Update homepage design"',
      type: 'info',
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
    },
    { 
      id: '2', 
      title: 'System update', 
      message: 'Scheduled maintenance at 20:00 UTC',
      type: 'warning',
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
    },
    { 
      id: '3', 
      title: 'Payment received', 
      message: 'Your payment of $99.00 has been processed',
      type: 'success',
      read: true,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    { 
      id: '4', 
      title: 'Login attempt failed', 
      message: 'Someone tried to login with incorrect password',
      type: 'error',
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
    },
    { 
      id: '5', 
      title: 'New comment', 
      message: 'John commented on your post "Design System Best Practices"',
      type: 'info',
      read: true,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
    }
  ];

  function handleDismiss(id: string) {
    console.log('Notification dismissed:', id);
  }

  function handleNotificationClick(notification: NotificationItem) {
    console.log('Notification clicked:', notification);
  }
</script>

<Story
  id="organisms-notification-list"
  title="Organisms / Interaction / Feedback / Notifications / Notification List"
  component={NotificationList}
  category="Organisms/Interaction/Feedback/Notifications"
  description="A notification list component for displaying user notifications with various types and actions."
  tags={['notification', 'alert', 'feedback', 'list']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={NotificationStyleManager.preferences('sb-organisms-notification-list p-4')}>
      <h1 class="text-lg font-semibold mb-4">NotificationList Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive NotificationList</h2>
        <div class="max-w-lg">
          <NotificationList 
            {notifications} 
            showDismiss={values.showDismiss}
            showTypeIcon={values.showTypeIcon}
            showTimestamp={values.showTimestamp}
            maxVisible={values.maxVisible}
            onDismiss={handleDismiss}
            onNotificationClick={handleNotificationClick}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

