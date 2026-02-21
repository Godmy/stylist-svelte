<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import GraphNode from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Node A'
		},
		{
			name: 'x',
			type: 'text',
			defaultValue: '40'
		},
		{
			name: 'y',
			type: 'text',
			defaultValue: '40'
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

	const id = 'node-1';
</script>

<Story {controls} component={GraphNode} title="GraphNode Component" description="A node in a graph visualization">
	{#snippet children(values: any)}
		<div class="relative h-56 rounded border border-slate-200 bg-[radial-gradient(circle_at_1px_1px,#cbd5e1_1px,transparent_0)] [background-size:20px_20px]">
			<GraphNode
				{id}
				x={Number(values.x) || 0}
				y={Number(values.y) || 0}
				label={values.label as string}
				size={values.size as 'sm' | 'md' | 'lg'}
				color={values.color as string}
			/>
		</div>
	{/snippet}
</Story>
