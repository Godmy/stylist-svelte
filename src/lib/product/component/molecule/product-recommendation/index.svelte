<script lang="ts">
	import type { RecipeProductRecommendation } from '$stylist/product/interface/recipe/product-recommendation';
	import { createProductRecommendationState } from '$stylist/product/function/state/product-recommendation/index.svelte';

	let props: RecipeProductRecommendation = $props();
	const state = createProductRecommendationState(props);
</script>

<div class={state.containerClass}>
	<h2 class={state.titleClass}>{props.title ?? 'Recommended for you'}</h2>
	<div class={state.gridClass}>
		{#each props.products as product}
			<div
				class={state.cardClass}
				onclick={() => props.onProductClick?.(product.id)}
				role="button"
				tabindex="0"
				onkeydown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						props.onProductClick?.(product.id);
					}
				}}
			>
				{#if product.image}
					<img src={product.image} alt={product.title} class={state.imageClass} />
				{/if}
				<div class={state.contentClass}>
					<h3 class={state.productTitleClass}>{product.title}</h3>
					<div class={state.ratingRowClass}>
						<div class={state.ratingClass}>
							{#each Array(5) as _, index}
								<svg
									class={state.getStarClass(index < Math.floor(product.rating))}
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
									/>
								</svg>
							{/each}
						</div>
					</div>
					<div class={state.priceRowClass}>
						<span class={state.priceClass}>{product.currency}{product.price.toFixed(2)}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.product-recommendation__title {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.product-recommendation__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.product-recommendation__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.product-recommendation__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.product-recommendation__card {
		cursor: pointer;
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		transition: box-shadow 150ms ease;
	}

	.product-recommendation__card:hover {
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.product-recommendation__image {
		width: 100%;
		height: 8rem;
		object-fit: cover;
	}

	.product-recommendation__content {
		padding: 0.75rem;
	}

	.product-recommendation__product-title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 500;
	}

	.product-recommendation__rating-row {
		display: flex;
		align-items: center;
		margin-top: 0.25rem;
	}

	.product-recommendation__rating {
		display: flex;
	}

	.product-recommendation__star {
		width: 0.75rem;
		height: 0.75rem;
	}

	.product-recommendation__star--active {
		fill: var(--color-warning-500, #f59e0b);
	}

	.product-recommendation__star--inactive {
		fill: var(--color-background-tertiary, #d1d5db);
	}

	.product-recommendation__price-row {
		margin-top: 0.5rem;
	}

	.product-recommendation__price {
		font-weight: 700;
	}
</style>
