<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ResultsCounter from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'count', type: 'number', defaultValue: 12, min: 0, max: 99, step: 1 },
		{ name: 'selectedLabel', type: 'select', options: ['none', 'Ocean', 'Wildlife', 'Mountains'], defaultValue: 'Ocean' }
	];
</script>

<Story
	id="travel-commerce-molecules-results-counter"
	title="Travel Commerce / ResultsCounter"
	component={ResultsCounter}
	category="Travel Commerce/Molecules"
	description="Localized results count line with optional selected labels."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<ResultsCounter
				count={Number(values.count)}
				selectedLabels={values.selectedLabel === 'none' ? [] : [values.selectedLabel]}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
