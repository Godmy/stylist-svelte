<script lang="ts">
	import createWbdDiscussionAliasBadgeState from '$stylist/wbd/function/state/discussion-alias-badge/index.svelte';
	import type { RecipeWbdDiscussionAliasBadge } from '$stylist/wbd/interface/recipe/discussion-alias-badge';

	let props: RecipeWbdDiscussionAliasBadge = $props();
	const state = createWbdDiscussionAliasBadgeState(props);
</script>

<span class="wbd-alias-badge {state.className}" class:wbd-alias-badge--own={state.isOwn}>
	{state.alias}
</span>

<style>
	.wbd-alias-badge {
		display: inline-flex;
		align-items: center;
		max-width: 12rem;
		padding: 0.1875rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.6875rem;
		font-weight: 700;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-alias-badge--own {
		background: var(--color-primary-100, #dbeafe);
		color: var(--color-primary-700, #1d4ed8);
	}
</style>
