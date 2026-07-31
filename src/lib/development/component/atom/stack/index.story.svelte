<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Stack from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'direction',
			type: 'select',
			options: ['vertical', 'horizontal'],
			defaultValue: 'vertical'
		},
		{
			name: 'spacing',
			type: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '1rem'], // Include both token sizes and custom values
			defaultValue: 'md'
		},
		{
			name: 'align',
			type: 'select',
			options: ['start', 'center', 'end', 'stretch', 'baseline'],
			defaultValue: 'stretch'
		},
		{
			name: 'justify',
			type: 'select',
			options: ['start', 'center', 'end', 'between', 'around'],
			defaultValue: 'start'
		}
	];
</script>

<Story
	{controls}
	component={Stack}
	title="Stack Component"
	description="A flexible layout component for arranging elements in a linear fashion"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Stack {...values}>
				{#snippet children()}
					<div class="_c2">Item A</div>
					<div class="_c3">Item B</div>
					<div class="_c4">Item C</div>
				{/snippet}
			</Stack>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		min-height: 10rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		padding: 0.75rem;
	}
	._c2 {
		border-radius: 0.25rem;
		background-color: #f1f5f9;
		padding: 0.5rem;
	}
	._c3 {
		border-radius: 0.25rem;
		background-color: #e2e8f0;
		padding: 0.75rem;
	}
	._c4 {
		border-radius: 0.25rem;
		background-color: #cbd5e1;
		padding: 1rem;
	}
</style>
