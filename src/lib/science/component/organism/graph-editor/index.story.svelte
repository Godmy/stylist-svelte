<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import GraphEditor from './index.svelte';
	import type { LitegraphNodeRecipe } from '$stylist/science/interface/recipe/litegraph-node';
	import type { LiteGraphPort } from '$stylist/science/type/struct/litegraph-port';
	import type { ConnectionLineRecipe } from '$stylist/science/interface/recipe/connection-line';
	import type { SlotGraphToolbarItem as GraphToolbarItem } from '$stylist/science/interface/slot/graph-toolbar-item';

	const sampleNodes: LitegraphNodeRecipe[] = [
		{ id: 'node-1', title: 'Data Source', type: 'source', x: 100, y: 100, color: 'var(--color-success-500)', inputs: [], outputs: [{ id: 'out-1', direction: 'output', dataType: 'any', label: 'Data' }] satisfies LiteGraphPort[], properties: [] },
		{ id: 'node-2', title: 'Processor', type: 'processor', x: 400, y: 150, color: 'var(--color-secondary-500)', inputs: [{ id: 'in-1', direction: 'input', dataType: 'any', label: 'Input' }] satisfies LiteGraphPort[], outputs: [{ id: 'out-1', direction: 'output', dataType: 'any', label: 'Result' }] satisfies LiteGraphPort[], properties: [] },
		{ id: 'node-3', title: 'Output', type: 'output', x: 700, y: 100, color: 'var(--color-warning-500)', inputs: [{ id: 'in-1', direction: 'input', dataType: 'any', label: 'Result' }] satisfies LiteGraphPort[], outputs: [], properties: [] }
	];

	const sampleConnections: ConnectionLineRecipe[] = [
		{ id: 'conn-1', startX: 320, startY: 170, endX: 400, endY: 170, type: 'bezier', color: 'var(--color-primary-500)', active: true },
		{ id: 'conn-2', startX: 620, startY: 170, endX: 700, endY: 120, type: 'bezier', color: 'var(--color-primary-500)', active: true }
	];

	const toolbarItems: GraphToolbarItem[] = [
		{ id: 'save', type: 'button', icon: 'save', label: 'Save' },
		{ id: 'export', type: 'button', icon: 'download', label: 'Export' }
	];

	const controls: InterfaceControllerSettings[] = [];
</script>

<Story component={GraphEditor} title="GraphEditor" description="Ontology graph editor with palette, canvas and properties panel." {controls}>
	{#snippet children()}
		<div style="height: 600px; padding: var(--spacing-6);">
			<div style="height: 100%; border: 1px solid var(--color-border-primary); border-radius: var(--border-radius-xl); overflow: hidden; background: var(--color-background-primary);">
				<GraphEditor nodes={sampleNodes} connections={sampleConnections} showToolbar={true} showMiniMap={true} showNodePalette={true} showPropertiesPanel={true} showGrid={true} toolbarItems={toolbarItems as any} />
			</div>
		</div>
	{/snippet}
</Story>
