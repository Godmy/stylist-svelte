<script lang="ts">
	import createEstimatorBadgeState from '$stylist/wbd/function/state/estimator-badge/index.svelte';
	import type { RecipeEstimatorBadge } from '$stylist/wbd/interface/recipe/estimator-badge';

	let props: RecipeEstimatorBadge = $props();
	const state = createEstimatorBadgeState(props);
</script>

<span class="wbd-estimator-badge wbd-estimator-badge--{state.participant.role} {state.className}">
	<span class="wbd-estimator-badge__initials">{state.initials}</span>
	<span class="wbd-estimator-badge__name">{state.participant.displayName}</span>
</span>

<style>
	.wbd-estimator-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.25rem 0.625rem;
		border-radius: 9999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.75rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-estimator-badge--coordinator {
		background: var(--color-primary-100, #dbeafe);
		color: var(--color-primary-800, #1e40af);
	}
	.wbd-estimator-badge__initials {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background: var(--color-primary-500, #3b82f6);
		color: var(--color-text-inverse, #fff);
		font-size: 0.625rem;
		font-weight: 700;
	}
</style>
