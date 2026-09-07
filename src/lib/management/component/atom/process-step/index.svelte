<script lang="ts">
	/**
	 * @component ProcessStep
	 * @description Process step for timeline
	 *
	 * SOLID Principles Applied:
	 * - Single Responsibility: Only handles process step display
	 * - Open/Closed: Extensible through props without modifying source
	 * - Liskov Substitution: Can substitute any process step
	 * - Interface Segregation: Minimal interface via RecipeProcessStep
	 * - Dependency Inversion: Depends on abstractions (props interface)
	 *
	 * Atomic Design: Molecule - Composes atoms into a meaningful process unit
	 */

	import type { RecipeProcessStep } from '$stylist/management/interface/recipe/process-step';
	import { createProcessStepState } from './state.svelte';

	let props: RecipeProcessStep = $props();
	const state = createProcessStepState(props);
</script>

<div class={state.classes}>
	<div class="process-step__number-container">
		{state.number}
	</div>
	<div class="process-step__content-container">
		<h3 class="process-step__title">
			{state.title}
			{#if state.agent}
				<span class="process-step__agent-badge">{state.agent}</span>
			{/if}
		</h3>
		<p class="process-step__description">{state.description}</p>
	</div>
</div>

<style>
	.process-step__base {
		display: flex;
		align-items: flex-start;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}

	.process-step__number-container {
		margin-right: 1rem;
		display: flex;
		height: 2rem;
		width: 2rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 700;
	}

	.process-step__content-container {
		flex: 1 1 0%;
		min-width: 0;
	}

	.process-step__title {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
	}

	.process-step__agent-badge {
		margin-left: 0.5rem;
		display: inline-block;
		border-radius: 0.25rem;
		background-color: var(--color-neutral-100);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.process-step__description {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
