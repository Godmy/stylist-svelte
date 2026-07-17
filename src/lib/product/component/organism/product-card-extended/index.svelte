<script lang="ts">
	import type { RecipeProductCard } from '$stylist/product/interface/recipe/product-card';
	import { createProductCardExtendedState } from '$stylist/product/function/state/product-card-extended/index.svelte';

	let props: RecipeProductCard = $props();
	const state = createProductCardExtendedState(props);
</script>

<div class={state.containerClass}>
	<div class={state.mediaClass}>
		{#if props.image}
			<img src={props.image} alt={props.title} class={state.imageClass} />
		{/if}
		{#if props.badge}
			<span class={state.getBadgeClass()}>
				{props.badge}
			</span>
		{/if}
	</div>

	<div class={state.contentClass}>
		<h3 class={state.titleClass}>{props.title}</h3>

		<div class={state.ratingRowClass}>
			<div class={state.ratingClass}>
				{#each Array(5) as _, index}
					<svg
						class={state.getStarClass(index < Math.floor(props.rating ?? 0))}
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
						/>
					</svg>
				{/each}
			</div>
			<span class={state.reviewCountClass}>({props.reviewCount})</span>
		</div>

		<p class={state.descriptionClass}>{props.description}</p>

		{#if props.features && props.features.length > 0}
			<ul class={state.featureListClass}>
				{#each props.features as feature}
					<li class={state.featureItemClass}>
						<svg
							class={state.checkIconClass}
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
								d="M5 13l4 4L19 7"
							></path>
						</svg>
						<span class={state.featureTextClass}>{feature}</span>
					</li>
				{/each}
			</ul>
		{/if}

		<div class={state.footerClass}>
			<span class={state.priceClass}>{props.currency}${(props.price ?? 0).toFixed(2)}</span>
			<div class={state.actionsClass}>
				<button onclick={props.onAddToCart} class={state.addButtonClass}> Add to Cart </button>
				<button
					onclick={props.onWishlist}
					class={state.wishlistButtonClass}
					aria-label="Add to wishlist"
				>
					<svg
						class={state.wishlistIconClass}
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
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.product-card-extended {
		overflow: hidden;
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.product-card-extended__media {
		position: relative;
	}

	.product-card-extended__image {
		width: 100%;
		height: 14rem;
		object-fit: cover;
	}

	.product-card-extended__badge {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		border-radius: 0.25rem;
		padding: 0.25rem 0.625rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}

	.product-card-extended__badge--default {
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.product-card-extended__badge--new {
		background-color: var(--color-primary-100);
		color: var(--color-primary-700);
	}

	.product-card-extended__badge--sale {
		background-color: var(--color-danger-100);
		color: var(--color-danger-700);
	}

	.product-card-extended__badge--featured {
		background-color: var(--color-warning-100);
		color: var(--color-warning-700);
	}

	.product-card-extended__content {
		padding: 1.25rem;
	}

	.product-card-extended__title {
		margin-bottom: 0.25rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.product-card-extended__rating-row {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.product-card-extended__rating {
		display: flex;
	}

	.product-card-extended__star {
		width: 1rem;
		height: 1rem;
	}

	.product-card-extended__star--active {
		fill: var(--color-warning-500, #f59e0b);
	}

	.product-card-extended__star--inactive {
		fill: var(--color-background-tertiary, #d1d5db);
	}

	.product-card-extended__review-count {
		margin-left: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.product-card-extended__description {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.product-card-extended__feature-list {
		margin-bottom: 1rem;
	}

	.product-card-extended__feature-list > * + * {
		margin-top: 0.25rem;
	}

	.product-card-extended__feature-item {
		display: flex;
		align-items: flex-start;
	}

	.product-card-extended__check-icon {
		width: 1rem;
		height: 1rem;
		margin-top: 0.125rem;
		margin-right: 0.5rem;
		color: var(--color-success-500);
	}

	.product-card-extended__feature-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.product-card-extended__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1rem;
	}

	.product-card-extended__price {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.product-card-extended__actions > * + * {
		margin-left: 0.5rem;
	}

	.product-card-extended__button {
		border-radius: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.product-card-extended__button--add {
		background-color: var(--color-primary-500);
		padding: 0.375rem 0.75rem;
		color: var(--color-text-inverse);
	}

	.product-card-extended__button--add:hover {
		background-color: var(--color-primary-600);
	}

	.product-card-extended__button--wishlist {
		border: 1px solid var(--color-border-primary);
		padding: 0.375rem;
	}

	.product-card-extended__button--wishlist:hover {
		background-color: var(--color-background-secondary);
	}

	.product-card-extended__wishlist-icon {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
