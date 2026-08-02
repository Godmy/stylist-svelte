<script lang="ts">
	import createWbdQuestionImportPanelState from '$stylist/wbd/function/state/question-import-panel/index.svelte';
	import type { RecipeWbdQuestionImportPanel } from '$stylist/wbd/interface/recipe/question-import-panel';

	let props: RecipeWbdQuestionImportPanel = $props();
	const state = createWbdQuestionImportPanelState(props);
</script>

<section class="wbd-question-import {state.className}">
	<header>
		<span>Import questions</span>
		<strong>{state.parsedQuestions.length} parsed</strong>
	</header>
	<textarea rows="8" bind:value={state.draft} placeholder="One question per line"></textarea>
	<button type="button" disabled={state.parsedQuestions.length === 0} onclick={state.importQuestions}>
		Import questions
	</button>
</section>

<style>
	.wbd-question-import {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-question-import header {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-question-import textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0.625rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-question-import button {
		align-self: flex-end;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-primary-500, #3b82f6);
		border-radius: 0.375rem;
		background: var(--color-primary-500, #3b82f6);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text-inverse, #fff);
		cursor: pointer;
	}
	.wbd-question-import button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
