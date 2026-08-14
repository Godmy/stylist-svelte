<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BaseCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Workspace Summary' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'All systems operational for the current release.'
		}
	];
</script>

<Story
	component={BaseCard}
	title="BaseCard"
	description="Generic information card with header and body slots."
	{controls}
>
	{#snippet children(values: any)}
		<BaseCard title={values.title} description={values.description}>
			{#snippet children()}
				<div class="_c1">Body content can contain any custom UI.</div>
			{/snippet}
		</BaseCard>
	{/snippet}
</Story>

<style>
	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
