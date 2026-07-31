<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RoundSummaryCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'min', type: 'number', defaultValue: 3, min: 0, max: 40 },
		{ name: 'mean', type: 'number', defaultValue: 5.5, min: 0, max: 40, step: 0.1 },
		{ name: 'median', type: 'number', defaultValue: 5, min: 0, max: 40 },
		{ name: 'max', type: 'number', defaultValue: 9, min: 0, max: 40 }
	];
</script>

<Story
	{controls}
	component={RoundSummaryCard}
	title="RoundSummaryCard"
	category="Molecules/Wbd"
	description="Aggregated min/mean/median/max spread for one task in a round."
>
	{#snippet children(values: any)}
		<RoundSummaryCard
			task={{ id: 't1', label: 'Implement checkout flow' }}
			summary={{
				taskId: 't1',
				min: values.min as number,
				mean: values.mean as number,
				median: values.median as number,
				max: values.max as number,
				stdDev: 0
			}}
		/>
	{/snippet}
</Story>
