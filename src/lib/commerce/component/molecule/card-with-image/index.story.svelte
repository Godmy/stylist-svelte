<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CardWithImage from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Team Retreat 2026' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Lisbon, Portugal' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Plan agenda, sessions, and travel logistics.'
		},
		{ name: 'image', type: 'text', defaultValue: '' }
	];
</script>

<Story
	component={CardWithImage}
	title="CardWithImage"
	description="Media-first card with optional footer and action areas."
	{controls}
>
	{#snippet children(values: any)}
		<CardWithImage
			title={values.title}
			subtitle={values.subtitle}
			description={values.description}
			image={values.image}
		>
			{#snippet footer()}
				<div class="_c1">Updated 2 hours ago</div>
			{/snippet}
		</CardWithImage>
	{/snippet}
</Story>

<style>
	._c1 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
</style>
