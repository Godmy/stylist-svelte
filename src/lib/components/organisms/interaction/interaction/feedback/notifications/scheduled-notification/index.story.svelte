<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import ScheduledNotification from './index.svelte';
  const notifications=[{id:'1',title:'Weekly report',scheduledAt:'Mon 09:00'},{id:'2',title:'Reminder',scheduledAt:'Fri 18:00'}];
</script>
<Story id="organisms-scheduled-notification" title="Organisms / Interaction / Feedback / Notifications / Scheduled Notification" component={ScheduledNotification} category="Organisms/Interaction/Feedback/Notifications">
  {#snippet children()}<div class="sb-organisms-scheduled-notification p-4"><ScheduledNotification {notifications} /></div>{/snippet}
</Story>
