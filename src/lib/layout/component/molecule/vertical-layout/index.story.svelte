<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import VerticalLayout from './index.svelte';

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
		{ name: 'fillHeight', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	component={VerticalLayout}
	title="VerticalLayout"
	description="Column layout helper for forms and settings pages."
	{controls}
>
	{#snippet children(values: any)}
		<VerticalLayout
			gap={values.gap}
			alignItems={values.alignItems}
			justifyContent={values.justifyContent}
			fillHeight={values.fillHeight}
		>
			{#snippet children()}
				<div class="_c1">Header</div>
				<div class="_c1">Body</div>
				<div class="_c1">Footer</div>
			{/snippet}
		</VerticalLayout>
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
