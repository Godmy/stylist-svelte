<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import ChartAxisX from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'X Axis' },
		{ name: 'showGrid', type: 'boolean', defaultValue: true },
		{ name: 'tickCount', type: 'number', defaultValue: 5, min: 1, max: 20, step: 1 },
		{ name: 'showArrow', type: 'boolean', defaultValue: true },
		{ name: 'color', type: 'text', defaultValue: '#64748b' }
	];

	const ticks = [40, 120, 200, 280, 360];
</script>

<Story
	{controls}
	component={ChartAxisX}
	title="ChartAxisX Component"
	description="Horizontal axis for chart layouts"
	tags={['chart', 'axis', 'x']}
>
	{#snippet children(values: any)}
		<svg width="400" height="90" class="rounded border border-[--color-border-primary] bg-[--color-background-primary]">
			<ChartAxisX y={48} startX={20} endX={380} {ticks} tickCount={values.tickCount} label={values.label} showGrid={values.showGrid} showArrow={values.showArrow} color={values.color} />
		</svg>
	{/snippet}
</Story>




