<script lang="ts">
	import type { RecipeProductWishlist } from '$stylist/product/interface/recipe/product-wishlist';
	import { createProductWishlistState } from '$stylist/product/function/state/product-wishlist/index.svelte';

	let props: RecipeProductWishlist = $props();
	const state = createProductWishlistState(props);
</script>

<div class={state.containerClass}>
	<h2 class={state.titleClass}>Wishlist ({props.items.length})</h2>
	{#if props.items.length === 0}
		<div class={state.emptyClass}>Your wishlist is empty</div>
	{:else}
		<div class={state.listClass}>
			{#each props.items as item}
				<div class={state.itemClass}>
					{#if item.image}
						<img src={item.image} alt={item.title} class={state.imageClass} />
					{/if}
					<div class={state.contentClass}>
						<h3 class={state.itemTitleClass}>{item.title}</h3>
						<div class={state.ratingRowClass}>
							<div class={state.ratingClass}>
								{#each Array(5) as _, index}
									<svg
										class={state.getStarClass(index < Math.floor(item.rating))}
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
						<div class={state.priceClass}>{item.currency}{item.price.toFixed(2)}</div>
					</div>
					<div class={state.actionsClass}>
						<button onclick={() => props.onMoveToCart?.(item.id)} class={state.moveButtonClass}>
							Add to Cart
						</button>
						<button onclick={() => props.onRemove?.(item.id)} class={state.removeButtonClass}>
							Remove
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.product-wishlist__title {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.product-wishlist__empty {
		padding: 2rem;
		text-align: center;
		color: var(--color-text-secondary);
	}

	.product-wishlist__list > * + * {
		border-top: 1px solid var(--color-border-primary);
	}

	.product-wishlist__item {
		display: flex;
		padding: 1rem;
	}

	.product-wishlist__image {
		width: 5rem;
		height: 5rem;
		margin-right: 1rem;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	.product-wishlist__content {
		flex: 1 1 0%;
	}

	.product-wishlist__item-title {
		font-weight: 700;
	}

	.product-wishlist__rating-row {
		display: flex;
		align-items: center;
		margin-top: 0.25rem;
	}

	.product-wishlist__rating {
		display: flex;
	}

	.product-wishlist__star {
		width: 1rem;
		height: 1rem;
	}

	.product-wishlist__star--active {
		fill: var(--color-warning-500, #f59e0b);
	}

	.product-wishlist__star--inactive {
		fill: var(--color-background-tertiary, #d1d5db);
	}

	.product-wishlist__price {
		margin-top: 0.5rem;
		font-weight: 700;
	}

	.product-wishlist__actions {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}

	.product-wishlist__actions > * + * {
		margin-top: 0.5rem;
	}

	.product-wishlist__button {
		border-radius: 0.25rem;
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.product-wishlist__button--move {
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}

	.product-wishlist__button--move:hover {
		background-color: var(--color-primary-600);
	}

	.product-wishlist__button--remove {
		border: 1px solid var(--color-border-primary);
	}

	.product-wishlist__button--remove:hover {
		background-color: var(--color-background-secondary);
	}
</style>
