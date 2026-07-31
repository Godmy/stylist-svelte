<script lang="ts">
	import createEstimateThreePointInputState from '$stylist/wbd/function/state/estimate-three-point-input/index.svelte';
	import type { RecipeEstimateThreePointInput } from '$stylist/wbd/interface/recipe/estimate-three-point-input';

	let props: RecipeEstimateThreePointInput = $props();
	const state = createEstimateThreePointInputState(props);
</script>

<div class="wbd-three-point-input {state.className}">
	<label class="wbd-three-point-input__field">
		<span class="wbd-three-point-input__label">O</span>
		<input type="number" min="0" step="0.5" bind:value={state.optimistic} disabled={state.disabled} />
	</label>
	<label class="wbd-three-point-input__field">
		<span class="wbd-three-point-input__label">M</span>
		<input type="number" min="0" step="0.5" bind:value={state.mostLikely} disabled={state.disabled} />
	</label>
	<label class="wbd-three-point-input__field">
		<span class="wbd-three-point-input__label">P</span>
		<input type="number" min="0" step="0.5" bind:value={state.pessimistic} disabled={state.disabled} />
	</label>
	{#if !state.isValid}
		<span class="wbd-three-point-input__error">O &le; M &le; P</span>
	{/if}
</div>

<style>
	.wbd-three-point-input {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.wbd-three-point-input__field {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.wbd-three-point-input__label {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-three-point-input input {
		width: 4rem;
		padding: 0.25rem 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
		background: var(--color-background-primary, #fff);
	}
	.wbd-three-point-input input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500, #3b82f6);
	}
	.wbd-three-point-input__error {
		font-size: 0.75rem;
		color: var(--color-danger-600, #dc2626);
	}
</style>
