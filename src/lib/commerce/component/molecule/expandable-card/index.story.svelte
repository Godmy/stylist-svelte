<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ExpandableCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Incident Details' },
		{ name: 'subtitle', type: 'text', defaultValue: 'EU region latency spike' },
		{ name: 'defaultExpanded', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'default',
			options: ['default', 'info', 'success', 'warning', 'danger']
		}
	];
</script>

<Story
	component={ExpandableCard}
	title="ExpandableCard"
	description="Card that reveals additional details on expand."
	{controls}
>
	{#snippet children(values: any)}
		<ExpandableCard
			title={values.title}
			subtitle={values.subtitle}
			defaultExpanded={values.defaultExpanded}
			disabled={values.disabled}
			variant={values.variant}
		>
			{#snippet summary()}<p class="_c1">Click to inspect timeline and mitigation.</p>{/snippet}
			{#snippet details()}<p class="_c2">
					Mitigation shipped at 15:40 UTC. Recovery complete.
				</p>{/snippet}
		</ExpandableCard>
	{/snippet}
</Story>

<style>
	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
