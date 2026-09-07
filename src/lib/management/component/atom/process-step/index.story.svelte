<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ProcessStep from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'number',
			type: 'text',
			defaultValue: '1'
		},
		{
			name: 'title',
			type: 'text',
			defaultValue: 'PLAN'
		},
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Product Strategy'
		},
		{
			name: 'agent',
			type: 'text',
			defaultValue: 'Codex'
		},
		{
			name: 'active',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={ProcessStep}
	title="ProcessStep Component"
	description="A component to display process steps in a workflow"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProcessStep
				number={Number(values.number) || 1}
				title={values.title as string}
				description={values.description as string}
				agent={values.agent as string}
				active={values.active as boolean}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 28rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
</style>
