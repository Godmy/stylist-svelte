<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import DrawingSurface from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'width', type: 'number', defaultValue: 640, min: 300, max: 1000, step: 20 },
		{ name: 'height', type: 'number', defaultValue: 360, min: 200, max: 700, step: 20 },
		{ name: 'drawingEnabled', type: 'boolean', defaultValue: true },
		{ name: 'tool', type: 'select', defaultValue: 'pen', options: ['pen', 'eraser', 'select'] },
		{ name: 'strokeWidth', type: 'number', defaultValue: 2, min: 1, max: 24, step: 1 },
		{ name: 'strokeColor', type: 'color', defaultValue: '#111827' },
		{ name: 'backgroundColor', type: 'color', defaultValue: '#ffffff' }
	];
</script>

<Story component={DrawingSurface} title="DrawingSurface" description="Canvas-based drawing area with tool and color controls." {controls}>
	{#snippet children(values: any)}
		<DrawingSurface {...({
			width: values.width,
			height: values.height,
			drawingEnabled: values.drawingEnabled,
			tool: values.tool,
			strokeWidth: values.strokeWidth,
			strokeColor: values.strokeColor,
			backgroundColor: values.backgroundColor
		} as any)} />
	{/snippet}
</Story>
