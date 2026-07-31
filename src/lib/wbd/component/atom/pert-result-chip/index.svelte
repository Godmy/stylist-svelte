<script lang="ts">
	import createPertResultChipState from '$stylist/wbd/function/state/pert-result-chip/index.svelte';
	import type { RecipePertResultChip } from '$stylist/wbd/interface/recipe/pert-result-chip';

	let props: RecipePertResultChip = $props();
	const state = createPertResultChipState(props);
</script>

<span class="wbd-pert-chip {state.className}">
	<span class="wbd-pert-chip__expected">{state.expectedLabel}</span>
	<span class="wbd-pert-chip__stddev">{state.stdDevLabel}</span>
</span>

<style>
	.wbd-pert-chip {
		display: inline-flex;
		align-items: baseline;
		gap: 0.375rem;
		padding: 0.25rem 0.625rem;
		border-radius: 0.375rem;
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-pert-chip__expected {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-pert-chip__stddev {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
</style>
