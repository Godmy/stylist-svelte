<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductWishlist from './index.svelte';

	let lastAction = $state('none');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showEmptyWishlist', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="molecules-product-wishlist"
	title="ProductWishlist"
	component={ProductWishlist}
	category="Molecules"
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProductWishlist
				items={values.showEmptyWishlist
					? []
					: [
							{
								id: '1',
								title: 'Wireless Headphones',
								price: 199.99,
								currency: '$',
								image: 'https://placehold.co/100x100',
								rating: 4.5
							},
							{
								id: '2',
								title: 'Smart Watch',
								price: 249.99,
								currency: '$',
								image: 'https://placehold.co/100x100',
								rating: 4.2
							}
						]}
				onRemove={(id: string) => (lastAction = `Removed ${id}`)}
				onMoveToCart={(id: string) => (lastAction = `Moved ${id} to cart`)}
			/>
			<p class="_c2">Last action: {lastAction}</p>
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
