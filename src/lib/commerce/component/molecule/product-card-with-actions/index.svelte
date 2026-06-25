<script lang="ts">
	import ProductCard from '$stylist/commerce/component/molecule/product-card/index.svelte';
	import createProductCardWithActionsState from '$stylist/commerce/function/state/product-card-with-actions/createproductcardwithactionsstate/index.svelte';
	import type { ProductCardWithActionsProps } from '$stylist/commerce/interface/recipe/product-card-with-actions-props';

	let props: ProductCardWithActionsProps = $props();
	const state = createProductCardWithActionsState(props);
</script>

<ProductCard
	variant="screen"
	title={props.title}
	price={props.price}
	currency={props.currency}
	image={props.image}
	rating={props.rating}
	reviewCount={props.reviewCount}
	description={props.description}
	actions={props.actions}
	class={props.class}
/>

<style>
	.product-card-with-actions {
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		overflow: hidden;
	}

	.product-card-with-actions__image {
		height: 12rem;
		width: 100%;
		object-fit: cover;
	}

	.product-card-with-actions__content {
		padding: 1rem;
	}

	.product-card-with-actions__title {
		margin-bottom: 0.25rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-card-with-actions__rating-container {
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
	}

	.product-card-with-actions__stars-container {
		display: flex;
		color: var(--color-warning-500);
	}

	.product-card-with-actions__star {
		height: 1rem;
		width: 1rem;
	}
	.product-card-with-actions__star {
		/* TODO: migrate вЂ” some external refs inlined, verify */
	}

	.product-card-with-actions__review-count {
		margin-left: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.product-card-with-actions__description {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.product-card-with-actions__price-actions-container {
		margin-top: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.product-card-with-actions__price {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-card-with-actions__actions-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
