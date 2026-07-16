<script lang="ts">
	import type { RecipeProductCatalog } from '$stylist/product/interface/recipe/product-catalog';
	import { createProductCatalogState } from '$stylist/product/function/state/product-catalog/index.svelte';

	let props: RecipeProductCatalog = $props();
	const state = createProductCatalogState(props);
</script>

<div class={state.containerClass}>
	<div class={state.contentClass}>
		{#each props.products as product}
			{#if state.isGridLayout()}
				<div class={state.getGridItemClass()}>
					{#if product.image}
						<img src={product.image} alt={product.title} class={state.imageClass} />
					{/if}
					<div class={state.contentBodyClass}>
						<h3 class={state.titleClass}>{product.title}</h3>
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
			{:else}
				<div class={state.getListItemClass()}>
					{#if product.image}
						<img src={product.image} alt={product.title} class={state.listImageClass} />
					{/if}
					<div class={state.contentBodyClass}>
						<h3 class={state.titleClass}>{product.title}</h3>
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
			{/if}
		{/each}
	</div>
</div>

<style>
	.product-catalog {
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.product-catalog__content {
		padding: 1.5rem;
	}

	.product-catalog__content--grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		.product-catalog__content--grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.product-catalog__content--grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.product-catalog__content--list {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.product-catalog__item--grid {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}

	.product-catalog__item--list {
		display: flex;
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1rem 0;
	}

	.product-catalog__item--list:last-child {
		border-bottom: 0;
	}

	.product-catalog__image {
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}

	.product-catalog__image--list {
		width: 6rem;
		height: 6rem;
		margin-right: 1rem;
		border-radius: 0.25rem;
	}

	.product-catalog__body {
		flex: 1 1 0%;
		padding: 1rem;
	}

	.product-catalog__item--list .product-catalog__body {
		padding: 0;
	}

	.product-catalog__title,
	.product-catalog__price {
		font-weight: 700;
	}

	.product-catalog__rating-row {
		display: flex;
		align-items: center;
		margin-top: 0.25rem;
	}

	.product-catalog__rating {
		display: flex;
	}

	.product-catalog__star {
		width: 1rem;
		height: 1rem;
	}

	.product-catalog__star--active {
		fill: var(--color-warning-500, #f59e0b);
	}

	.product-catalog__star--inactive {
		fill: var(--color-background-tertiary, #d1d5db);
	}

	.product-catalog__price-row {
		margin-top: 0.5rem;
	}
</style>
