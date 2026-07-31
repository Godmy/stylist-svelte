<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeUpsell from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showSavings', type: 'boolean', defaultValue: true },
			{ name: 'showReason', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample products for the upsell component
	const currentProduct = {
		id: 'plan-basic',
		name: 'Starter Plan',
		description: 'Includes 5 projects, basic analytics, and community support.',
		price: 12
	};

	const upsellProducts = [
		{
			id: 'plan-pro',
			name: 'Professional Plan',
			description: 'Unlimited projects, advanced reports, and CRM sync.',
			price: 32,
			originalPrice: 42,
			discountPercent: 25,
			rating: 4.8,
			reviewCount: 187,
			tags: ['Most popular', 'Save 20%']
		},
		{
			id: 'plan-enterprise',
			name: 'Enterprise Plan',
			description: 'Everything in Pro plus automation rules and premium support.',
			price: 58,
			originalPrice: 74,
			discountPercent: 18,
			tags: ['Automation', 'Teams']
		},
		{
			id: 'plan-premium',
			name: 'Premium Plan',
			description: 'AI-powered insights and predictive analytics for growth teams.',
			price: 86,
			originalPrice: 102,
			discountPercent: 15,
			tags: ['AI Features']
		}
	];
</script>

<Story {id} {title} {description} component={RecipeUpsell} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-upsell _c1">
			<div class="_c2">
				<p class="_c3">Primary RecipeUpsell Example</p>
				<p class="_c4">RecipeUpsell component with upgrade recommendations.</p>

				<div class="_c5">
					<RecipeUpsell
						{currentProduct}
						{upsellProducts}
						title="You might upgrade to"
						description="Consider these premium options"
						showSavings={values.showSavings}
						showReason={values.showReason}
						maxProducts={3}
						onProductUpgrade={(product) => console.log('Upgraded to:', product.name)}
						onProductAddToCart={(product) => console.log('Added to cart:', product.name)}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">RecipeUpsell Variations</h3>
				<p class="_c8">Different upsell configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Limited Products</p>
						<div>
							<RecipeUpsell
								{currentProduct}
								upsellProducts={upsellProducts.slice(0, 1)}
								title="Premium Upgrade"
								description="Single recommendation for focused upsell"
								showSavings={true}
								showReason={false}
								maxProducts={1}
								onProductUpgrade={(product) => console.log('Upgraded to:', product.name)}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">With Savings Highlight</p>
						<div>
							<RecipeUpsell
								currentProduct={{
									...currentProduct,
									name: 'Basic Package',
									price: 25
								}}
								upsellProducts={[
									{
										...upsellProducts[0],
										name: 'Pro Package',
										price: 45,
										originalPrice: 60,
										discountPercent: 25
									}
								]}
								title="Upgrade Opportunity"
								description="Save money with our premium package"
								showSavings={true}
								showReason={true}
								maxProducts={1}
								onProductUpgrade={(product) => console.log('Upgraded to:', product.name)}
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
