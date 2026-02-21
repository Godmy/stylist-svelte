<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PriceFilter from './index.svelte';

	let selected = $state('0 - 1000');

	const controls: ControlConfig[] = [
		{ name: 'minPrice', type: 'number', defaultValue: 0, min: 0, max: 500, step: 10 },
		{ name: 'maxPrice', type: 'number', defaultValue: 1000, min: 100, max: 5000, step: 50 },
		{ name: 'currentMin', type: 'number', defaultValue: 150, min: 0, max: 2000, step: 10 },
		{ name: 'currentMax', type: 'number', defaultValue: 750, min: 50, max: 5000, step: 10 },
		{ name: 'currency', type: 'text', defaultValue: '$' }
	];
</script>

<Story component={PriceFilter} title="PriceFilter" description="Dual-slider price range selection." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-2 max-w-md">
			<PriceFilter minPrice={values.minPrice} maxPrice={values.maxPrice} currentMin={values.currentMin} currentMax={values.currentMax} currency={values.currency} onPriceChange={(min, max) => (selected = `${min} - ${max}`)} />
			<p class="text-sm text-[--color-text-secondary]">Selected: {selected}</p>
		</div>
	{/snippet}
</Story>
