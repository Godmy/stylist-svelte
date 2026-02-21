<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import StatsCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Active users' },
		{ name: 'value', type: 'text', defaultValue: '12,480' },
		{ name: 'trend', type: 'select', defaultValue: 'up', options: ['up', 'down', 'neutral'] },
		{ name: 'trendValue', type: 'text', defaultValue: '+8.4%' },
		{ name: 'description', type: 'text', defaultValue: 'vs previous week' }
	];
</script>

<Story component={StatsCard} title="StatsCard" description="Compact KPI card with trend indicator." {controls}>
	{#snippet children(values: any)}
		<StatsCard label={values.label} value={values.value} trend={values.trend} trendValue={values.trendValue} description={values.description} />
	{/snippet}
</Story>
