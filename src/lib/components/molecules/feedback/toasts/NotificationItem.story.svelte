<script lang="ts">
  import NotificationItem from './NotificationItem.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type NotificationType = 'info' | 'success' | 'warning' | 'error';
  
  let title = $state('Notification Title');
  let message = $state('This is a sample notification message.');
  let type = $state<NotificationType>('info');
  let showIcon = $state(true);
  let showClose = $state(true);

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Notification Title' },
    { name: 'message', type: 'text', defaultValue: 'This is a sample notification message.' },
    { name: 'type', type: 'select', options: ['info', 'success', 'warning', 'error'], defaultValue: 'info' },
    { name: 'showIcon', type: 'boolean', defaultValue: true },
    { name: 'showClose', type: 'boolean', defaultValue: true }
  ];
</script>

# NotificationItem

<Story id="notificationitem-story" title="NotificationItem" component={NotificationItem} {controls}>
  <div class="space-y-4 p-8">
    <NotificationItem 
      title={title}
      description={message}
      unread={showIcon}
    />

    <div class="space-y-4 mt-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={showIcon} /> Show Icon
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" bind:checked={showClose} /> Show Close Button
        </label>
      </div>

      <div>
        <label>
          Type:
          <select bind:value={type}>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </label>
      </div>

      <div>
        <label>Title: <input type="text" bind:value={title} /></label>
      </div>

      <div>
        <label>Message: <textarea bind:value={message} rows="3" class="w-full p-2 border"></textarea></label>
      </div>
    </div>
  </div>
</Story>