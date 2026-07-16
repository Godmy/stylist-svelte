<script lang="ts">
	import type { RecipeProductCard } from '$stylist/product/interface/recipe/product-card';
	import { createProductCardState } from '$stylist/product/function/state/product-card/index.svelte';

	let props: RecipeProductCard = $props();
	const state = createProductCardState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	{#if state.image}
		<div class={state.imageContainerClass}>
			<img src={state.image} alt={state.title} class={state.imageClass} />
			{#if state.badge}
				<span class={state.badgeClass}>{state.badge}</span>
			{/if}
		</div>
	{/if}

	<div class={state.contentClass}>
		<div class="product-card__header">
			<h3 class={state.titleClass}>{state.title}</h3>
		</div>

		{#if state.rating > 0}
			<div class="product-card__rating-container">
				<div class="product-card__stars-container">
					{#each Array(5) as _, i}
						<svg
							class={state.getStarClass(i < Math.floor(state.rating))}
							viewBox="0 0 24 24"
							fill={i < Math.floor(state.rating) ? 'currentColor' : 'none'}
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path
								d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
							/>
						</svg>
					{/each}
				</div>
				{#if state.variant !== 'compact' && state.reviewCount > 0}
					<span class="product-card__review-count">({state.reviewCount})</span>
				{/if}
			</div>
		{/if}

		{#if state.variant !== 'compact' && state.description}
			<p class={state.descriptionClass}>{state.description}</p>
		{/if}

		<div class={state.priceContainerClass}>
			<span class={state.priceClass}>{state.currency}{state.price.toFixed(2)}</span>

			{#if (state.variant === 'detailed' || state.variant === 'screen') && props.actions}
				<div class={state.actionsContainerClass}>
					{@render props.actions()}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.product-card {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.product-card__image-container {
		position: relative;
	}

	.product-card__image {
		display: block;
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}

	.product-card__badge {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		border-radius: 9999px;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.product-card__badge--sale {
		background-color: var(--color-danger-100);
		color: var(--color-danger-800);
	}

	.product-card__badge--new {
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.product-card__badge--popular {
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}

	.product-card__badge--default {
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.product-card__content {
		padding: 1rem;
	}

	.product-card__header {
		margin-bottom: 0.5rem;
	}

	.product-card__title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-card__rating-container {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.product-card__stars-container {
		display: flex;
		color: var(--color-warning-500);
	}

	.product-card__star {
		width: 1rem;
		height: 1rem;
		color: var(--color-border-primary);
	}

	.product-card__star--filled {
		color: var(--color-warning-500);
	}

	.product-card__review-count {
		margin-left: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.product-card__description {
		margin: 0.5rem 0 0;
		color: var(--color-text-secondary);
	}

	.product-card__price-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 0.75rem;
	}

	.product-card__price {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-card__actions-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-left: 0.75rem;
	}
</style>
