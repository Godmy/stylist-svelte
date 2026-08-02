<script lang="ts">
	import createWbdLoadingStatePanelState from '$stylist/wbd/function/state/loading-state-panel/index.svelte';
	import type { RecipeWbdLoadingStatePanel } from '$stylist/wbd/interface/recipe/loading-state-panel';

	let props: RecipeWbdLoadingStatePanel = $props();
	const state = createWbdLoadingStatePanelState(props);
</script>

<section class="wbd-loading-panel {state.className}" aria-busy="true">
	<span class="wbd-loading-panel__spinner"></span>
	<div>
		<strong>{state.title}</strong>
		{#if state.description}
			<p>{state.description}</p>
		{/if}
	</div>
</section>

<style>
	.wbd-loading-panel {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-loading-panel__spinner {
		width: 1.25rem;
		height: 1.25rem;
		border: 2px solid var(--color-border-primary, #cbd5e1);
		border-top-color: var(--color-primary-500, #3b82f6);
		border-radius: 999px;
		animation: wbd-loading-panel-spin 900ms linear infinite;
	}
	.wbd-loading-panel strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-loading-panel p {
		margin: 0.125rem 0 0;
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	@keyframes wbd-loading-panel-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
