<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import GridLayout from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
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

<Story
	{controls}
	component={GridLayout}
	title="GridLayout Component"
	description="A responsive grid layout component"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<GridLayout {...values} {items} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 0.75rem;
	}
</style>
