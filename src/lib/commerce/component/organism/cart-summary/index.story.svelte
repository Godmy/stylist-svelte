<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import CartSummary from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showItemThumbnails', type: 'boolean', defaultValue: true },
			{ name: 'showDiscounts', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample cart items
	const sampleItems = [
		{
			id: '1',
			name: 'Wireless Headphones',
			price: 129.99,
			quantity: 1,
			originalPrice: 149.99,
			discountPercent: 13,
			thumbnail: 'https://placehold.co/100x100?text=Headphones',
			inStock: true,
			maxQuantity: 5
		},
		{
			id: '2',
			name: 'Smart Watch',
			price: 199.99,
			quantity: 2,
			originalPrice: 249.99,
			discountPercent: 20,
			thumbnail: 'https://placehold.co/100x100?text=Watch',
			inStock: true,
			maxQuantity: 3
		},
		{
			id: '3',
			name: 'Bluetooth Speaker',
			price: 79.99,
			quantity: 1,
			thumbnail: 'https://placehold.co/100x100?text=Speaker',
			inStock: false,
			maxQuantity: 10
		}
	];

	// Sample promotions
	const samplePromotions = [
		{
			id: 'promo1',
			code: 'SAVE10',
			description: 'Save 10% on your order',
			discountType: 'percentage' as const,
			discountValue: 10,
			applied: true
		},
		{
			id: 'promo2',
			code: 'FREESHIP',
			description: 'Free shipping on orders over $50',
			discountType: 'fixed' as const,
			discountValue: 5.99,
			applied: false
		}
	];
</script>

<Story {id} {title} {description} component={CartSummary} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-cart-summary _c1">
			<div class="_c2">
				<p class="_c3">Primary Cart Summary Example</p>
				<p class="_c4">Interactive cart summary with item management.</p>

				<div class="_c5">
					<CartSummary
						items={sampleItems}
						promotions={samplePromotions}
						shippingCost={5.99}
						taxCost={12.5}
						discountAmount={25.5}
						showItemThumbnails={values.showItemThumbnails}
						showDiscounts={values.showDiscounts}
						showShipping={true}
						showTaxes={true}
						showPromoCode={true}
						currency="USD"
						onQuantityChange={(itemId, newQuantity) =>
							console.log(`Quantity changed for ${itemId}: ${newQuantity}`)}
						onItemRemove={(itemId) => console.log(`Item removed: ${itemId}`)}
						onApplyPromotion={(code) => console.log(`Applying promotion: ${code}`)}
						onCheckout={() => console.log('Proceeding to checkout')}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Cart Variations</h3>
				<p class="_c8">Different cart configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Empty Cart</p>
						<div>
							<CartSummary
								items={[]}
								shippingCost={0}
								taxCost={0}
								discountAmount={0}
								showItemThumbnails={true}
								showDiscounts={true}
								showShipping={true}
								showTaxes={true}
								showPromoCode={true}
								currency="USD"
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Cart Without Thumbnails</p>
						<div>
							<CartSummary
								items={sampleItems.slice(0, 1)}
								shippingCost={0}
								taxCost={8.25}
								discountAmount={0}
								showItemThumbnails={false}
								showDiscounts={true}
								showShipping={false}
								showTaxes={true}
								showPromoCode={false}
								currency="USD"
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
