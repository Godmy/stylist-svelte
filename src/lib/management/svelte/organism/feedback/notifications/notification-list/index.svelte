<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { createNotificationListState } from '$stylist/management/function/state/notification-list';
  import type { NotificationListProps } from '$stylist/communication/interface/component/notifications/other';

  let props: NotificationListProps = $props();
  const state = createNotificationListState(props);

  const safeRestProps: Omit<typeof state.restProps, 'class'> = state.restProps;
</script>
<div class={state.containerClasses} {...safeRestProps as HTMLAttributes<HTMLDivElement>}>
  {#each state.notifications as n}<div class="border rounded p-2"><div class="font-medium">{n.title}</div>{#if n.message}<div class="text-sm text-[var(--color-text-secondary)]">{n.message}</div>{/if}</div>{/each}
</div>
