<script lang="ts">
	import { Story } from '$stylist/playground/component';
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
		<div class="space-y-4 rounded-xl bg-[var(--color-background-secondary)] p-6">
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
					<div class="flex gap-2">
						<button
							class="rounded bg-[var(--color-primary-600)] px-3 py-1.5 text-sm text-[var(--color-text-inverse)]"
							onclick={() => (cartClicks += 1)}>Add to cart</button
						>
						<button
							class="rounded border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-1.5 text-sm"
							onclick={() => (detailsClicks += 1)}>Details</button
						>
					</div>
				{/snippet}
			</ProductCard>
			<div class="text-sm text-[var(--color-text-secondary)]">
				Actions: cart {cartClicks}, details {detailsClicks}
			</div>
		</div>
	{/snippet}
</Story>
