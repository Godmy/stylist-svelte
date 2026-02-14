<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import NotificationList from './index.svelte';
  const notifications=[{id:'1',title:'Task assigned',message:'You have a new task'},{id:'2',title:'System update',message:'Maintenance at 20:00'}];
</script>
<Story id="organisms-notification-list" title="Organisms / Interaction / Feedback / Notifications / Notification List" component={NotificationList} category="Organisms/Interaction/Feedback/Notifications">
  {#snippet children()}<div class="sb-organisms-notification-list p-4"><NotificationList {notifications} /></div>{/snippet}
</Story>
