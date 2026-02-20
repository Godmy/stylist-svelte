<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import GraphNode from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Node A'
		},
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md'
		},
		{
			name: 'color',
			type: 'text',
			defaultValue: '#3b82f6'
		}
	];
	
	// Fixed coordinates for the demo
	const id = 'node-1';
	const x = 40;
	const y = 40;
</script>

<Story {controls} component={GraphNode} title="GraphNode Component" description="A node in a graph visualization">
	{#snippet children(values: any)}
		<div class="relative h-40 rounded border">
			<GraphNode {id} {x} {y} {...values} />
		</div>
	{/snippet}
</Story>
