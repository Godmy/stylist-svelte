<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SideBySideLayout from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
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
		},
		{ name: 'responsive', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={SideBySideLayout}
	title="SideBySideLayout"
	description="Two-section responsive layout container."
	{controls}
>
	{#snippet children(values: any)}
		<SideBySideLayout
			gap={values.gap}
			alignItems={values.alignItems}
			justifyContent={values.justifyContent}
			responsive={values.responsive}
			sections={[
				{
					id: 'left',
					size: '2/3',
					content: (() => ({
						render: () => '<div class="_c1">Left section</div>'
					})) as any
				},
				{
					id: 'right',
					size: '1/3',
					content: (() => ({
						render: () => '<div class="_c2">Right section</div>'
					})) as any
				}
			]}
		/>
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
	}
	._c2 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
</style>
