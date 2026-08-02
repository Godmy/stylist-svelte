<script lang="ts">
	import createWbdQuestionBulkEditorState from '$stylist/wbd/function/state/question-bulk-editor/index.svelte';
	import type { RecipeWbdQuestionBulkEditor } from '$stylist/wbd/interface/recipe/question-bulk-editor';

	let props: RecipeWbdQuestionBulkEditor = $props();
	const state = createWbdQuestionBulkEditorState(props);
</script>

<div class="wbd-question-bulk {state.className}">
	{#each state.questions as question (question.id)}
		<div class="wbd-question-bulk__row">
			<input
				value={question.text}
				oninput={(event) => state.updateQuestion({ ...question, text: event.currentTarget.value })}
			/>
			<select
				value={question.type}
				onchange={(event) =>
					state.updateQuestion({
						...question,
						type: event.currentTarget.value as 'numeric' | 'percentage' | 'boolean'
					})}
			>
				<option value="numeric">numeric</option>
				<option value="percentage">percentage</option>
				<option value="boolean">boolean</option>
			</select>
			<input
				value={question.unit ?? ''}
				placeholder="unit"
				oninput={(event) => state.updateQuestion({ ...question, unit: event.currentTarget.value })}
			/>
		</div>
	{/each}
</div>

<style>
	.wbd-question-bulk {
		display: grid;
		gap: 0.5rem;
	}
	.wbd-question-bulk__row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 8rem 6rem;
		gap: 0.5rem;
	}
	.wbd-question-bulk input,
	.wbd-question-bulk select {
		box-sizing: border-box;
		min-width: 0;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	@media (max-width: 720px) {
		.wbd-question-bulk__row {
			grid-template-columns: 1fr;
		}
	}
</style>
