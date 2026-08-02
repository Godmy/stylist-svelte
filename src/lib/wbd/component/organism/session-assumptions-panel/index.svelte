<script lang="ts">
	import createWbdSessionAssumptionsPanelState from '$stylist/wbd/function/state/session-assumptions-panel/index.svelte';
	import type { RecipeWbdSessionAssumptionsPanel } from '$stylist/wbd/interface/recipe/session-assumptions-panel';

	let props: RecipeWbdSessionAssumptionsPanel = $props();
	const state = createWbdSessionAssumptionsPanelState(props);
</script>

<section class="wbd-assumptions {state.className}">
	<header>Assumptions</header>
	{#if state.readonly}
		<p>{state.assumptions}</p>
	{:else}
		<textarea rows="6" value={state.assumptions} oninput={(event) => state.updateAssumptions(event.currentTarget.value)}></textarea>
	{/if}
</section>

<style>
	.wbd-assumptions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-assumptions header {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-assumptions p,
	.wbd-assumptions textarea {
		margin: 0;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-assumptions textarea {
		box-sizing: border-box;
		width: 100%;
		resize: vertical;
	}
</style>
