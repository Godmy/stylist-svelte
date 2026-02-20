<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { ScheduledNotificationProps, ScheduledNotificationItem } from '$stylist/design-system/props';
  import { NotificationStyleManager } from '$stylist/design-system/styles';
  import ScheduledNotification from './index.svelte';

  type Props = {
    showEditButton: boolean;
    showDeleteButton: boolean;
    showRecurrence: boolean;
    allowReorder: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showEditButton', type: 'boolean', defaultValue: true },
    { name: 'showDeleteButton', type: 'boolean', defaultValue: true },
    { name: 'showRecurrence', type: 'boolean', defaultValue: true },
    { name: 'allowReorder', type: 'boolean', defaultValue: true }
  ];

  const notifications: ScheduledNotificationItem[] = [
    { 
      id: '1', 
      title: 'Weekly report', 
      description: 'Get a summary of your weekly activity',
      scheduledAt: 'Mon 09:00',
      enabled: true,
      recurrence: 'weekly'
    },
    { 
      id: '2', 
      title: 'Monthly invoice', 
      description: 'Receive your monthly invoice',
      scheduledAt: '1st of month',
      enabled: true,
      recurrence: 'monthly'
    },
    { 
      id: '3', 
      title: 'Daily standup reminder', 
      description: 'Time to update your status',
      scheduledAt: 'Daily 10:00',
      enabled: false,
      recurrence: 'daily'
    },
    { 
      id: '4', 
      title: 'One-time meeting', 
      description: 'Quarterly review meeting',
      scheduledAt: '2026-03-01 14:00',
      enabled: true,
      recurrence: 'once'
    }
  ];

  function handleEdit(notification: ScheduledNotificationItem) {
    console.log('Edit notification:', notification);
  }

  function handleDelete(id: string) {
    console.log('Delete notification:', id);
  }

  function handleToggle(id: string) {
    console.log('Toggle notification:', id);
  }
</script>

<Story
  id="organisms-scheduled-notification"
  title="Organisms / Interaction / Feedback / Notifications / Scheduled Notification"
  component={ScheduledNotification}
  category="Organisms/Interaction/Feedback/Notifications"
  description="A scheduled notification component for managing recurring and one-time notifications."
  tags={['notification', 'scheduled', 'recurring', 'reminder']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={NotificationStyleManager.preferences('sb-organisms-scheduled-notification p-4')}>
      <h1 class="text-lg font-semibold mb-4">ScheduledNotification Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ScheduledNotification</h2>
        <div class="max-w-lg">
          <ScheduledNotification 
            {notifications}
            showEditButton={values.showEditButton}
            showDeleteButton={values.showDeleteButton}
            showRecurrence={values.showRecurrence}
            allowReorder={values.allowReorder}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

