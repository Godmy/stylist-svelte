<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import BulkOrderForm from './index.svelte';

	type Props = {
		showTotal: boolean;
		showNotes: boolean;
		allowFileUpload: boolean;
		title: string;
		description: string;
	};

	const controls: SlotStory[] = [
		{ name: 'showTotal', type: 'boolean', defaultValue: true },
		{ name: 'showNotes', type: 'boolean', defaultValue: true },
		{ name: 'allowFileUpload', type: 'boolean', defaultValue: true },
		{ name: 'title', type: 'text', defaultValue: 'Bulk SlotOrder' },
		{ name: 'description', type: 'text', defaultValue: 'Add multiple products to your order' }
	];

	// Sample products data
	const sampleProducts = [
		{ id: '1', name: 'Wireless Headphones', price: 129.99, minOrder: 10, available: 100 },
		{ id: '2', name: 'Bluetooth Speaker', price: 89.99, minOrder: 5, available: 50 },
		{ id: '3', name: 'Smart Watch', price: 199.99, minOrder: 20, available: 200 },
		{ id: '4', name: 'Laptop Stand', price: 49.99, minOrder: 5, available: 75 },
		{ id: '5', name: 'USB-C Hub', price: 79.99, minOrder: 10, available: 30 }
	];

	let orderItems = $state<any[]>([]);

	const handleOrderSubmit = (items: any[]) => {
		console.log('SlotOrder submitted with items:', items);
		orderItems = items;
	};

	const handleItemsChange = (items: any[]) => {
		console.log('Items changed:', items);
	};
</script>

<Story
	id="organisms-bulk-order-form"
	title="Organisms / Interaction / Commerce / BulkOrderForm"
	component={BulkOrderForm}
	category="Organisms/Interaction/Commerce"
	description="A form for placing bulk orders with multiple products."
	{controls}
>
	{#snippet children(args)}
		<section class="sb-organisms-bulk-order-form">
			<div class="_c1">
				<BulkOrderForm
					products={sampleProducts}
					showTotal={args.showTotal as boolean}
					showNotes={args.showNotes as boolean}
					allowFileUpload={args.allowFileUpload as boolean}
					title={args.title as string}
					description={args.description as string}
					onOrderSubmit={handleOrderSubmit}
					onItemsChange={handleItemsChange}
				/>

				{#if orderItems.length > 0}
					<div class="_c2">
						<h3 class="_c3">Submitted SlotOrder Items:</h3>
						<ul class="_c4">
							{#each orderItems as item}
								<li class="_c5">
									Product ID: {item.productId}, Quantity: {item.quantity}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		margin-left: auto;
		margin-right: auto;
		max-width: 56rem;
		border-radius: 2.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c2 {
		margin-top: 1.5rem;
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c3 {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c4 {
		margin-top: 0.5rem;
	}
	._c4 > * + * {
		margin-top: 0.25rem;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
