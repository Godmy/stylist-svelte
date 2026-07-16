<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import MetricBarsCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Sprint Health' },
		{ name: 'caption', type: 'text', defaultValue: 'Distribution across current delivery lanes.' },
		{ name: 'total', type: 'text', defaultValue: '42 issues' },
		{ name: 'color', type: 'color', defaultValue: '#2563eb' },
		{ name: 'trackColor', type: 'color', defaultValue: '#e5e7eb' }
	];

	const bars = [
		{ label: 'Ready', value: 18, valueLabel: '18', percentage: 43, color: '#16a34a' },
		{ label: 'In Progress', value: 14, valueLabel: '14', percentage: 33, color: '#2563eb' },
		{ label: 'Blocked', value: 4, valueLabel: '4', percentage: 10, color: '#dc2626' },
		{ label: 'Review', value: 6, valueLabel: '6', percentage: 14, color: '#d97706' }
	];
</script>

<Story
	id="molecules-metric-bars-card"
	title="MetricBarsCard"
	component={MetricBarsCard}
	category="Molecules"
	description="Grouped metric bars with a card header and optional total."
	tags={['metric', 'progress', 'summary']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<MetricBarsCard
				label={String(values.label || 'Sprint Health')}
				caption={String(values.caption || '')}
				total={String(values.total || '')}
				{bars}
				color={String(values.color || '#2563eb')}
				trackColor={String(values.trackColor || '#e5e7eb')}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 38rem;
	}
</style>
