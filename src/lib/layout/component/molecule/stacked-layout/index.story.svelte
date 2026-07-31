<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import StackedLayout from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'direction',
			type: 'select',
			defaultValue: 'vertical',
			options: ['vertical', 'horizontal']
		},
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
		}
	];
</script>

<Story
	component={StackedLayout}
	title="StackedLayout"
	description="Linear stack layout for grouped interface blocks."
	{controls}
>
	{#snippet children(values: any)}
		<StackedLayout
			direction={values.direction}
			gap={values.gap}
			alignItems={values.alignItems}
			justifyContent={values.justifyContent}
		>
			{#snippet children()}
				<div class="_c1">Item A</div>
				<div class="_c1">Item B</div>
				<div class="_c1">Item C</div>
			{/snippet}
		</StackedLayout>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.75rem;
	}
</style>
