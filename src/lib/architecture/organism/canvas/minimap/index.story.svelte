<script lang="ts">
	import Minimap from './index.svelte';
	import type { LiteGraphNodeProps } from '$stylist';

	const sampleNodes: LiteGraphNodeProps[] = [
		{
			id: 'node-1',
			title: 'Source',
			type: 'source' as const,
			x: 100,
			y: 100,
			color: 'var(--color-success-500)',
			width: 180,
			height: 100,
			inputs: [],
			outputs: [],
			properties: []
		},
		{
			id: 'node-2',
			title: 'Processor A',
			type: 'processor' as const,
			x: 350,
			y: 200,
			color: 'var(--color-secondary-500)',
			width: 200,
			height: 120,
			inputs: [],
			outputs: [],
			properties: []
		},
		{
			id: 'node-3',
			title: 'Processor B',
			type: 'processor' as const,
			x: 600,
			y: 150,
			color: 'var(--color-secondary-500)',
			width: 200,
			height: 120,
			inputs: [],
			outputs: [],
			properties: []
		},
		{
			id: 'node-4',
			title: 'Output',
			type: 'output' as const,
			x: 850,
			y: 250,
			color: 'var(--color-warning-500)',
			width: 180,
			height: 100,
			inputs: [],
			outputs: [],
			properties: []
		},
		{
			id: 'node-5',
			title: 'Data Store',
			type: 'custom' as const,
			x: 200,
			y: 400,
			color: 'var(--color-info-500)',
			width: 160,
			height: 90,
			inputs: [],
			outputs: [],
			properties: [],
			selected: true
		}
	];
</script>

<div style="padding: var(--spacing-6); display: flex; gap: var(--spacing-8); align-items: flex-start;">
	<div style="border: 1px solid var(--color-border-primary); border-radius: var(--border-radius-xl); padding: var(--spacing-4); background: var(--color-background-primary);">
		<Minimap
			nodes={sampleNodes}
			zoom={1}
			offset={{ x: 0, y: 0 }}
			width={220}
			height={160}
			showZoomControls={true}
			showViewport={true}
		/>
	</div>

	<div style="border: 1px solid var(--color-border-primary); border-radius: var(--border-radius-xl); padding: var(--spacing-4); background: var(--color-background-primary);">
		<Minimap
			nodes={sampleNodes}
			zoom={0.8}
			offset={{ x: -100, y: -50 }}
			width={180}
			height={130}
			showZoomControls={false}
			showViewport={true}
		/>
	</div>
</div>
