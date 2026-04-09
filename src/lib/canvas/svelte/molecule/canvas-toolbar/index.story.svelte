<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import CanvasToolbar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



