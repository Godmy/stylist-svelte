<script lang="ts">
  import type { ScheduledNotificationProps } from '$stylist/communication/interface/component/notifications/other';
  import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';
  let { notifications = [], class: className, ...restProps }: ScheduledNotificationProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-scheduled-notification border rounded-lg p-4', className != null ? String(className) : '')} {...restProps}>
  <div class="font-semibold mb-2">Scheduled Notifications</div>
  {#each notifications as n}<div class="text-sm border rounded p-2 mb-1">{n.title} {#if n.schedule}<span class="text-[var(--color-text-secondary)]">({n.schedule})</span>{/if}</div>{/each}
</div>








