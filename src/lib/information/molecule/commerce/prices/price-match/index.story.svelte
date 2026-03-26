<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import PriceMatch from './index.svelte';

	const competitors = [
		{ name: 'Shop A', price: 219 },
		{ name: 'Shop B', price: 205 },
		{ name: 'Shop C', price: 212 }
	];

	const controls: InterfaceControllerSettings[] = [
		{ name: 'productName', type: 'text', defaultValue: 'Ergonomic Chair' },
		{ name: 'targetPrice', type: 'number', defaultValue: 215, min: 1, max: 2000, step: 1 },
		{ name: 'currency', type: 'text', defaultValue: '$' }
	];
</script>

<Story component={PriceMatch} title="PriceMatch" description="Compares your price against competitor offers." {controls}>
	{#snippet children(values: any)}
		<PriceMatch productName={values.productName} targetPrice={values.targetPrice} currency={values.currency} competitorPrices={competitors} onFindLower={() => {}} />
	{/snippet}
</Story>



