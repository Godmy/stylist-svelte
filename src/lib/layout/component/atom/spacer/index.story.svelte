<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Spacer from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'size',
			type: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '16px'],
			defaultValue: 'md'
		},
		{
			name: 'axis',
			type: 'select',
			options: ['vertical', 'horizontal'],
			defaultValue: 'vertical'
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
		{#if values.axis === 'vertical'}
			<div class="_c1">
				<span class="_c2">Top</span>
				<Spacer {...values} />
				<span class="_c2">Bottom</span>
			</div>
		{:else}
			<div class="_c3">
				<span>Left</span>
				<Spacer {...values} />
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
