<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DomainToolbar from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'orientation',
			type: 'select',
			defaultValue: 'vertical',
			options: ['horizontal', 'vertical']
		},
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const domains = ['workspace', 'button', 'dialog', 'tree', 'webgl'];
	let active = $state('button');
</script>

<Story
	{controls}
	component={DomainToolbar}
	title="DomainToolbar"
	description="Primary domain navigation rail used by the domain explorer."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DomainToolbar
				{active}
				{domains}
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
