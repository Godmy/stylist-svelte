<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import type { LiteGraphNodeProps } from '$stylist/science/interface/recipe/litegraph-node';
	import Minimap from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'width', type: 'number', defaultValue: 220 },
		{ name: 'height', type: 'number', defaultValue: 160 },
		{ name: 'zoom', type: 'range', min: 0.25, max: 2, step: 0.05, defaultValue: 1 },
		{ name: 'showZoomControls', type: 'boolean', defaultValue: true },
		{ name: 'showViewport', type: 'boolean', defaultValue: true }
	];

	const sampleNodes: LiteGraphNodeProps[] = [
		{ id: 'node-1', title: 'Source', type: 'source' as const, x: 100, y: 100, color: 'var(--color-success-500)', width: 180, height: 100, inputs: [], outputs: [], properties: [] },
		{ id: 'node-2', title: 'Processor A', type: 'processor' as const, x: 350, y: 200, color: 'var(--color-secondary-500)', width: 200, height: 120, inputs: [], outputs: [], properties: [] },
		{ id: 'node-3', title: 'Processor B', type: 'processor' as const, x: 600, y: 150, color: 'var(--color-secondary-500)', width: 200, height: 120, inputs: [], outputs: [], properties: [] },
		{ id: 'node-4', title: 'Output', type: 'output' as const, x: 850, y: 250, color: 'var(--color-warning-500)', width: 180, height: 100, inputs: [], outputs: [], properties: [] },
		{ id: 'node-5', title: 'Data Store', type: 'custom' as const, x: 200, y: 400, color: 'var(--color-info-500)', width: 160, height: 90, inputs: [], outputs: [], properties: [], selected: true }
	];
</script>

<Story {controls} component={Minimap} title="Minimap Component" description="Compact graph navigator with viewport preview and zoom controls.">
	{#snippet children(values: any)}
		<div class="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4">
			<Minimap
				nodes={sampleNodes}
				zoom={Number(values.zoom) || 1}
				offset={{ x: 0, y: 0 }}
				width={Number(values.width) || 220}
				height={Number(values.height) || 160}
				showZoomControls={Boolean(values.showZoomControls)}
				showViewport={Boolean(values.showViewport)}
			/>
		</div>
	{/snippet}
</Story>
