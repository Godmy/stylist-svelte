<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ClusterToolbar from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'orientation',
			type: 'select',
			defaultValue: 'horizontal',
			options: ['horizontal', 'vertical']
		},
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	let active = $state('component');
</script>

<Story
	{controls}
	component={ClusterToolbar}
	title="ClusterToolbar"
	description="Cluster switcher backed by the shared icon toolbar."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ClusterToolbar
				{active}
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
