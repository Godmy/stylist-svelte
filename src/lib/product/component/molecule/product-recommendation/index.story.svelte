<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductRecommendation from './index.svelte';

	let selectedProduct = $state('none');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Recommended for You' }
	];

	const sampleProducts = [
		{
			id: '1',
			title: 'Wireless Headphones',
			price: 199.99,
			currency: '$',
			image: 'https://via.placeholder.com/200x150/3B82F6/FFFFFF?text=Headphones',
			rating: 4.5
		},
		{
			id: '2',
			title: 'Smart Watch',
			price: 249.99,
			currency: '$',
			image: 'https://via.placeholder.com/200x150/10B981/FFFFFF?text=Watch',
			rating: 4.2
		},
		{
			id: '3',
			title: 'Bluetooth Speaker',
			price: 89.99,
			currency: '$',
			image: 'https://via.placeholder.com/200x150/F59E0B/FFFFFF?text=Speaker',
			rating: 4.7
		}
	];
</script>

<Story
	id="molecules-product-recommendation"
	title="ProductRecommendation"
	component={ProductRecommendation}
	category="Molecules"
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProductRecommendation
				products={sampleProducts}
				title={values.title}
				onProductClick={(id: string) => (selectedProduct = id)}
			/>
			<p class="_c2">
				Clicked product id: {selectedProduct}
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
