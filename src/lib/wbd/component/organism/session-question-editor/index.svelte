<script lang="ts">
	import createWbdSessionQuestionEditorState from '$stylist/wbd/function/state/session-question-editor/index.svelte';
	import type { RecipeWbdSessionQuestionEditor } from '$stylist/wbd/interface/recipe/session-question-editor';

	let props: RecipeWbdSessionQuestionEditor = $props();
	const state = createWbdSessionQuestionEditorState(props);
</script>

<section class="wbd-question-editor {state.className}">
	<div class="wbd-question-editor__list">
		<div class="wbd-question-editor__list-header">
			<span>Questions</span>
			<button type="button" onclick={state.createQuestion}>Add</button>
		</div>
		{#each state.questions as question (question.id)}
			<button
				type="button"
				class="wbd-question-editor__list-item"
				class:wbd-question-editor__list-item--selected={question.id === state.selectedQuestion?.id}
				onclick={() => state.selectQuestion(question.id)}
			>
				<span>{question.orderIndex + 1}. {question.text}</span>
				<small>{question.category ?? 'General'}</small>
			</button>
		{/each}
	</div>

	{#if state.selectedQuestion}
		<form class="wbd-question-editor__form" onsubmit={(event) => event.preventDefault()}>
			<label>
				<span>Question</span>
				<textarea
					rows="4"
					value={state.selectedQuestion.text}
					oninput={(event) =>
						state.updateQuestion({
							...state.selectedQuestion,
							text: event.currentTarget.value
						})}
				></textarea>
			</label>
			<div class="wbd-question-editor__grid">
				<label>
					<span>Category</span>
					<input
						value={state.selectedQuestion.category ?? ''}
						oninput={(event) =>
							state.updateQuestion({
								...state.selectedQuestion,
								category: event.currentTarget.value
							})}
					/>
				</label>
				<label>
					<span>Type</span>
					<select
						value={state.selectedQuestion.type}
						onchange={(event) =>
							state.updateQuestion({
								...state.selectedQuestion,
								type: event.currentTarget.value as 'numeric' | 'percentage' | 'boolean'
							})}
					>
						<option value="numeric">numeric</option>
						<option value="percentage">percentage</option>
						<option value="boolean">boolean</option>
					</select>
				</label>
				<label>
					<span>Unit</span>
					<input
						value={state.selectedQuestion.unit ?? ''}
						oninput={(event) =>
							state.updateQuestion({
								...state.selectedQuestion,
								unit: event.currentTarget.value
							})}
					/>
				</label>
				<label>
					<span>Min</span>
					<input
						type="number"
						value={state.selectedQuestion.minValue ?? ''}
						oninput={(event) =>
							state.updateQuestion({
								...state.selectedQuestion,
								minValue: event.currentTarget.value === '' ? undefined : event.currentTarget.valueAsNumber
							})}
					/>
				</label>
				<label>
					<span>Max</span>
					<input
						type="number"
						value={state.selectedQuestion.maxValue ?? ''}
						oninput={(event) =>
							state.updateQuestion({
								...state.selectedQuestion,
								maxValue: event.currentTarget.value === '' ? undefined : event.currentTarget.valueAsNumber
							})}
					/>
				</label>
				<label class="wbd-question-editor__checkbox">
					<input
						type="checkbox"
						checked={state.selectedQuestion.required ?? true}
						onchange={(event) =>
							state.updateQuestion({
								...state.selectedQuestion,
								required: event.currentTarget.checked
							})}
					/>
					<span>Required</span>
				</label>
			</div>
			<button
				type="button"
				class="wbd-question-editor__delete"
				onclick={() => state.deleteQuestion(state.selectedQuestion.id)}
			>
				Delete question
			</button>
		</form>
	{/if}
</section>

<style>
	.wbd-question-editor {
		display: grid;
		grid-template-columns: minmax(14rem, 18rem) 1fr;
		gap: 1rem;
	}
	.wbd-question-editor__list,
	.wbd-question-editor__form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-question-editor__list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-question-editor__list-header button,
	.wbd-question-editor__delete {
		padding: 0.375rem 0.625rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-question-editor__list-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.625rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		text-align: left;
		cursor: pointer;
	}
	.wbd-question-editor__list-item--selected {
		border-color: var(--color-primary-500, #3b82f6);
	}
	.wbd-question-editor__list-item span {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-question-editor__list-item small {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-question-editor__form label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-question-editor__form input,
	.wbd-question-editor__form select,
	.wbd-question-editor__form textarea {
		width: 100%;
		box-sizing: border-box;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		font-weight: 400;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-question-editor__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
	.wbd-question-editor__checkbox {
		flex-direction: row !important;
		align-items: center;
	}
	.wbd-question-editor__checkbox input {
		width: auto;
	}
	.wbd-question-editor__delete {
		align-self: flex-start;
		color: var(--color-danger-600, #dc2626);
	}
	@media (max-width: 760px) {
		.wbd-question-editor {
			grid-template-columns: 1fr;
		}
		.wbd-question-editor__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
