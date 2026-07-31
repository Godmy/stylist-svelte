<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import IconToolbar from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'orientation',
			type: 'select',
			defaultValue: 'horizontal',
			options: ['horizontal', 'vertical']
		},
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const items = [
		{
			name: 'select',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 4 10 8-6 1 1 6-2 .5-1.2-6.1L3 14z"/></svg>'
		},
		{
			name: 'text',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16"/><path d="M12 6v12"/><path d="M8 18h8"/></svg>'
		},
		{
			name: 'comment',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 17.5 3 20V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z"/></svg>'
		}
	] as const;

	let active = $state('select');
</script>

<Story
	{controls}
	component={IconToolbar}
	title="IconToolbar"
	description="Compact icon toolbar for domain and cluster pickers."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<IconToolbar
				{items}
				{active}
				label="tool"
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
