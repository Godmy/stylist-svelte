<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import OrderConfirmation from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showDownloadInvoice', type: 'boolean', defaultValue: true },
			{ name: 'showShareOrder', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample order data
	const orderData = {
		orderId: 'ORD-2023-001',
		orderDate: new Date(),
		items: [
			{
				id: 'item1',
				name: 'Wireless Headphones',
				price: 129.99,
				quantity: 1,
				variant: 'Black',
				thumbnail: 'https://placehold.co/100x100?text=Headphones'
			},
			{
				id: 'item2',
				name: 'Bluetooth Speaker',
				price: 79.99,
				quantity: 2,
				variant: 'Red',
				thumbnail: 'https://placehold.co/100x100?text=Speaker'
			}
		],
		total: 289.97,
		shippingAddress: {
			firstName: 'John',
			lastName: 'Doe',
			address1: '123 Main St',
			address2: 'Apt 4B',
			city: 'New York',
			state: 'NY',
			zipCode: '10001',
			country: 'USA'
		},
		paymentInfo: {
			method: 'credit_card',
			lastFour: '4242',
			status: 'paid' as const
		},
		estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
		trackingNumber: 'TRK123456789',
		orderStatus: 'processing' as const,
		shippingCost: 9.99,
		taxAmount: 18.4
	};
</script>

<Story {id} {title} {description} component={OrderConfirmation} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-order-confirmation _c1">
			<div class="_c2">
				<p class="_c3">Primary SlotOrder Confirmation Example</p>
				<p class="_c4">SlotOrder confirmation page with all details.</p>

				<div class="_c5">
					<OrderConfirmation
						{...orderData}
						showDownloadInvoice={values.showDownloadInvoice}
						showShareOrder={values.showShareOrder}
						onDownloadInvoice={() => console.log('Downloading invoice')}
						onShareOrder={() => console.log('Sharing order')}
						onContinueShopping={() => console.log('Continuing shopping')}
						onTrackOrder={() => console.log('Tracking order')}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">SlotOrder Variations</h3>
				<p class="_c8">Different order confirmation configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Shipped SlotOrder</p>
						<div>
							<OrderConfirmation
								{...orderData}
								orderStatus="shipped"
								trackingNumber="TRK987654321"
								showDownloadInvoice={true}
								showShareOrder={false}
								onDownloadInvoice={() => console.log('Downloading invoice')}
								onShareOrder={() => console.log('Sharing order')}
								onContinueShopping={() => console.log('Continuing shopping')}
								onTrackOrder={() => console.log('Tracking order')}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Delivered SlotOrder</p>
						<div>
							<OrderConfirmation
								{...orderData}
								orderStatus="delivered"
								trackingNumber="TRK555666777"
								showDownloadInvoice={false}
								showShareOrder={true}
								onDownloadInvoice={() => console.log('Downloading invoice')}
								onShareOrder={() => console.log('Sharing order')}
								onContinueShopping={() => console.log('Continuing shopping')}
								onTrackOrder={() => console.log('Tracking order')}
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
