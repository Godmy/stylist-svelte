<script lang="ts">
	import createWbdExpertQuestionNavigatorState from '$stylist/wbd/function/state/expert-question-navigator/index.svelte';
	import type { RecipeWbdExpertQuestionNavigator } from '$stylist/wbd/interface/recipe/expert-question-navigator';

	let props: RecipeWbdExpertQuestionNavigator = $props();
	const state = createWbdExpertQuestionNavigatorState(props);
</script>

<nav class="wbd-question-nav {state.className}" aria-label="Questions">
	<div class="wbd-question-nav__header">
		<span>Questions</span>
		<span>{state.answeredCount}/{state.totalCount}</span>
	</div>
	<div class="wbd-question-nav__items">
		{#each state.questions as question (question.id)}
			<button
				type="button"
				class:wbd-question-nav__item--active={question.id === state.currentQuestionId}
				class:wbd-question-nav__item--done={state.isSubmitted(question.id)}
				onclick={() => state.selectQuestion(question.id)}
			>
				<span>{question.orderIndex + 1}</span>
				<strong>{question.text}</strong>
			</button>
		{/each}
	</div>
</nav>

<style>
	.wbd-question-nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-question-nav__header {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-question-nav__items {
		display: grid;
		gap: 0.375rem;
	}
	.wbd-question-nav__items button {
		display: grid;
		grid-template-columns: 1.5rem minmax(0, 1fr);
		gap: 0.5rem;
		align-items: start;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		text-align: left;
		cursor: pointer;
	}
	.wbd-question-nav__items button span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-question-nav__items button strong {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		font-size: 0.8125rem;
		line-height: 1.35;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-question-nav__item--active {
		border-color: var(--color-primary-500, #3b82f6) !important;
	}
	.wbd-question-nav__item--done span {
		background: var(--color-success-100, #dcfce7) !important;
		color: var(--color-success-700, #15803d) !important;
	}
</style>
