<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import CanvasToolbar from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'selectedTool', type: 'select', defaultValue: 'pen', options: ['pen', 'eraser', 'select', 'text', 'shape'] },
		{ name: 'lineWidth', type: 'number', defaultValue: 2, min: 1, max: 20, step: 1 },
		{ name: 'strokeColor', type: 'color', defaultValue: '#2563eb' }
	];
</script>

<Story component={CanvasToolbar} title="CanvasToolbar" description="Tool selector for drawing surfaces with brush settings." {controls}>
	{#snippet children(values: any)}
		<CanvasToolbar {...({
			selectedTool: values.selectedTool,
			drawingOptions: {
				lineWidth: values.lineWidth,
				strokeColor: values.strokeColor,
				tool: values.selectedTool,
				mode: values.selectedTool === 'eraser' ? 'erase' : 'draw'
			}
		} as any)} />
	{/snippet}
</Story>
