<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import GridLayout from './index.svelte';
	
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	
	const controls: InterfaceControllerSettings[] = [
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
		<div class="rounded border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] p-3">
			<GridLayout {...values} {items} />
		</div>
	{/snippet}
</Story>




