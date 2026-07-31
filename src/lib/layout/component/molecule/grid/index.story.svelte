<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Grid from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'cols', type: 'number', defaultValue: 3, min: 1, max: 4, step: 1 },
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'responsive', type: 'boolean', defaultValue: true },
		{
			name: 'alignItems',
			type: 'select',
			defaultValue: 'stretch',
			options: ['start', 'center', 'end', 'stretch']
		},
		{
			name: 'justifyContent',
			type: 'select',
			defaultValue: 'start',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly']
		}
	];
</script>

<Story
	component={Grid}
	title="Grid"
	description="Responsive CSS-grid helper for card collections."
	{controls}
>
	{#snippet children(values: any)}
		<Grid
			cols={values.cols}
			gap={values.gap}
			responsive={values.responsive}
			alignItems={values.alignItems}
			justifyContent={values.justifyContent}
		>
			{#snippet children()}
				{#each [1, 2, 3, 4, 5, 6] as item}
					<div class="_c1">
						Tile {item}
					</div>
				{/each}
			{/snippet}
		</Grid>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
