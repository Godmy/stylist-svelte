<script lang="ts">
	import type { RecipeNotificationList } from '$stylist/notification/interface/recipe/notification-list';
	import type { HTMLAttributes } from 'svelte/elements';
	import { createNotificationListState } from './state.svelte';

	let props: RecipeNotificationList = $props();
	const state = createNotificationListState(props);
</script>

<div class={state.containerClasses} {...state.restProps as HTMLAttributes<HTMLDivElement>}>
	{#each state.notifications as n}<div class="_c1">
			<div class="_c2">{n.title}</div>
			{#if n.message}<div class="_c3">{n.message}</div>{/if}
		</div>{/each}
</div>

<style>
	._c1 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.5rem;
	}
	._c2 {
		font-weight: 500;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
