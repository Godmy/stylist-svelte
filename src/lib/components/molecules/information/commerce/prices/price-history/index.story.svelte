<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PriceHistory from './index.svelte';

	const data = [
		{ date: '2026-02-01', price: 220 },
		{ date: '2026-02-05', price: 205 },
		{ date: '2026-02-09', price: 198 },
		{ date: '2026-02-13', price: 214 },
		{ date: '2026-02-17', price: 189 },
		{ date: '2026-02-21', price: 195 }
	];

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Price History' },
		{ name: 'currency', type: 'text', defaultValue: '$' }
	];
</script>

<Story component={PriceHistory} title="PriceHistory" description="Time-series history chart of product price." {controls}>
	{#snippet children(values: any)}
		<PriceHistory title={values.title} currency={values.currency} data={data} />
	{/snippet}
</Story>
