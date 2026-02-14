<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import NotificationCenter from './index.svelte';
  const notifications=[{id:'1',title:'Welcome',read:false},{id:'2',title:'Build complete',read:true},{id:'3',title:'Invoice ready',read:false}];
</script>
<Story id="organisms-notification-center" title="Organisms / Interaction / Feedback / Notifications / Notification Center" component={NotificationCenter} category="Organisms/Interaction/Feedback/Notifications">
  {#snippet children()}<div class="sb-organisms-notification-center p-4"><NotificationCenter {notifications} /></div>{/snippet}
</Story>
