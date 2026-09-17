<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import TourPriceNote from './index.svelte';

	const controls: SlotStory[] = [{ name: 'price', type: 'text', defaultValue: SAMPLE_EXCURSIONS[0].priceFrom }];
</script>

<Story
	id="travel-commerce-molecules-tour-price-note"
	title="Travel Commerce / TourPriceNote"
	component={TourPriceNote}
	category="Travel Commerce/Molecules"
	description="Compact tour price note."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<TourPriceNote price={values.price} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #ffffff;
	}
</style>
