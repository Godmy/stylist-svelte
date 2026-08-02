<script lang="ts">
	import createWbdErrorStatePanelState from '$stylist/wbd/function/state/error-state-panel/index.svelte';
	import type { RecipeWbdErrorStatePanel } from '$stylist/wbd/interface/recipe/error-state-panel';

	let props: RecipeWbdErrorStatePanel = $props();
	const state = createWbdErrorStatePanelState(props);
</script>

<section class="wbd-error-panel {state.className}">
	<div>
		<strong>{state.title}</strong>
		{#if state.description}
			<p>{state.description}</p>
		{/if}
	</div>
	<button type="button" onclick={state.retry}>{state.retryLabel}</button>
</section>

<style>
	.wbd-error-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-danger-200, #fecaca);
		border-radius: 0.5rem;
		background: var(--color-danger-50, #fef2f2);
	}
	.wbd-error-panel strong {
		font-size: 0.875rem;
		color: var(--color-danger-700, #b91c1c);
	}
	.wbd-error-panel p {
		margin: 0.125rem 0 0;
		font-size: 0.75rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-error-panel button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-danger-600, #dc2626);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-danger-700, #b91c1c);
		cursor: pointer;
	}
</style>
