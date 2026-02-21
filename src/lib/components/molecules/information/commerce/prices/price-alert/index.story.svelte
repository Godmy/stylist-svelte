<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PriceAlert from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'productName', type: 'text', defaultValue: 'Noise-canceling headphones' },
		{ name: 'currentPrice', type: 'number', defaultValue: 189, min: 1, max: 1000, step: 1 },
		{ name: 'targetPrice', type: 'number', defaultValue: 170, min: 1, max: 1000, step: 1 },
		{ name: 'currency', type: 'text', defaultValue: '$' }
	];
</script>

<Story component={PriceAlert} title="PriceAlert" description="Tracks current vs target product price." {controls}>
	{#snippet children(values: any)}
		<PriceAlert productName={values.productName} currentPrice={values.currentPrice} targetPrice={values.targetPrice} currency={values.currency} />
	{/snippet}
</Story>
