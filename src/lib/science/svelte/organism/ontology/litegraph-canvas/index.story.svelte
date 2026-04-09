<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import LitegraphCanvas from './index.svelte';
	import type { LitegraphConnection, LitegraphNode, LitegraphPort } from '$stylist/science/interface/record/science';

	const sampleNodes: LitegraphNode[] = [
		{ id: 'node-1', title: 'Input Node', type: 'source', x: 50, y: 80, color: 'var(--color-success-500)', width: 180, height: 100, inputs: [], outputs: [{ id: 'out-1', name: 'Text', type: 'string', direction: 'output', dataType: 'string', label: 'Text' }, { id: 'out-2', name: 'Value', type: 'number', direction: 'output', dataType: 'number', label: 'Value' }] satisfies LitegraphPort[], properties: [] },
		{ id: 'node-2', title: 'Transform', type: 'processor', x: 320, y: 150, color: 'var(--color-secondary-500)', width: 200, height: 120, inputs: [{ id: 'in-1', name: 'Input', type: 'string', direction: 'input', dataType: 'string', label: 'Input' }, { id: 'in-2', name: 'Factor', type: 'number', direction: 'input', dataType: 'number', label: 'Factor' }] satisfies LitegraphPort[], outputs: [{ id: 'out-1', name: 'Result', type: 'string', direction: 'output', dataType: 'string', label: 'Result' }] satisfies LitegraphPort[], properties: [] },
		{ id: 'node-3', title: 'Output Node', type: 'output', x: 600, y: 100, color: 'var(--color-warning-500)', width: 180, height: 100, inputs: [{ id: 'in-1', name: 'Result', type: 'string', direction: 'input', dataType: 'string', label: 'Result' }, { id: 'in-2', name: 'Meta', type: 'any', direction: 'input', dataType: 'any', label: 'Meta' }] satisfies LitegraphPort[], outputs: [], properties: [] }
	];

	const sampleConnections: LitegraphConnection[] = [
		{ id: 'conn-1', startX: 230, startY: 110, endX: 320, endY: 180, type: 'bezier', color: 'var(--color-primary-500)', active: true },
		{ id: 'conn-2', startX: 520, startY: 210, endX: 600, endY: 130, type: 'bezier', color: 'var(--color-primary-500)', active: true }
	];

	const controls: InterfaceControllerSettings[] = [];
</script>

<Story component={LitegraphCanvas} title="LitegraphCanvas" description="Litegraph canvas with zoom, grid and minimap." {controls}>
	{#snippet children()}
		<div style="height: 600px; padding: var(--spacing-6);">
			<div style="height: 100%; border: 1px solid var(--color-border-primary); border-radius: var(--border-radius-xl); overflow: hidden; background: var(--color-background-primary);">
				<LitegraphCanvas nodes={sampleNodes} connections={sampleConnections} showToolbar={true} showMiniMap={true} showGrid={true} gridMode="dot" panMode="drag" />
			</div>
		</div>
	{/snippet}
</Story>
