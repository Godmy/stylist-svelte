<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import MetricCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Completion' },
		{ name: 'value', type: 'text', defaultValue: '74%' },
		{ name: 'percentage', type: 'number', defaultValue: 74, min: 0, max: 100, step: 1 },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'info',
			options: ['info', 'success', 'warning', 'danger']
		},
		{ name: 'showProgressBar', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={MetricCard}
	title="MetricCard"
	description="KPI card with progress indication."
	{controls}
>
	{#snippet children(values: any)}
		<MetricCard
			title={values.title}
			value={values.value}
			max={100}
			percentage={values.percentage}
			description="Monthly goal tracking"
			variant={values.variant}
			showProgressBar={values.showProgressBar}
		/>
	{/snippet}
</Story>
