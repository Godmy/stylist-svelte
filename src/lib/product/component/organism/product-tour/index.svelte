<script lang="ts">
	import type { RecipeProductTour } from '$stylist/product/interface/recipe/product-tour';
	import { createProductTourState } from '$stylist/product/function/state/product-tour/index.svelte';

	let props: RecipeProductTour = $props();
	const state = createProductTourState(props);
</script>

{#if state.showTour && props.steps.length > 0}
	<div class={state.overlayClass}>
		<div class={state.panelClass}>
			<button
				onclick={() => state.closeTour()}
				aria-label="Close tour"
				class={state.closeButtonClass}
			>
				<svg
					class={state.closeIconClass}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<h3 class={state.titleClass}>{props.steps[state.currentStep].title}</h3>
			<p class={state.contentClass}>{props.steps[state.currentStep].content}</p>

			<div class={state.footerClass}>
				<span class={state.stepClass}>
					Step {state.currentStep + 1} of {props.steps.length}
				</span>
				<div class={state.actionsClass}>
					{#if state.currentStep > 0}
						<button onclick={() => state.prevStep()} class={state.previousButtonClass}>
							Previous
						</button>
					{/if}
					<button onclick={() => state.nextStep()} class={state.nextButtonClass}>
						{state.currentStep < props.steps.length - 1 ? 'Next' : 'Finish'}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.product-tour__overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-index-overlay);
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(17 24 39 / 0.5);
		padding: 1rem;
	}

	.product-tour__panel {
		position: relative;
		width: 100%;
		max-width: 28rem;
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow:
			0 20px 25px -5px rgb(0 0 0 / 0.1),
			0 8px 10px -6px rgb(0 0 0 / 0.1);
	}

	.product-tour__close {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		color: var(--color-text-secondary);
	}

	.product-tour__close:hover {
		color: var(--color-text-primary);
	}

	.product-tour__close-icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	.product-tour__title {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.product-tour__content {
		margin-bottom: 1rem;
		color: var(--color-text-primary);
	}

	.product-tour__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.product-tour__step {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.product-tour__actions > * + * {
		margin-left: 0.5rem;
	}

	.product-tour__button {
		border-radius: 0.25rem;
		padding: 0.25rem 0.75rem;
	}

	.product-tour__button--previous {
		border: 1px solid var(--color-border-primary);
	}

	.product-tour__button--previous:hover {
		background-color: var(--color-background-secondary);
	}

	.product-tour__button--next {
		background-color: var(--color-primary-500);
		padding-right: 1rem;
		padding-left: 1rem;
		color: var(--color-text-inverse);
	}

	.product-tour__button--next:hover {
		background-color: var(--color-primary-600);
	}
</style>
