<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import MetricCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Completion' },
		{ name: 'value', type: 'text', defaultValue: '74%' },
		{ name: 'percentage', type: 'number', defaultValue: 74, min: 0, max: 100, step: 1 },
		{ name: 'variant', type: 'select', defaultValue: 'info', options: ['info', 'success', 'warning', 'danger'] },
		{ name: 'showProgressBar', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={MetricCard} title="MetricCard" description="KPI card with progress indication." {controls}>
	{#snippet children(values: any)}
		<MetricCard title={values.title} value={values.value} max={100} percentage={values.percentage} description="Monthly goal tracking" variant={values.variant} showProgressBar={values.showProgressBar} />
	{/snippet}
</Story>
