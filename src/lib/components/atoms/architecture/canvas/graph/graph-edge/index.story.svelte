<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import GraphEdge from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'directed',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'type',
			type: 'select',
			options: ['line', 'curve', 'polyline'],
			defaultValue: 'line'
		}
	];
	
	// Fixed node IDs for the demo
	const fromNodeId = 'node-1';
	const toNodeId = 'node-2';
</script>

<Story {controls} component={GraphEdge} title="GraphEdge Component" description="A connection between nodes in a graph visualization">
	{#snippet children(values: any)}
		<div class="rounded border p-4">
			<GraphEdge {fromNodeId} {toNodeId} {...values} />
		</div>
	{/snippet}
</Story>
