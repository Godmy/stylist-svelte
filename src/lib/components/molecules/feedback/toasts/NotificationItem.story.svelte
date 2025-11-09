<script lang="ts">
  import NotificationItem from './NotificationItem.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let title = 'Notification Title';
  let message = 'This is a sample notification message.';
  let type = 'info';
  let showIcon = true;
  let showClose = true;

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Notification Title' },
    { name: 'message', type: 'text', defaultValue: 'This is a sample notification message.' },
    { name: 'type', type: 'select', options: ['info', 'success', 'warning', 'error'], defaultValue: 'info' },
    { name: 'showIcon', type: 'boolean', defaultValue: true },
    { name: 'showClose', type: 'boolean', defaultValue: true }
  ];
</script>

# NotificationItem

<Story title="NotificationItem" {controls}>
  <div class="space-y-4 p-8">
    <NotificationItem 
      {title}
      {message}
      {type}
      {showIcon}
      {showClose}
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
        <label>Message: <textarea bind:value={message} rows="3" class="w-full p-2 border" /></label>
      </div>
    </div>
  </div>
</Story>