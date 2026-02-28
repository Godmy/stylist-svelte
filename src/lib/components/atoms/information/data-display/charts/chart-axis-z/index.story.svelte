<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import ChartAxisZ from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Z Axis' },
		{ name: 'color', type: 'text', defaultValue: '#64748b' },
		{ name: 'tickCount', type: 'number', defaultValue: 3, min: 0, max: 12, step: 1 },
		{ name: 'showArrow', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={ChartAxisZ}
	title="ChartAxisZ Component"
	description="Diagonal Z-axis projection for pseudo 3D charts"
	tags={['chart', 'axis', 'z']}
>
	{#snippet children(values: any)}
		<svg width="220" height="220" class="rounded border border-[--color-border-primary] bg-[--color-background-primary]">
			<ChartAxisZ startX={40} startY={180} endX={150} endY={60} tickCount={values.tickCount} label={values.label} showArrow={values.showArrow} color={values.color} />
		</svg>
	{/snippet}
</Story>

