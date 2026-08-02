<script lang="ts">
	import createWbdEmptyStatePanelState from '$stylist/wbd/function/state/empty-state-panel/index.svelte';
	import type { RecipeWbdEmptyStatePanel } from '$stylist/wbd/interface/recipe/empty-state-panel';

	let props: RecipeWbdEmptyStatePanel = $props();
	const state = createWbdEmptyStatePanelState(props);
</script>

<section class="wbd-empty-panel {state.className}">
	<strong>{state.title}</strong>
	{#if state.description}
		<p>{state.description}</p>
	{/if}
	{#if state.actionLabel}
		<span>{state.actionLabel}</span>
	{/if}
</section>

<style>
	.wbd-empty-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.375rem;
		padding: 1.5rem;
		border: 1px dashed var(--color-border-primary, #cbd5e1);
		border-radius: 0.5rem;
		background: var(--color-background-secondary, #f8fafc);
		text-align: center;
	}
	.wbd-empty-panel strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-empty-panel p,
	.wbd-empty-panel span {
		margin: 0;
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-empty-panel span {
		font-weight: 700;
		color: var(--color-primary-700, #1d4ed8);
	}
</style>
