<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductCard from './index.svelte';
	import WishlistButton from '$stylist/product/component/molecule/wishlist-button/index.svelte';

	let cartClicks = $state(0);
	let detailsClicks = $state(0);
	let inWishlist = $state(false);
	let log = $state<string[]>([]);

	function record(message: string) {
		log = [message, ...log].slice(0, 5);
	}

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'variant',
			type: 'select',
			options: ['detailed', 'compact', 'screen'],
			defaultValue: 'detailed',
			description:
				'detailed — full card; compact — dense, no description; screen — with action buttons.'
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
	description="Single product card component. The 'variant' control switches between the detailed, compact and screen (with actions) presentations that used to be separate components."
	{controls}
>
	{#snippet children(args: any)}
		<div class="product-card-story__frame">
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
					<div class="product-card-story__actions">
						<button
							class="product-card-story__button product-card-story__button--primary"
							onclick={() => {
								cartClicks += 1;
								record(`Added "${args.title}" to cart`);
							}}
						>
							Add to cart
						</button>
						<button
							class="product-card-story__button"
							onclick={() => {
								detailsClicks += 1;
								record(`Opened details for "${args.title}"`);
							}}
						>
							Details
						</button>
						<WishlistButton
							{inWishlist}
							onToggle={(next) => (inWishlist = next)}
							onSuccess={() => record(inWishlist ? 'Added to wishlist' : 'Removed from wishlist')}
						/>
					</div>
				{/snippet}
			</ProductCard>
		</div>

		<div class="product-card-story__panel">
			<div class="product-card-story__stats">
				<span>Cart clicks: <strong>{cartClicks}</strong></span>
				<span>Details clicks: <strong>{detailsClicks}</strong></span>
				<span>Wishlist: <strong>{inWishlist ? 'yes' : 'no'}</strong></span>
			</div>
			{#if log.length > 0}
				<ul class="product-card-story__log">
					{#each log as entry}
						<li>{entry}</li>
					{/each}
				</ul>
			{:else}
				<p class="product-card-story__hint">
					Switch the variant to "screen" to see the action buttons, then click them.
				</p>
			{/if}
		</div>
	{/snippet}
</Story>

<style>
	.product-card-story__frame {
		max-width: 22rem;
	}

	.product-card-story__actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.product-card-story__button {
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.375rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.product-card-story__button--primary {
		border-color: transparent;
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
	}

	.product-card-story__panel {
		margin-top: 1rem;
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem 1.25rem;
	}

	.product-card-story__stats {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.product-card-story__log {
		margin: 0.75rem 0 0;
		padding-left: 1.1rem;
		font-size: 0.8125rem;
		color: var(--color-text-secondary);
	}

	.product-card-story__hint {
		margin: 0.75rem 0 0;
		font-size: 0.8125rem;
		color: var(--color-text-tertiary);
	}
</style>
