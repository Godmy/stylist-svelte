<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import type { NotificationCenterProps, NotificationItem } from '$stylist/design-system/props';
  import { NotificationStyleManager } from '$stylist/design-system/styles';
  import NotificationCenter from './index.svelte';

  type Props = {
    showUnreadCount: boolean;
    showMarkAllRead: boolean;
    showClearAll: boolean;
    showTimestamp: boolean;
    pollingInterval: number;
  };

  const controls: ControlConfig[] = [
    { name: 'showUnreadCount', type: 'boolean', defaultValue: true },
    { name: 'showMarkAllRead', type: 'boolean', defaultValue: true },
    { name: 'showClearAll', type: 'boolean', defaultValue: true },
    { name: 'showTimestamp', type: 'boolean', defaultValue: true },
    { name: 'pollingInterval', type: 'number', defaultValue: 30000 }
  ];

  const notifications: NotificationItem[] = [
    { 
      id: '1', 
      title: 'Welcome', 
      message: 'Welcome to the platform! Get started by completing your profile.',
      type: 'info',
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 2)
    },
    { 
      id: '2', 
      title: 'Build complete', 
      message: 'Your production build #1234 has completed successfully',
      type: 'success',
      read: true,
      timestamp: new Date(Date.now() - 1000 * 60 * 15)
    },
    { 
      id: '3', 
      title: 'Invoice ready', 
      message: 'Your invoice for December 2025 is now available',
      type: 'info',
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 60)
    },
    { 
      id: '4', 
      title: 'Security alert', 
      message: 'New login detected from unknown device',
      type: 'warning',
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3)
    },
    { 
      id: '5', 
      title: 'Payment failed', 
      message: 'Your payment could not be processed. Please update your payment method.',
      type: 'error',
      read: true,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24)
    }
  ];

  function handleNotificationClick(notification: NotificationItem) {
    console.log('Notification clicked:', notification);
  }

  function handleMarkAllRead() {
    console.log('Mark all as read');
  }

  function handleClearAll() {
    console.log('Clear all notifications');
  }

  function handleFetchMore() {
    console.log('Fetching more notifications...');
  }
</script>

<Story
  id="organisms-notification-center"
  title="Organisms / Interaction / Feedback / Notifications / Notification Center"
  component={NotificationCenter}
  category="Organisms/Interaction/Feedback/Notifications"
  description="A notification center component for managing and displaying user notifications with filtering and actions."
  tags={['notification', 'center', 'alert', 'feedback']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={NotificationStyleManager.preferences('sb-organisms-notification-center p-4')}>
      <h1 class="text-lg font-semibold mb-4">NotificationCenter Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive NotificationCenter</h2>
        <div class="max-w-lg">
          <NotificationCenter 
            {notifications} 
            showUnreadCount={values.showUnreadCount}
            showMarkAllRead={values.showMarkAllRead}
            showClearAll={values.showClearAll}
            showTimestamp={values.showTimestamp}
            pollingInterval={values.pollingInterval}
            onNotificationClick={handleNotificationClick}
            onMarkAllRead={handleMarkAllRead}
            onClearAll={handleClearAll}
            onFetchMore={handleFetchMore}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

