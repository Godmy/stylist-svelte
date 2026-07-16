<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductCard from './index.svelte';

	let cartClicks = $state(0);
	let detailsClicks = $state(0);

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'compact', 'with-actions'],
			defaultValue: 'default'
		},
		{ name: 'title', type: 'text', defaultValue: 'Wireless Headphones' },
		{ name: 'price', type: 'number', defaultValue: 199.99, min: 0 },
		{ name: 'currency', type: 'text', defaultValue: '$' },
		{ name: 'image', type: 'text', defaultValue: 'https://placehold.co/320x220?text=Headphones' },
		{ name: 'rating', type: 'number', defaultValue: 4.2, min: 0, max: 5, step: 0.1 },
		{ name: 'reviewCount', type: 'number', defaultValue: 128, min: 0 },
		{
			name: 'badge',
			type: 'select',
			options: ['', 'sale', 'new', 'popular'],
			defaultValue: 'sale'
		},
		{
			name: 'description',
			type: 'text',
			defaultValue: 'High-quality wireless headphones with noise cancellation.'
		}
	];
</script>

<Story
	id="molecules-product-card"
	title="Molecules / Information / Commerce / Products / ProductCard"
	component={ProductCard}
	category="Molecules/Information/Commerce/Products"
	description="Unified product card with default, compact and action variants."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<ProductCard
				variant={args.variant}
				title={args.title}
				price={args.price}
				currency={args.currency}
				image={args.image}
				rating={args.rating}
				reviewCount={args.reviewCount}
				badge={args.badge}
				description={args.description}
			>
				{#snippet actions()}
					<div class="_c2">
						<button class="_c3" onclick={() => (cartClicks += 1)}>Add to cart</button>
						<button class="_c4" onclick={() => (detailsClicks += 1)}>Details</button>
					</div>
				{/snippet}
			</ProductCard>
			<div class="_c5">
				Actions: cart {cartClicks}, details {detailsClicks}
			</div>
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
		margin-top: 1rem;
	}
	._c2 {
		display: flex;
		gap: 0.5rem;
	}
	._c3 {
		border-radius: 0.25rem;
		background-color: var(--color-primary-600);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-inverse);
	}
	._c4 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
