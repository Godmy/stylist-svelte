<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PriceFilter from './index.svelte';

	let selected = $state('0 - 1000');

	const controls: SlotStory[] = [
		{ name: 'minPrice', type: 'number', defaultValue: 0, min: 0, max: 500, step: 10 },
		{ name: 'maxPrice', type: 'number', defaultValue: 1000, min: 100, max: 5000, step: 50 },
		{ name: 'currentMin', type: 'number', defaultValue: 150, min: 0, max: 2000, step: 10 },
		{ name: 'currentMax', type: 'number', defaultValue: 750, min: 50, max: 5000, step: 10 },
		{ name: 'currency', type: 'text', defaultValue: '$' }
	];
</script>

<Story
	component={PriceFilter}
	title="PriceFilter"
	description="Dual-slider price range selection."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<PriceFilter
				minPrice={values.minPrice}
				maxPrice={values.maxPrice}
				currentMin={values.currentMin}
				currentMax={values.currentMax}
				currency={values.currency}
				onPriceChange={(min: number, max: number) => (selected = `${min} - ${max}`)}
			/>
			<p class="_c2">Selected: {selected}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 28rem;
	}
	._c1 > * + * {
		margin-top: 0.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
