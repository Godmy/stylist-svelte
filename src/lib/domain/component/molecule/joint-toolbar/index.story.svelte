<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import JointToolbar from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'orientation',
			type: 'select',
			defaultValue: 'horizontal',
			options: ['horizontal', 'vertical']
		},
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const availableJoints = ['atom', 'molecule', 'organism'] as const;
	let active = $state('atom');
</script>

<Story
	{controls}
	component={JointToolbar}
	title="JointToolbar"
	description="Joint-level selector filtered by the currently active cluster."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<JointToolbar
				{active}
				{availableJoints}
				orientation={values.orientation as 'horizontal' | 'vertical'}
				showLabel={Boolean(values.showLabel)}
				onSelect={(name) => {
					active = name;
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1rem;
	}
</style>
