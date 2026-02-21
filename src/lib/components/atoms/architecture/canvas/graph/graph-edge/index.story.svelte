<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import GraphEdge from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'fromNodeId',
			type: 'text',
			defaultValue: 'node-1'
		},
		{
			name: 'toNodeId',
			type: 'text',
			defaultValue: 'node-2'
		},
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
</script>

<Story {controls} component={GraphEdge} title="GraphEdge Component" description="A connection between nodes in a graph visualization">
	{#snippet children(values: any)}
		<div class="rounded border border-slate-200 bg-slate-50 p-4">
			<div class="mb-3 text-xs text-slate-600">
				{values.fromNodeId} {values.directed ? '->' : '-'} {values.toNodeId} ({values.type})
			</div>
			<GraphEdge
				fromNodeId={values.fromNodeId as string}
				toNodeId={values.toNodeId as string}
				directed={values.directed as boolean}
				type={values.type as 'line' | 'curve' | 'polyline'}
			/>
		</div>
	{/snippet}
</Story>
