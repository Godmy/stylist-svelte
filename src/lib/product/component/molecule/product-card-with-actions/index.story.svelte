<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductCardWithActions from './index.svelte';

	let buyClicks = $state(0);
	let wishlistClicks = $state(0);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Smart Watch' },
		{ name: 'price', type: 'number', defaultValue: 199.99, min: 0 },
		{ name: 'currency', type: 'text', defaultValue: '$' },
		{ name: 'image', type: 'text', defaultValue: 'https://placehold.co/320x220?text=Smartwatch' },
		{ name: 'rating', type: 'number', defaultValue: 4.3, min: 0, max: 5, step: 0.1 },
		{ name: 'reviewCount', type: 'number', defaultValue: 87, min: 0 },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Track your fitness goals with this advanced smartwatch.'
		}
	];
</script>

<Story
	id="molecules-product-card-with-actions"
	title="Molecules / Information / Commerce / Products / ProductCardWithActions"
	component={ProductCardWithActions}
	category="Molecules/Information/Commerce/Products"
	description="Product card with visible action area and stateful button behavior."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<ProductCardWithActions
				title={args.title}
				price={args.price}
				currency={args.currency}
				image={args.image}
				rating={args.rating}
				reviewCount={args.reviewCount}
				description={args.description}
			>
				{#snippet actions()}
					<div class="_c2">
						<button class="_c3" onclick={() => (buyClicks += 1)}>Buy now</button>
						<button class="_c4" onclick={() => (wishlistClicks += 1)}>Wishlist</button>
					</div>
				{/snippet}
			</ProductCardWithActions>
			<div class="_c5">
				Clicks: buy {buyClicks}, wishlist {wishlistClicks}
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
