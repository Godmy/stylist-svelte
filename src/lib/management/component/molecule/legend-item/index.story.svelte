<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import LegendItem from './index.svelte';

	let clickCount = $state(0);

	const controls: SlotStory[] = [
		{ name: 'label', type: 'text', defaultValue: 'GraphQL Object' },
		{
			name: 'type',
			type: 'select',
			options: ['object', 'interface', 'union', 'enum', 'scalar', 'input'],
			defaultValue: 'object'
		},
		{ name: 'count', type: 'number', defaultValue: 5, min: 0 },
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
			defaultValue: 'primary'
		},
		{ name: 'active', type: 'boolean', defaultValue: true },
		{ name: 'interactive', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="molecules-legend-item"
	title="Molecules / Information / Management / LegendItem"
	component={LegendItem}
	category="Molecules/Information/Management"
	description="Legend row with type icon, count badge and optional interaction."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<LegendItem
				label={args.label}
				type={args.type}
				count={args.count}
				variant={args.variant}
				active={args.active}
				onClick={args.interactive ? () => (clickCount += 1) : undefined}
			/>
			<p class="_c2">Click count: {clickCount}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
