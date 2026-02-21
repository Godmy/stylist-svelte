<script lang="ts">
  import type { NotificationCenterProps } from '$stylist/design-system/props/interaction/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction/interaction-feedback';
  let { notifications = [], class: className='', ...restProps }: NotificationCenterProps = $props();
  const unread = $derived(notifications.filter((n) => !n.read).length);
</script>
<div class={InteractionFeedbackStyleManager.root('c-notification-center border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold">Notification Center</div>
  <div class="text-sm text-gray-600">Unread: {unread}</div>
  <div class="mt-2 space-y-1">{#each notifications.slice(0,5) as n}<div class="text-sm border rounded p-2">{n.title}</div>{/each}</div>
</div>
