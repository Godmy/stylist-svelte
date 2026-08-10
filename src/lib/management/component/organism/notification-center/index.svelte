<script lang="ts">
	import type { RecipeNotificationCenter } from '$stylist/management/interface/recipe/notification-center';
	import { createNotificationCenterState } from './state.svelte';

	let props: RecipeNotificationCenter = $props();
	const state = createNotificationCenterState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="_c1">Notification Center</div>
	<div class="_c2">Unread: {state.unread}</div>
	<div class="_c3">
		{#each state.notifications.slice(0, 5) as n}<div class="_c4">
				{n.title}
			</div>{/each}
	</div>
</div>

<style>
	._c1 {
		font-weight: 600;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		margin-top: 0.5rem;
	}
	._c3 > * + * {
		margin-top: 0.25rem;
	}
	._c4 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
