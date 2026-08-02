<script lang="ts">
	import createWbdExpertAnswerCardState from '$stylist/wbd/function/state/expert-answer-card/index.svelte';
	import type { RecipeWbdExpertAnswerCard } from '$stylist/wbd/interface/recipe/expert-answer-card';

	let props: RecipeWbdExpertAnswerCard = $props();
	const model = createWbdExpertAnswerCardState(props);
	let draft = $state({
		questionId: props.question.id,
		optimistic: props.answer?.optimistic,
		realistic: props.answer?.realistic,
		pessimistic: props.answer?.pessimistic,
		rationale: props.answer?.rationale ?? '',
		confidence: props.answer?.confidence,
		submitted: props.answer?.submitted
	});

	$effect(() => {
		draft = {
			questionId: model.question.id,
			optimistic: model.answer?.optimistic,
			realistic: model.answer?.realistic,
			pessimistic: model.answer?.pessimistic,
			rationale: model.answer?.rationale ?? '',
			confidence: model.answer?.confidence,
			submitted: model.answer?.submitted
		};
	});
</script>

<article class="wbd-answer-card {model.className}">
	<header>
		<div>
			<span>{model.question.category ?? 'General'}</span>
			<h2>{model.question.text}</h2>
		</div>
		{#if model.question.required}
			<strong>Required</strong>
		{/if}
	</header>
	<div class="wbd-answer-card__inputs">
		<label>
			<span>Optimistic</span>
			<input type="number" bind:value={draft.optimistic} />
		</label>
		<label>
			<span>Realistic</span>
			<input type="number" bind:value={draft.realistic} />
		</label>
		<label>
			<span>Pessimistic</span>
			<input type="number" bind:value={draft.pessimistic} />
		</label>
		<label>
			<span>Confidence</span>
			<input type="number" min="1" max="5" bind:value={draft.confidence} />
		</label>
	</div>
	<label class="wbd-answer-card__rationale">
		<span>Rationale</span>
		<textarea rows="4" bind:value={draft.rationale}></textarea>
	</label>
	<div class="wbd-answer-card__actions">
		<button type="button" onclick={() => model.saveAnswer(draft)}>Save draft</button>
		<button type="button" class="wbd-answer-card__submit" onclick={() => model.submitAnswer(draft)}>
			Submit
		</button>
	</div>
</article>

<style>
	.wbd-answer-card {
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}
	.wbd-answer-card header {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.wbd-answer-card header span,
	.wbd-answer-card label span {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-answer-card h2 {
		margin: 0.25rem 0 0;
		font-size: 1rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-answer-card header strong {
		align-self: flex-start;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.6875rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-answer-card__inputs {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.75rem;
	}
	.wbd-answer-card label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.wbd-answer-card input,
	.wbd-answer-card textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-answer-card__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
	.wbd-answer-card__actions button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-answer-card__submit {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-500, #3b82f6) !important;
		color: var(--color-text-inverse, #fff) !important;
	}
	@media (max-width: 760px) {
		.wbd-answer-card__inputs {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 480px) {
		.wbd-answer-card__inputs {
			grid-template-columns: 1fr;
		}
	}
</style>
