<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ConvergenceChart from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'roundCount', type: 'number', defaultValue: 3, min: 1, max: 4 }
	];

	const roundSummaries = [
		{ taskId: 't1', min: 2, mean: 6, median: 6, max: 12, stdDev: 3.3 },
		{ taskId: 't1', min: 4, mean: 6.5, median: 6, max: 9, stdDev: 1.7 },
		{ taskId: 't1', min: 5, mean: 6, median: 6, max: 7, stdDev: 0.7 },
		{ taskId: 't1', min: 5.5, mean: 6, median: 6, max: 6.5, stdDev: 0.3 }
	];
</script>

<Story
	{controls}
	component={ConvergenceChart}
	title="ConvergenceChart"
	category="Organisms/Wbd"
	description="Shows the estimate spread narrowing across successive Delphi rounds."
>
	{#snippet children(values: any)}
		<ConvergenceChart
			taskLabel="Checkout flow"
			roundSummaries={roundSummaries.slice(0, values.roundCount as number)}
		/>
	{/snippet}
</Story>
