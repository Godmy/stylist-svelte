<script lang="ts">
	import type { RecipeProductDemo } from '$stylist/product/interface/recipe/product-demo';
	import { createProductDemoState } from '$stylist/product/function/state/product-demo/index.svelte';

	let props: RecipeProductDemo = $props();
	const state = createProductDemoState(props);
</script>

<div class={state.containerClass}>
	<div class={state.layoutClass}>
		<div>
			<h2 class={state.titleClass}>{props.title}</h2>
			<p class={state.descriptionClass}>{props.description}</p>

			<ul class={state.featureListClass}>
				{#each props.features ?? [] as feature}
					<li class={state.featureItemClass}>
						<svg
							class={state.checkIconClass}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							></path>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>

			<button onclick={props.onDemo} class={state.buttonClass}> Try Demo </button>
		</div>

		<div class={state.previewClass}>
			<h3 class={state.previewTitleClass}>Live Demo</h3>
			<div class={state.previewContentClass}>
				{@render props.demoContent()}
			</div>
		</div>
	</div>
</div>

<style>
	.product-demo__layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.product-demo__layout {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.product-demo__title {
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
	}

	.product-demo__description {
		margin-bottom: 1rem;
		color: var(--color-text-primary);
	}

	.product-demo__feature-list {
		margin-bottom: 1.5rem;
	}

	.product-demo__feature-list > * + * {
		margin-top: 0.5rem;
	}

	.product-demo__feature-item {
		display: flex;
		align-items: flex-start;
	}

	.product-demo__check-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-top: 0.125rem;
		margin-right: 0.5rem;
		color: var(--color-success-500);
	}

	.product-demo__button {
		border-radius: 0.5rem;
		background-color: var(--color-primary-500);
		padding: 0.75rem 1.5rem;
		font-weight: 500;
		color: var(--color-text-inverse);
		transition: background-color 150ms ease;
	}

	.product-demo__button:hover {
		background-color: var(--color-primary-600);
	}

	.product-demo__preview {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.product-demo__preview-title {
		margin-bottom: 0.75rem;
		font-weight: 600;
	}

	.product-demo__preview-content {
		min-height: 200px;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
</style>
