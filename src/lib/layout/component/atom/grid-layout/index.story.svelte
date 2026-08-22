<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import GridLayout from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'cols',
			type: 'range',
			min: 1,
			max: 6,
			step: 1,
			defaultValue: 2
		},
		{
			name: 'responsive',
			type: 'boolean',
			defaultValue: true,
			description: 'Ignored once "columns" overrides the track list below'
		},
		{
			name: 'columns',
			type: 'text',
			defaultValue: '',
			description: 'Raw grid-template-columns override, e.g. repeat(auto-fit, minmax(250px, 1fr))'
		},
		{
			name: 'gap',
			type: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			defaultValue: 'md'
		},
		{
			name: 'alignItems',
			type: 'select',
			options: ['start', 'center', 'end', 'stretch'],
			defaultValue: 'center'
		},
		{
			name: 'justifyContent',
			type: 'select',
			options: [
				'start',
				'center',
				'end',
				'space-between',
				'space-around',
				'space-evenly',
				'stretch'
			],
			defaultValue: 'stretch'
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
