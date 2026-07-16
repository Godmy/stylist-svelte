<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductCarousel from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'items', type: 'number', defaultValue: 3, min: 2, max: 5 },
		{ name: 'basePrice', type: 'number', defaultValue: 99, min: 10 },
		{ name: 'currency', type: 'text', defaultValue: '$' }
	];

	function getProducts(count: number, basePrice: number, currency: string) {
		return Array.from({ length: count }, (_, idx) => ({
			title: `Product ${idx + 1}`,
			price: basePrice + idx * 25,
			currency,
			image: `https://placehold.co/220x160?text=Item+${idx + 1}`,
			rating: 3.8 + (idx % 3) * 0.4
		}));
	}
</script>

<Story
	id="molecules-product-carousel"
	title="Molecules / Information / Commerce / Products / ProductCarousel"
	component={ProductCarousel}
	category="Molecules/Information/Commerce/Products"
	description="Swipe-style product carousel with built-in navigation arrows and dots."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<ProductCarousel products={getProducts(args.items, args.basePrice, args.currency)} />
			<p class="_c2">Use arrows or dots to switch slides.</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
