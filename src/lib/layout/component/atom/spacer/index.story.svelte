<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { CENTERED_LAYOUT_AXIS } from '$stylist/layout/const/array/centered-layout-axis';
	import Spacer from './index.svelte';

	import type { RecipeSpacer } from '$stylist/layout/interface/recipe/spacer';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'size',
			type: 'select',
			options: ['0.25rem', '0.5rem', '1rem', '1.5rem', '2rem', '3rem'],
			defaultValue: '1rem'
		},
		{
			name: 'axis',
			type: 'select',
			options: CENTERED_LAYOUT_AXIS,
			defaultValue: 'vertical'
		},
		{
			name: 'inline',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Spacer}
	title="Spacer Component"
	description="A flexible space component for layout purposes"
>
	{#snippet children(values: any)}
		{@const spacerProps = values as RecipeSpacer}
		{#if values.axis === 'vertical'}
			<div class="_c1">
				<span class="_c2">Top</span>
				<Spacer {...spacerProps} />
				<span class="_c2">Bottom</span>
			</div>
		{:else}
			<div class="_c3">
				<span>Left</span>
				<Spacer {...spacerProps} />
				<span>Right</span>
			</div>
		{/if}
	{/snippet}
</Story>

<style>
	._c1 {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.5rem;
	}
	._c2 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		display: flex;
		align-items: center;
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.5rem;
	}
</style>
