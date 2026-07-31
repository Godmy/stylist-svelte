<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import HorizontalLayout from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'gap',
			type: 'select',
			options: ['none', 'sm', 'md', 'lg', 'xl'],
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
			options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
			defaultValue: 'start'
		},
		{
			name: 'wrap',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story
	{controls}
	component={HorizontalLayout}
	title="HorizontalLayout Component"
	description="A flexible horizontal layout component"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<HorizontalLayout {...values}>
				{#snippet children()}
					<div class="_c2">Item 1</div>
					<div class="_c2">Item 2</div>
					<div class="_c2">Item 3</div>
				{/snippet}
			</HorizontalLayout>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.75rem;
	}
	._c2 {
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.5rem;
	}
</style>
