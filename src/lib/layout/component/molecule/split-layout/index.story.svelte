<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SplitLayout from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'direction',
			type: 'select',
			defaultValue: 'horizontal',
			options: ['horizontal', 'vertical']
		},
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{
			name: 'primarySize',
			type: 'select',
			defaultValue: '2/3',
			options: ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4']
		},
		{
			name: 'secondarySize',
			type: 'select',
			defaultValue: '1/3',
			options: ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4']
		},
		{ name: 'responsive', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={SplitLayout}
	title="SplitLayout"
	description="Two-pane layout with configurable proportions."
	{controls}
>
	{#snippet children(values: any)}
		<SplitLayout
			direction={values.direction}
			gap={values.gap}
			primarySize={values.primarySize}
			secondarySize={values.secondarySize}
			responsive={values.responsive}
		>
			{#snippet primary()}
				<div class="_c1">Primary pane</div>
			{/snippet}
			{#snippet secondary()}
				<div class="_c2">Secondary pane</div>
			{/snippet}
		</SplitLayout>
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
