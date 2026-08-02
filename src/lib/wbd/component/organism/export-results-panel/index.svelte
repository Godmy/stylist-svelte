<script lang="ts">
	import createWbdExportResultsPanelState from '$stylist/wbd/function/state/export-results-panel/index.svelte';
	import type { RecipeWbdExportResultsPanel } from '$stylist/wbd/interface/recipe/export-results-panel';

	let props: RecipeWbdExportResultsPanel = $props();
	const state = createWbdExportResultsPanelState(props);
</script>

<section class="wbd-export-panel {state.className}">
	<header>
		<span>Export results</span>
	</header>
	<div class="wbd-export-panel__options">
		{#each state.options as option (option.id)}
			<button type="button" disabled={option.disabled} onclick={() => state.exportOption(option)}>
				<strong>{option.label}</strong>
				{#if option.description}
					<span>{option.description}</span>
				{/if}
			</button>
		{/each}
	</div>
</section>

<style>
	.wbd-export-panel {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-export-panel header span {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-export-panel__options {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		gap: 0.5rem;
	}
	.wbd-export-panel__options button {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-height: 4.5rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		text-align: left;
		cursor: pointer;
	}
	.wbd-export-panel__options strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-export-panel__options span {
		font-size: 0.75rem;
		line-height: 1.35;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-export-panel__options button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
