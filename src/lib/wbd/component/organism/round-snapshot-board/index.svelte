<script lang="ts">
	import createWbdRoundSnapshotBoardState from '$stylist/wbd/function/state/round-snapshot-board/index.svelte';
	import type { RecipeWbdRoundSnapshotBoard } from '$stylist/wbd/interface/recipe/round-snapshot-board';

	let props: RecipeWbdRoundSnapshotBoard = $props();
	const state = createWbdRoundSnapshotBoardState(props);
</script>

<div class="wbd-round-snapshots {state.className}">
	{#each state.snapshots as snapshot (snapshot.id)}
		<article class="wbd-round-snapshots__item">
			<div class="wbd-round-snapshots__title">
				<strong>{state.questionLabels[snapshot.questionId] ?? snapshot.questionId}</strong>
				<span>R{snapshot.roundNumber} · {snapshot.countResponses} responses</span>
			</div>
			<div class="wbd-round-snapshots__metrics">
				<span>Median <b>{snapshot.median ?? '-'}</b></span>
				<span>Q1 <b>{snapshot.q1 ?? '-'}</b></span>
				<span>Q3 <b>{snapshot.q3 ?? '-'}</b></span>
				<span>Min <b>{snapshot.minValue ?? '-'}</b></span>
				<span>Max <b>{snapshot.maxValue ?? '-'}</b></span>
			</div>
			{#if snapshot.consensusLevel}
				<span class="wbd-round-snapshots__consensus">{snapshot.consensusLevel} consensus</span>
			{/if}
		</article>
	{/each}
</div>

<style>
	.wbd-round-snapshots {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		gap: 0.75rem;
	}
	.wbd-round-snapshots__item {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-round-snapshots__title {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.wbd-round-snapshots__title strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-round-snapshots__title span,
	.wbd-round-snapshots__metrics span,
	.wbd-round-snapshots__consensus {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-round-snapshots__metrics {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 0.375rem;
	}
	.wbd-round-snapshots__metrics span {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}
	.wbd-round-snapshots__metrics b {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-round-snapshots__consensus {
		align-self: flex-start;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-weight: 600;
	}
</style>
