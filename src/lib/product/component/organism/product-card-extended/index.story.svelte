<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ProductCardExtended from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'title', type: 'text', defaultValue: 'Premium Wireless Headphones' },
			{ name: 'price', type: 'number', defaultValue: 299.99 },
			{ name: 'currency', type: 'text', defaultValue: '$' },
			{ name: 'rating', type: 'number', defaultValue: 4.7 },
			{ name: 'reviewCount', type: 'number', defaultValue: 342 },
			{ name: 'badge', type: 'text', defaultValue: 'Sale' }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: InterfaceControllerSettings[];
	}>();

	function parseFeatures(featuresString: string): string[] {
		return featuresString
			.split(',')
			.map((f) => f.trim())
			.filter((f) => f.length > 0);
	}

	// Sample product data
	const sampleProduct = {
		title: 'Premium Wireless Headphones',
		price: 299.99,
		currency: '$',
		image: 'https://via.placeholder.com/400x300?text=Headphones',
		rating: 4.7,
		reviewCount: 342,
		description:
			'Experience crystal clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
		features: parseFeatures(
			'Active Noise Cancellation,30-hour battery life,Bluetooth 5.0,Memory foam ear cushions'
		),
		badge: 'Sale'
	};
</script>

<Story {id} {title} {description} component={ProductCardExtended} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-product-card-extended _c1">
			<div class="_c2">
				<p class="_c3">Primary Product Card Extended Example</p>
				<p class="_c4">Interactive product card with detailed information and actions.</p>

				<div class="_c5">
					<ProductCardExtended
						{...sampleProduct}
						title={values.title}
						price={values.price}
						currency={values.currency}
						rating={values.rating}
						reviewCount={values.reviewCount}
						badge={values.badge}
						onAddToCart={() => console.log('Add to Cart clicked')}
						onWishlist={() => console.log('Add to Wishlist clicked')}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Product Card Variations</h3>
				<p class="_c8">Different product card configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Featured Product</p>
						<div>
							<ProductCardExtended
								{...sampleProduct}
								badge="Featured"
								onAddToCart={() => console.log('Add to Cart clicked')}
								onWishlist={() => console.log('Add to Wishlist clicked')}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">New Arrival</p>
						<div>
							<ProductCardExtended
								{...sampleProduct}
								badge="New"
								onAddToCart={() => console.log('Add to Cart clicked')}
								onWishlist={() => console.log('Add to Wishlist clicked')}
							/>
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
