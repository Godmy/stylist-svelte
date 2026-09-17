<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import TourMetaLine from './index.svelte';

	const sample = SAMPLE_EXCURSIONS[0];
	const controls: SlotStory[] = [
		{ name: 'duration', type: 'text', defaultValue: sample.duration },
		{ name: 'pickup', type: 'text', defaultValue: sample.pickup }
	];
</script>

<Story
	id="travel-commerce-molecules-tour-meta-line"
	title="Travel Commerce / TourMetaLine"
	component={TourMetaLine}
	category="Travel Commerce/Molecules"
	description="Duration and pickup metadata for tour cards."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<TourMetaLine duration={values.duration} pickup={values.pickup} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #ffffff;
	}
</style>
