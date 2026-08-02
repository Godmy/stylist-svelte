<script lang="ts">
	import createWbdRoundComparisonPanelState from '$stylist/wbd/function/state/round-comparison-panel/index.svelte';
	import type { RecipeWbdRoundComparisonPanel } from '$stylist/wbd/interface/recipe/round-comparison-panel';

	let props: RecipeWbdRoundComparisonPanel = $props();
	const state = createWbdRoundComparisonPanelState(props);
</script>

<section class="wbd-round-comparison {state.className}">
	<header>R{state.previousRound} to R{state.currentRound}</header>
	<div>
		{#each state.items as item (item.questionId)}
			<article>
				<strong>{item.questionText}</strong>
				<span>{item.previousMedian ?? '-'} -> {item.currentMedian ?? '-'}</span>
				<small>{item.previousConsensus ?? '-'} -> {item.currentConsensus ?? '-'}</small>
			</article>
		{/each}
	</div>
</section>

<style>
	.wbd-round-comparison {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-round-comparison header {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-round-comparison div {
		display: grid;
		gap: 0.5rem;
	}
	.wbd-round-comparison article {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto auto;
		gap: 0.75rem;
		align-items: center;
		padding: 0.625rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
	}
	.wbd-round-comparison strong {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-round-comparison span,
	.wbd-round-comparison small {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	@media (max-width: 720px) {
		.wbd-round-comparison article {
			grid-template-columns: 1fr;
		}
	}
</style>
