<script lang="ts">
	import createWbdConsensusReviewBoardState from '$stylist/wbd/function/state/consensus-review-board/index.svelte';
	import type { RecipeWbdConsensusReviewBoard } from '$stylist/wbd/interface/recipe/consensus-review-board';

	let props: RecipeWbdConsensusReviewBoard = $props();
	const state = createWbdConsensusReviewBoardState(props);
</script>

<section class="wbd-consensus-board {state.className}">
	{#each state.items as item (item.questionId)}
		<button type="button" class="wbd-consensus-board__item" onclick={() => state.selectQuestion(item.questionId)}>
			<div class="wbd-consensus-board__heading">
				<span>{item.category ?? 'General'}</span>
				<strong>{item.consensusLevel}</strong>
			</div>
			<h3>{item.questionText}</h3>
			<div class="wbd-consensus-board__metrics">
				<span>Median <b>{item.median ?? '-'}</b></span>
				<span>Q1 <b>{item.q1 ?? '-'}</b></span>
				<span>Q3 <b>{item.q3 ?? '-'}</b></span>
				<span>Responses <b>{item.countResponses}</b></span>
			</div>
			{#if item.rationaleCount !== undefined}
				<small>{item.rationaleCount} rationales</small>
			{/if}
		</button>
	{/each}
</section>

<style>
	.wbd-consensus-board {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		gap: 0.75rem;
	}
	.wbd-consensus-board__item {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		text-align: left;
		cursor: pointer;
	}
	.wbd-consensus-board__heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.wbd-consensus-board__heading span,
	.wbd-consensus-board__item small {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-consensus-board__heading strong {
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.6875rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-consensus-board__item h3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.4;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-consensus-board__metrics {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.375rem;
	}
	.wbd-consensus-board__metrics span {
		display: flex;
		flex-direction: column;
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-consensus-board__metrics b {
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
</style>
