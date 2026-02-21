<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import PieChart from './index.svelte';

	const balancedData = [
		{ x: 'A', y: 40, label: 'A', color: '#0ea5e9' },
		{ x: 'B', y: 25, label: 'B', color: '#22c55e' },
		{ x: 'C', y: 20, label: 'C', color: '#f97316' },
		{ x: 'D', y: 15, label: 'D', color: '#a855f7' }
	];

	const skewedData = [
		{ x: 'Main', y: 78, label: 'Main', color: '#2563eb' },
		{ x: 'Alt 1', y: 12, label: 'Alt 1', color: '#10b981' },
		{ x: 'Alt 2', y: 7, label: 'Alt 2', color: '#f59e0b' },
		{ x: 'Alt 3', y: 3, label: 'Alt 3', color: '#ef4444' }
	];

	const controls: ControlConfig[] = [
		{
			name: 'dataset',
			type: 'select',
			options: ['balanced', 'skewed'],
			defaultValue: 'balanced'
		},
		{
			name: 'size',
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
		{@const size = Number(values.size)}
		<PieChart
			data={values.dataset === 'skewed' ? skewedData : balancedData}
			width={Number.isNaN(size) ? 200 : size}
			height={Number.isNaN(size) ? 200 : size}
		/>
	{/snippet}
</Story>
