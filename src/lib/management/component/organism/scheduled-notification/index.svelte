<script lang="ts">
	import { createScheduledNotificationState } from '$stylist/management/function/state/scheduled-notification';
	import type { ScheduledNotificationProps } from '$stylist/chat/type/struct/scheduled-notification-props';

	let props: ScheduledNotificationProps = $props();
	const state = createScheduledNotificationState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="mb-2 font-semibold">Scheduled Notifications</div>
	{#each state.notifications as n}<div class="mb-1 rounded border p-2 text-sm">
			{n.title}
			{#if n.schedule}<span class="text-[var(--color-text-secondary)]">({n.schedule})</span>{/if}
		</div>{/each}
</div>
