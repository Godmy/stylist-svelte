<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RoundSummaryTable from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'taskCount', type: 'number', defaultValue: 3, min: 1, max: 4 }
	];

	const tasks = [
		{ id: 't1', label: 'Checkout flow' },
		{ id: 't2', label: 'Payment gateway integration' },
		{ id: 't3', label: 'Order confirmation email' },
		{ id: 't4', label: 'Admin refund panel' }
	];
	const summaries = [
		{ taskId: 't1', min: 3, mean: 5.5, median: 5, max: 9, stdDev: 2 },
		{ taskId: 't2', min: 5, mean: 8, median: 8, max: 13, stdDev: 3 },
		{ taskId: 't3', min: 1, mean: 2, median: 2, max: 3, stdDev: 0.7 },
		{ taskId: 't4', min: 2, mean: 4, median: 4, max: 6, stdDev: 1.4 }
	];
</script>

<Story
	{controls}
	component={RoundSummaryTable}
	title="RoundSummaryTable"
	category="Organisms/Wbd"
	description="Grid of round summary cards, one per WBS task."
>
	{#snippet children(values: any)}
		<RoundSummaryTable
			tasks={tasks.slice(0, values.taskCount as number)}
			summaries={summaries.slice(0, values.taskCount as number)}
		/>
	{/snippet}
</Story>
