<script lang="ts">
	import type { RecipeComparisonCard } from '$stylist/product/interface/recipe/comparison-card';
	import { createComparisonCardState } from '$stylist/product/function/state/comparison-card/index.svelte';

	let props: RecipeComparisonCard = $props();
	const state = createComparisonCardState(props);
</script>

<div class={state.containerClass}>
	<div class="comparison-card__header">
		<h2 class="comparison-card__title">{props.title ?? 'Before vs After'}</h2>
	</div>

	<div class="comparison-card__comparison-container">
		<div class="comparison-card__section">
			<h3 class="comparison-card__before-title">{props.before.title}</h3>
			<div class="comparison-card__comparison-list">
				{#each props.before.items as item}
					<div class="comparison-card__comparison-item">
						<span class="comparison-card__comparison-label">{item.label}</span>
						<span class="comparison-card__comparison-value">{item.value}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="comparison-card__section">
			<h3 class="comparison-card__after-title">{props.after.title}</h3>
			<div class="comparison-card__comparison-list">
				{#each props.after.items as item}
					<div class="comparison-card__comparison-item">
						<span class="comparison-card__comparison-label">{item.label}</span>
						<span class="comparison-card__comparison-value">{item.value}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.comparison-card {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.comparison-card__header {
		border-bottom: 1px solid var(--color-border-secondary);
		padding: 1rem 1.5rem;
	}

	.comparison-card__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.comparison-card__comparison-container {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		.comparison-card__comparison-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.comparison-card__section {
		padding: 1.5rem;
	}

	.comparison-card__before-title,
	.comparison-card__after-title {
		margin-bottom: 1rem;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}

	.comparison-card__before-title {
		color: var(--color-danger-600);
	}

	.comparison-card__after-title {
		color: var(--color-success-600);
	}

	.comparison-card__comparison-list > * + * {
		margin-top: 0.75rem;
	}

	.comparison-card__comparison-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border-tertiary);
		padding: 0.5rem 0;
	}

	.comparison-card__comparison-item:last-child {
		border-bottom: 0;
	}

	.comparison-card__comparison-label,
	.comparison-card__comparison-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}

	.comparison-card__comparison-label {
		color: var(--color-text-secondary);
	}

	.comparison-card__comparison-value {
		color: var(--color-text-primary);
	}
</style>
