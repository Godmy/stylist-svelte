<script lang="ts">
	import createRoundStatusBadgeState from '$stylist/wbd/function/state/round-status-badge/index.svelte';
	import type { RecipeRoundStatusBadge } from '$stylist/wbd/interface/recipe/round-status-badge';

	let props: RecipeRoundStatusBadge = $props();
	const state = createRoundStatusBadgeState(props);
</script>

<span class="wbd-round-status-badge wbd-round-status-badge--{state.status} {state.className}">
	{state.label}
</span>

<style>
	.wbd-round-status-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.125rem 0.625rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 500;
		background: var(--color-background-secondary, #f1f5f9);
		color: var(--color-text-secondary, #475569);
	}
	.wbd-round-status-badge--collecting {
		background: var(--color-primary-100, #dbeafe);
		color: var(--color-primary-800, #1e40af);
	}
	.wbd-round-status-badge--discussing {
		background: var(--color-warning-100, #fef3c7);
		color: var(--color-warning-800, #92400e);
	}
	.wbd-round-status-badge--closed {
		background: var(--color-success-100, #dcfce7);
		color: var(--color-success-800, #166534);
	}
	.wbd-round-status-badge--finalized {
		background: var(--color-primary-500, #3b82f6);
		color: var(--color-text-inverse, #fff);
	}
</style>
