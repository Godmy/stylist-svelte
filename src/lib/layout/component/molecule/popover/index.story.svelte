<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Popover from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Team members' },
		{ name: 'open', type: 'boolean', defaultValue: true },
		{
			name: 'position',
			type: 'select',
			defaultValue: 'bottom',
			options: ['top', 'bottom', 'left', 'right']
		}
	];
</script>

<Story
	component={Popover}
	title="Popover"
	description="Floating contextual panel anchored to a trigger."
	{controls}
>
	{#snippet children(values: any)}
		<Popover title={values.title} open={values.open} position={values.position}>
			{#snippet trigger()}
				<button class="_c1">SlotToggle popover</button>
			{/snippet}
			{#snippet content()}
				<ul class="_c2">
					<li>Ana Trujillo</li>
					<li>Devon Lane</li>
					<li>Leslie Alexander</li>
				</ul>
			{/snippet}
		</Popover>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.375rem;
		background-color: var(--color-primary-600);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-inverse);
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c2 > * + * {
		margin-top: 0.25rem;
	}
</style>
