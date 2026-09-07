<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeInventoryTracker from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showAlerts', type: 'boolean', defaultValue: true },
			{ name: 'showFilters', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample inventory items
	const inventoryItems = [
		{
			id: 'item1',
			name: 'Wireless Headphones',
			sku: 'WH-12345',
			currentStock: 12,
			minStock: 5,
			maxStock: 100,
			reserved: 3,
			available: 9,
			category: 'Electronics',
			supplier: 'TechCorp',
			lastUpdated: new Date(),
			status: 'in-stock' as const,
			thumbnail: 'https://placehold.co/100x100?text=Headphones'
		},
		{
			id: 'item2',
			name: 'Bluetooth Speaker',
			sku: 'BS-67890',
			currentStock: 2,
			minStock: 5,
			maxStock: 50,
			reserved: 1,
			available: 1,
			category: 'Electronics',
			supplier: 'SoundInc',
			lastUpdated: new Date(),
			status: 'low-stock' as const,
			thumbnail: 'https://placehold.co/100x100?text=Speaker'
		},
		{
			id: 'item3',
			name: 'USB Cable',
			sku: 'UC-54321',
			currentStock: 0,
			minStock: 10,
			maxStock: 200,
			reserved: 0,
			available: 0,
			category: 'Accessories',
			supplier: 'CableCo',
			lastUpdated: new Date(),
			status: 'out-of-stock' as const,
			thumbnail: 'https://placehold.co/100x100?text=Cable'
		},
		{
			id: 'item4',
			name: 'Laptop Stand',
			sku: 'LS-98765',
			currentStock: 150,
			minStock: 20,
			maxStock: 100,
			reserved: 5,
			available: 145,
			category: 'Office',
			supplier: 'DeskGear',
			lastUpdated: new Date(),
			status: 'overstocked' as const,
			thumbnail: 'https://placehold.co/100x100?text=Stand'
		}
	];

	// Sample alerts
	const alerts = [
		{
			id: 'alert1',
			itemId: 'item2',
			itemName: 'Bluetooth Speaker',
			threshold: 5,
			currentLevel: 2,
			date: new Date(),
			acknowledged: false
		},
		{
			id: 'alert2',
			itemId: 'item3',
			itemName: 'USB Cable',
			threshold: 10,
			currentLevel: 0,
			date: new Date(),
			acknowledged: false
		}
	];
</script>

<Story
	{id}
	{title}
	{description}
	component={RecipeInventoryTracker}
	category="Organisms"
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-inventory-tracker _c1">
			<div class="_c2">
				<p class="_c3">Primary Inventory Tracker Example</p>
				<p class="_c4">Interactive inventory tracker with stock management.</p>

				<div class="_c5">
					<RecipeInventoryTracker
						items={inventoryItems}
						{alerts}
						showAlerts={values.showAlerts}
						showFilters={values.showFilters}
						showSearch={true}
						showStatusFilter={true}
						lowStockThreshold={5}
						onItemRestock={(item) => console.log(`Restocking item: ${item.name}`)}
						onItemEdit={(item) => console.log(`Editing item: ${item.name}`)}
						onAlertAcknowledge={(alertId) => console.log(`Acknowledging alert: ${alertId}`)}
						onInventoryExport={() => console.log('Exporting inventory report')}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Inventory Variations</h3>
				<p class="_c8">Different inventory configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Alerts</p>
						<div>
							<RecipeInventoryTracker
								items={inventoryItems.slice(0, 2)}
								alerts={[]}
								showAlerts={false}
								showFilters={true}
								showSearch={false}
								showStatusFilter={true}
								lowStockThreshold={5}
								onItemRestock={(item) => console.log(`Restocking item: ${item.name}`)}
								onItemEdit={(item) => console.log(`Editing item: ${item.name}`)}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Compact View</p>
						<div>
							<RecipeInventoryTracker
								items={inventoryItems.slice(0, 1)}
								alerts={alerts.slice(0, 1)}
								showAlerts={true}
								showFilters={false}
								showSearch={true}
								showStatusFilter={false}
								variant="compact"
								lowStockThreshold={5}
								onItemRestock={(item) => console.log(`Restocking item: ${item.name}`)}
								onItemEdit={(item) => console.log(`Editing item: ${item.name}`)}
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
