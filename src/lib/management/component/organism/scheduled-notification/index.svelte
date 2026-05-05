<script lang="ts">
  import { createScheduledNotificationState } from '$stylist/management/function/state/scheduled-notification';
  import type { ScheduledNotificationProps } from '$stylist/chat/type/struct/scheduled-notification-props';

  let props: ScheduledNotificationProps = $props();
  const state = createScheduledNotificationState(props);
</script>
<div class={state.containerClasses} {...state.restProps}>
  <div class="font-semibold mb-2">Scheduled Notifications</div>
  {#each state.notifications as n}<div class="text-sm border rounded p-2 mb-1">{n.title} {#if n.schedule}<span class="text-[var(--color-text-secondary)]">({n.schedule})</span>{/if}</div>{/each}
</div>
