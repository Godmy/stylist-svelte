<script lang="ts">
	import createWbdExpertQuestionnaireState from '$stylist/wbd/function/state/expert-questionnaire/index.svelte';
	import type { RecipeWbdExpertQuestionnaire } from '$stylist/wbd/interface/recipe/expert-questionnaire';

	let props: RecipeWbdExpertQuestionnaire = $props();
	const model = createWbdExpertQuestionnaireState(props);
	let draft = $state({
		questionId: '',
		optimistic: undefined as number | undefined,
		realistic: undefined as number | undefined,
		pessimistic: undefined as number | undefined,
		rationale: '',
		confidence: undefined as number | undefined
	});

	$effect(() => {
		const question = model.currentQuestion;
		if (!question) return;
		const answer = model.answerFor(question.id);
		draft = {
			questionId: question.id,
			optimistic: answer?.optimistic,
			realistic: answer?.realistic,
			pessimistic: answer?.pessimistic,
			rationale: answer?.rationale ?? '',
			confidence: answer?.confidence
		};
	});
</script>

<section class="wbd-expert-questionnaire {model.className}">
	<div class="wbd-expert-questionnaire__header">
		<span>{model.submittedCount}/{model.totalCount} submitted</span>
	</div>

	{#if model.currentQuestion}
		<article class="wbd-expert-questionnaire__question">
			<div class="wbd-expert-questionnaire__context">
				<span>{model.currentQuestion.category ?? 'General'}</span>
				<span>{model.currentQuestion.type}{model.currentQuestion.unit ? ` · ${model.currentQuestion.unit}` : ''}</span>
			</div>
			<h2>{model.currentQuestion.text}</h2>
			{#if model.currentQuestion.minValue !== undefined || model.currentQuestion.maxValue !== undefined}
				<p>
					Range: {model.currentQuestion.minValue ?? 'any'} to {model.currentQuestion.maxValue ?? 'any'}
				</p>
			{/if}
		</article>

		<form class="wbd-expert-questionnaire__form" onsubmit={(event) => event.preventDefault()}>
			<div class="wbd-expert-questionnaire__numbers">
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
			</div>
			<label>
				<span>Confidence</span>
				<input type="number" min="1" max="5" bind:value={draft.confidence} />
			</label>
			<label>
				<span>Rationale</span>
				<textarea rows="4" bind:value={draft.rationale}></textarea>
			</label>
			<div class="wbd-expert-questionnaire__actions">
				<button type="button" onclick={() => model.saveAnswer(draft)}>Save draft</button>
				<button type="button" class="wbd-expert-questionnaire__submit" onclick={() => model.submitAnswer(draft)}>
					Submit answer
				</button>
			</div>
		</form>
	{/if}
</section>

<style>
	.wbd-expert-questionnaire {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.wbd-expert-questionnaire__header {
		display: flex;
		justify-content: flex-end;
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-expert-questionnaire__question {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
	.wbd-expert-questionnaire__context {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-expert-questionnaire__question h2,
	.wbd-expert-questionnaire__question p {
		margin: 0;
	}
	.wbd-expert-questionnaire__question h2 {
		font-size: 1.125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-expert-questionnaire__question p {
		font-size: 0.8125rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-expert-questionnaire__form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-expert-questionnaire__numbers {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}
	.wbd-expert-questionnaire__form label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-expert-questionnaire__form input,
	.wbd-expert-questionnaire__form textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		font-weight: 400;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-expert-questionnaire__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
	.wbd-expert-questionnaire__actions button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-expert-questionnaire__submit {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-500, #3b82f6) !important;
		color: var(--color-text-inverse, #fff) !important;
	}
	@media (max-width: 640px) {
		.wbd-expert-questionnaire__numbers {
			grid-template-columns: 1fr;
		}
	}
</style>
