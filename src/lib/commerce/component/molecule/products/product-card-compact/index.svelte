<script lang="ts">
	import ProductCard from '../product-card/index.svelte';
	import { createProductCardCompactState } from '$stylist/commerce/function/state/product-card-compact';
	import type { ProductCardCompactProps } from '$stylist/commerce/interface/recipe/product-card-compact-props';

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
