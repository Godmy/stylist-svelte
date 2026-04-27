<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import GraphToolbar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'orientation', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] },
		{ name: 'compact', type: 'boolean', defaultValue: false },
		{ name: 'showTooltips', type: 'boolean', defaultValue: true }
	];

	const defaultItems = [
		{ id: 'zoom-in', type: 'button' as const, icon: 'plus', label: 'Zoom In', tooltip: 'Zoom In (Ctrl++)' },
		{ id: 'zoom-out', type: 'button' as const, icon: 'minus', label: 'Zoom Out', tooltip: 'Zoom Out (Ctrl+-)' },
		{ id: 'fit', type: 'button' as const, icon: 'maximize', label: 'Fit', tooltip: 'Fit to Screen' },
		{ id: 'separator-1', type: 'separator' as const },
		{ id: 'layout', type: 'select' as const, options: ['Dagre', 'Force', 'Grid'], value: 'Dagre' },
		{ id: 'separator-2', type: 'separator' as const },
		{ id: 'export', type: 'button' as const, icon: 'download', label: 'Export', tooltip: 'Export Graph' }
	];
</script>

<Story component={GraphToolbar} title="GraphToolbar" description="Toolbar for graph canvas with zoom, layout, and action buttons." {controls}>
	{#snippet children(values: any)}
		<GraphToolbar
			id="graph-toolbar"
			items={defaultItems}
			size={values.size}
			orientation={values.orientation}
			compact={values.compact}
			showTooltips={values.showTooltips}
		/>
	{/snippet}
</Story>

