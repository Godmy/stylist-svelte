<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductAvailability from './index.svelte';

	let notified = $state(false);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'available', type: 'boolean', defaultValue: true },
		{ name: 'stock', type: 'number', defaultValue: 5, min: 0 },
		{ name: 'location', type: 'text', defaultValue: 'Warehouse A' },
		{ name: 'estimatedRestock', type: 'text', defaultValue: '2026-03-01' }
	];
</script>

<Story
	id="molecules-product-availability"
	title="Molecules / Information / Commerce / Products / ProductAvailability"
	component={ProductAvailability}
	category="Molecules/Information/Commerce/Products"
	description="Displays product availability status and restock information."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<ProductAvailability
				available={args.available}
				stock={args.stock}
				location={args.location}
				estimatedRestock={args.estimatedRestock}
				onNotifyMe={() => (notified = true)}
			/>
			<p class="_c2">
				Notify status: {notified ? 'Requested' : 'Not requested'}
			</p>
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
