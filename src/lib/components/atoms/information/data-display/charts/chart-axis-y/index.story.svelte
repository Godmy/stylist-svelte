<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import ChartAxisY from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Y Axis' },
		{ name: 'showGrid', type: 'boolean', defaultValue: true },
		{ name: 'tickCount', type: 'number', defaultValue: 5, min: 1, max: 20, step: 1 },
		{ name: 'showArrow', type: 'boolean', defaultValue: true },
		{ name: 'color', type: 'text', defaultValue: '#64748b' }
	];

	const ticks = [20, 60, 100, 140, 180];
</script>

<Story
	{controls}
	component={ChartAxisY}
	title="ChartAxisY Component"
	description="Vertical axis for chart layouts"
	tags={['chart', 'axis', 'y']}
>
	{#snippet children(values: any)}
		<svg width="420" height="220" class="rounded border border-[--color-border-primary] bg-[--color-background-primary]">
			<ChartAxisY x={50} startY={20} endY={200} gridEndX={390} {ticks} tickCount={values.tickCount} label={values.label} showGrid={values.showGrid} showArrow={values.showArrow} color={values.color} />
		</svg>
	{/snippet}
</Story>



