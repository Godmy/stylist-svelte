<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ProductCatalog from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'layout', type: 'select', options: ['grid', 'list'], defaultValue: 'grid' },
			{ name: 'showRating', type: 'boolean', defaultValue: true },
			{ name: 'showPrice', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: InterfaceControllerSettings[];
	}>();

	const sampleProducts = [
		{
			id: '1',
			title: 'Wireless Headphones',
			price: 199.99,
			currency: '$',
			image: 'https://via.placeholder.com/200x200?text=Headphones',
			rating: 4.5
		},
		{
			id: '2',
			title: 'Smart Watch',
			price: 249.99,
			currency: '$',
			image: 'https://via.placeholder.com/200x200?text=Smartwatch',
			rating: 4.2
		},
		{
			id: '3',
			title: 'Bluetooth Speaker',
			price: 89.99,
			currency: '$',
			image: 'https://via.placeholder.com/200x200?text=Speaker',
			rating: 4.0
		}
	];

	function handleProductClick(product: any) {
		console.log('Product clicked:', product.title);
	}

	function handleAddToCart(product: any) {
		console.log('Added to cart:', product.title);
	}
</script>

<Story {id} {title} {description} component={ProductCatalog} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-product-catalog _c1">
			<div class="_c2">
				<p class="_c3">Primary Product Catalog Example</p>
				<p class="_c4">Interactive product catalog with customizable options.</p>

				<div class="_c5">
					<ProductCatalog products={sampleProducts} layout={values.layout} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Product Catalog Variations</h3>
				<p class="_c8">Different product catalog configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">List Layout</p>
						<div>
							<ProductCatalog products={sampleProducts} layout="list" />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Without Rating</p>
						<div>
							<ProductCatalog products={sampleProducts} layout="grid" />
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
