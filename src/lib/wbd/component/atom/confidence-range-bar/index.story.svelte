<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ConfidenceRangeBar from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'optimistic', type: 'number', defaultValue: 3, min: 0, max: 40 },
		{ name: 'mostLikely', type: 'number', defaultValue: 5, min: 0, max: 40 },
		{ name: 'pessimistic', type: 'number', defaultValue: 9, min: 0, max: 40 }
	];
</script>

<Story
	{controls}
	component={ConfidenceRangeBar}
	title="ConfidenceRangeBar"
	category="Atoms/Wbd"
	description="Visualizes the optimistic-to-pessimistic spread of a single estimate."
>
	{#snippet children(values: any)}
		<ConfidenceRangeBar
			estimate={{
				optimistic: values.optimistic as number,
				mostLikely: values.mostLikely as number,
				pessimistic: values.pessimistic as number
			}}
		/>
	{/snippet}
</Story>
