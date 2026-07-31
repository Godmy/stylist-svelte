<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CenteredLayout from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'axis',
			type: 'select',
			defaultValue: 'both',
			options: ['both', 'horizontal', 'vertical']
		},
		{ name: 'fillHeight', type: 'boolean', defaultValue: true },
		{ name: 'fillWidth', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={CenteredLayout}
	title="CenteredLayout"
	description="Centers content along one or both axes."
	{controls}
>
	{#snippet children(values: any)}
		<CenteredLayout
			axis={values.axis}
			fillHeight={values.fillHeight}
			fillWidth={values.fillWidth}
			class="_c1"
		>
			{#snippet children()}
				<div class="_c2">Centered content</div>
			{/snippet}
		</CenteredLayout>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 12rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c2 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
