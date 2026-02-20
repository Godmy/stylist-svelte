<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import PieChart from './index.svelte';

	// Sample data for the pie chart
	const sampleData = [
		{ x: 'A', y: 40, label: 'A', color: '#0ea5e9' },
		{ x: 'B', y: 25, label: 'B', color: '#22c55e' },
		{ x: 'C', y: 20, label: 'C', color: '#f97316' },
		{ x: 'D', y: 15, label: 'D', color: '#a855f7' }
	];

	const controls: ControlConfig[] = [
		{
			name: 'width',
			type: 'text',
			defaultValue: '200'
		},
		{
			name: 'height',
			type: 'text',
			defaultValue: '200'
		}
	];
</script>

<Story
	{controls}
	component={PieChart}
	title="PieChart Component"
	description="A pie chart component for displaying proportional data"
	tags={['information', 'data-display', 'chart', 'pie']}
>
	{#snippet children(values: any)}
		<PieChart
			data={sampleData}
			width={parseInt(values.width as string) || undefined}
			height={parseInt(values.height as string) || undefined}
		/>
	{/snippet}
</Story>
