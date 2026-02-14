<script lang="ts">
  import type { ScheduledNotificationProps } from '$stylist/design-system/props/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction-feedback';
  let { notifications = [], class: className='', ...restProps }: ScheduledNotificationProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-scheduled-notification border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold mb-2">Scheduled Notifications</div>
  {#each notifications as n}<div class="text-sm border rounded p-2 mb-1">{n.title} {#if n.scheduledAt}<span class="text-gray-500">({n.scheduledAt})</span>{/if}</div>{/each}
</div>
