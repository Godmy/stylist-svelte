<script lang="ts">
	import createWbdQuestionConsensusMatrixState from '$stylist/wbd/function/state/question-consensus-matrix/index.svelte';
	import type { RecipeWbdQuestionConsensusMatrix } from '$stylist/wbd/interface/recipe/question-consensus-matrix';

	let props: RecipeWbdQuestionConsensusMatrix = $props();
	const state = createWbdQuestionConsensusMatrixState(props);
</script>

<div class="wbd-consensus-matrix {state.className}">
	<div class="wbd-consensus-matrix__head" style={`grid-template-columns: ${state.gridTemplateColumns};`}>
		<span>Question</span>
		{#each state.rounds as round}
			<span>R{round}</span>
		{/each}
	</div>
	{#each state.questions as question (question.id)}
		<div class="wbd-consensus-matrix__row" style={`grid-template-columns: ${state.gridTemplateColumns};`}>
			<strong>{question.text}</strong>
			{#each state.rounds as round}
				{@const cell = state.cellFor(question.id, round)}
				<span data-level={cell?.consensusLevel ?? 'none'}>{cell?.consensusLevel ?? '-'}</span>
			{/each}
		</div>
	{/each}
</div>

<style>
	.wbd-consensus-matrix {
		display: grid;
		gap: 0.375rem;
		overflow-x: auto;
	}
	.wbd-consensus-matrix__head,
	.wbd-consensus-matrix__row {
		display: grid;
		gap: 0.375rem;
		align-items: center;
	}
	.wbd-consensus-matrix__head span {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-consensus-matrix__row strong,
	.wbd-consensus-matrix__row span {
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.75rem;
	}
	.wbd-consensus-matrix__row strong {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-consensus-matrix__row span {
		text-align: center;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-consensus-matrix__row span[data-level='high'] {
		background: var(--color-success-50, #f0fdf4);
	}
	.wbd-consensus-matrix__row span[data-level='low'] {
		background: var(--color-danger-50, #fef2f2);
	}
</style>
