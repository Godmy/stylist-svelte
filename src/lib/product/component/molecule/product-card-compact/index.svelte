<script lang="ts">
	import ProductCard from '$stylist/product/component/molecule/product-card/index.svelte';
	import createProductCardCompactState from '$stylist/product/function/state/product-card-compact/index.svelte';
	import type { ProductCardCompactProps } from '$stylist/product/interface/recipe/product-card-compact-props';

	let props: ProductCardCompactProps = $props();
	const state = createProductCardCompactState(props);
</script>

<ProductCard
	variant="compact"
	title={props.title}
	price={props.price}
	currency={props.currency}
	image={props.image}
	rating={props.rating}
	badge={props.badge}
	class={props.class}
/>

<style>
	.product-card-compact {
		display: flex;
		overflow: hidden;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.product-card-compact__image {
		height: 6rem;
		width: 6rem;
		object-fit: cover;
	}

	.product-card-compact__content {
		flex: 1 1 0%;
		padding: 0.75rem;
	}

	.product-card-compact__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.product-card-compact__title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.product-card-compact__badge {
		position: static;
		padding-left: 0.375rem;
		padding-right: 0.375rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		color: 10px;
	}
	.product-card-compact__badge {
		/* TODO: migrate — some external refs inlined, verify */
	}

	.product-card-compact__sale-badge {
		/* TODO: migrate — external StyleManager ref */
	}

	.product-card-compact__new-badge {
		/* TODO: migrate — external StyleManager ref */
	}

	.product-card-compact__popular-badge {
		/* TODO: migrate — external StyleManager ref */
	}

	.product-card-compact__default-badge {
		/* TODO: migrate — external StyleManager ref */
	}

	.product-card-compact__rating-container {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
	}

	.product-card-compact__stars-container {
		display: flex;
		color: var(--color-warning-500);
	}

	.product-card-compact__star {
		height: 0.75rem;
		width: 0.75rem;
	}
	.product-card-compact__star {
		/* TODO: migrate — some external refs inlined, verify */
	}

	.product-card-compact__price-container {
		margin-top: 0.25rem;
	}

	.product-card-compact__price {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
</style>
