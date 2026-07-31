<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { SlotOrder } from '$stylist/commerce/interface/slot/order';

	import RecipeOrderHistory from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showSearch', type: 'boolean', defaultValue: true },
			{ name: 'showRepeatOrder', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample order history data
	const orderHistory: SlotOrder[] = [
		{
			id: 'order1',
			orderNumber: 'ORD-2023-001',
			date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
			status: 'delivered' as const,
			total: 289.97,
			items: [
				{
					id: 'item1',
					name: 'Wireless Headphones',
					quantity: 1,
					price: 129.99,
					thumbnail: 'https://placehold.co/100x100?text=Headphones'
				},
				{
					id: 'item2',
					name: 'Bluetooth Speaker',
					quantity: 2,
					price: 79.99,
					thumbnail: 'https://placehold.co/100x100?text=Speaker'
				}
			],
			rating: 5,
			review: 'Great quality and fast delivery!'
		},
		{
			id: 'order2',
			orderNumber: 'ORD-2023-002',
			date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
			status: 'shipped' as const,
			total: 149.99,
			items: [
				{
					id: 'item3',
					name: 'Smart Watch',
					quantity: 1,
					price: 149.99,
					thumbnail: 'https://placehold.co/100x100?text=Watch'
				}
			]
		},
		{
			id: 'order3',
			orderNumber: 'ORD-2023-003',
			date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
			status: 'processing' as const,
			total: 89.99,
			items: [
				{
					id: 'item4',
					name: 'Phone Case',
					quantity: 1,
					price: 24.99,
					thumbnail: 'https://placehold.co/100x100?text=Case'
				},
				{
					id: 'item5',
					name: 'Screen Protector',
					quantity: 2,
					price: 32.5,
					thumbnail: 'https://placehold.co/100x100?text=Protector'
				}
			]
		},
		{
			id: 'order4',
			orderNumber: 'ORD-2023-004',
			date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
			status: 'cancelled' as const,
			total: 199.99,
			items: [
				{
					id: 'item6',
					name: 'Laptop Stand',
					quantity: 1,
					price: 49.99,
					thumbnail: 'https://placehold.co/100x100?text=Stand'
				},
				{
					id: 'item7',
					name: 'Wireless Mouse',
					quantity: 1,
					price: 149.99,
					thumbnail: 'https://placehold.co/100x100?text=Mouse'
				}
			]
		}
	];
</script>

<Story {id} {title} {description} component={RecipeOrderHistory} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-order-history _c1">
			<div class="_c2">
				<p class="_c3">Primary SlotOrder History Example</p>
				<p class="_c4">SlotOrder history with search and filtering.</p>

				<div class="_c5">
					<RecipeOrderHistory
						orders={orderHistory}
						showSearch={values.showSearch}
						showRepeatOrder={values.showRepeatOrder}
						showDownloadInvoice={true}
						showWriteReview={true}
						onOrderRepeat={(orderId) => console.log(`Reordering: ${orderId}`)}
						onDownloadInvoice={(orderId) => console.log(`Downloading invoice for: ${orderId}`)}
						onWriteReview={(orderId) => console.log(`Writing review for order ${orderId}`)}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">SlotOrder History Variations</h3>
				<p class="_c8">Different order history configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Search</p>
						<div>
							<RecipeOrderHistory
								orders={orderHistory.slice(0, 2)}
								showSearch={false}
								showRepeatOrder={true}
								showDownloadInvoice={false}
								showWriteReview={true}
								onOrderRepeat={(orderId) => console.log(`Reordering: ${orderId}`)}
								onWriteReview={(orderId) => console.log(`Writing review for order ${orderId}`)}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Without Rating</p>
						<div>
							<RecipeOrderHistory
								orders={orderHistory.slice(0, 1)}
								showSearch={true}
								showRepeatOrder={false}
								showDownloadInvoice={true}
								showWriteReview={false}
								onDownloadInvoice={(orderId) => console.log(`Downloading invoice for: ${orderId}`)}
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
