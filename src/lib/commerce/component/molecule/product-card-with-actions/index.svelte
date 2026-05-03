<script lang="ts">
	import ProductCard from '../product-card/index.svelte';
	import { createProductCardWithActionsState } from '$stylist/commerce/function/state/product-card-with-actions';
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
