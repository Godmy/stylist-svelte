<script lang="ts">
  import { createNotificationCenterState } from '$stylist/management/function/state/notification-center';
  import type { NotificationCenterProps } from '$stylist/chat/type/struct/notification-center-props';

  let props: NotificationCenterProps = $props();
  const state = createNotificationCenterState(props);
</script>
<div class={state.containerClasses} {...state.restProps}>
  <div class="font-semibold">Notification Center</div>
  <div class="text-sm text-[var(--color-text-secondary)]">Unread: {state.unread}</div>
  <div class="mt-2 space-y-1">{#each state.notifications.slice(0,5) as n}<div class="text-sm border rounded p-2">{n.title}</div>{/each}</div>
</div>
