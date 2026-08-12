<script lang="ts">
	import type { RecipeScheduledNotification } from '$stylist/notification/interface/recipe/scheduled-notification';
	import { createScheduledNotificationState } from './state.svelte';

	let props: RecipeScheduledNotification = $props();
	const state = createScheduledNotificationState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="_c1">Scheduled Notifications</div>
	{#each state.notifications as n}<div class="_c2">
			{n.title}
			{#if n.schedule}<span class="_c3">({n.schedule})</span>{/if}
		</div>{/each}
</div>

<style>
	._c1 {
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c2 {
		margin-bottom: 0.25rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c3 {
		color: var(--color-text-secondary);
	}
</style>
