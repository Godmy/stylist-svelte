<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import GridLayout from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'columns',
			type: 'text',
			defaultValue: 'repeat(auto-fit, minmax(250px, 1fr))'
		},
		{
			name: 'gap',
			type: 'text',
			defaultValue: '1rem'
		}
	];
	
	// Define sample items for the grid
	const items = [
		{ id: 'a', content: 'Item A' },
		{ id: 'b', content: 'Item B' },
		{ id: 'c', content: 'Item C', colSpan: 2 },
		{ id: 'd', content: 'Item D' }
	];
</script>

<Story {controls} component={GridLayout} title="GridLayout Component" description="A responsive grid layout component">
	{#snippet children(values: any)}
		<GridLayout {...values} {items} />
	{/snippet}
</Story>
