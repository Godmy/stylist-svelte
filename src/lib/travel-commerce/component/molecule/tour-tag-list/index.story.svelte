<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import TourTagList from './index.svelte';

	const sampleTags = SAMPLE_EXCURSIONS[0].tags;
	const controls: SlotStory[] = [{ name: 'limit', type: 'number', defaultValue: 4, min: 1, max: 4, step: 1 }];
</script>

<Story
	id="travel-commerce-molecules-tour-tag-list"
	title="Travel Commerce / TourTagList"
	component={TourTagList}
	category="Travel Commerce/Molecules"
	description="Compact list of tour topic chips."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<TourTagList tags={sampleTags.slice(0, Number(values.limit))} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #ffffff;
	}
</style>
