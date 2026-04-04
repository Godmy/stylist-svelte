<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import BarChart from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Quarterly revenue' },
		{ name: 'width', type: 'number', defaultValue: 640, min: 320, max: 900, step: 20 },
		{ name: 'height', type: 'number', defaultValue: 360, min: 220, max: 600, step: 20 },
		{ name: 'showLegend', type: 'boolean', defaultValue: true },
		{ name: 'showAxis', type: 'boolean', defaultValue: true },
		{ name: 'colorScheme', type: 'select', defaultValue: 'minimal', options: ['minimal', 'ocean', 'forest', 'sunset'] }
	];

	const data = [
		{ id: 'q1', name: 'Q1', value: 120 },
		{ id: 'q2', name: 'Q2', value: 180 },
		{ id: 'q3', name: 'Q3', value: 145 },
		{ id: 'q4', name: 'Q4', value: 210 }
	];
</script>

<Story component={BarChart} title="BarChart" description="Categorical bar chart with legend and axis options." {controls}>
	{#snippet children(values: any)}
		<BarChart data={data} title={values.title} width={values.width} height={values.height} showLegend={values.showLegend} showAxis={values.showAxis} colorScheme={values.colorScheme} />
	{/snippet}
</Story>



