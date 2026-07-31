<script lang="ts">
	import createEstimateInputRowState from '$stylist/wbd/function/state/estimate-input-row/index.svelte';
	import type { RecipeEstimateInputRow } from '$stylist/wbd/interface/recipe/estimate-input-row';
	import EstimateThreePointInput from '$stylist/wbd/component/atom/estimate-three-point-input/index.svelte';

	let props: RecipeEstimateInputRow = $props();
	const state = createEstimateInputRowState(props);
</script>

<div class="wbd-estimate-input-row {state.className}">
	<div class="wbd-estimate-input-row__task">
		<span class="wbd-estimate-input-row__label">{state.task.label}</span>
		{#if state.task.description}
			<span class="wbd-estimate-input-row__description">{state.task.description}</span>
		{/if}
	</div>
	<EstimateThreePointInput value={state.value} onSubmit={state.handleSubmit} />
	{#if state.submitted}
		<span class="wbd-estimate-input-row__status">Submitted</span>
	{/if}
</div>

<style>
	.wbd-estimate-input-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--color-border-primary, #e2e8f0);
	}
	.wbd-estimate-input-row__task {
		display: flex;
		flex-direction: column;
		min-width: 0;
		flex: 1 1 0%;
	}
	.wbd-estimate-input-row__label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-estimate-input-row__description {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-estimate-input-row__status {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-success-600, #16a34a);
	}
</style>
