<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Badge from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger', 'info'] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;
	const examples = [
		{ label: 'Default', variant: 'default' },
		{ label: 'Ready', variant: 'success' },
		{ label: 'Review', variant: 'warning' },
		{ label: 'Blocked', variant: 'danger' },
		{ label: 'Info', variant: 'info' }
	] as const;

	type BadgeStoryProps = {
		label: string;
		variant: (typeof variantOptions)[number];
		size: (typeof sizeOptions)[number];
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'New' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: [...variantOptions] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-badge"
	title="Badge"
	component={Badge}
	category="Atoms"
	description="Pill-shaped badge for quick status indicators."
	tags={['status', 'label']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Badge
				label={(values as BadgeStoryProps).label || 'New'}
				variant={(values as BadgeStoryProps).variant}
				size={(values as BadgeStoryProps).size}
			/>

			<div class="_c3">
				{#each examples as example}
					<Badge label={example.label} variant={example.variant} size={(values as BadgeStoryProps).size} />
				{/each}
			</div>

			<div class="_c2">
				<p>Inline status marker for priorities, tags, counters, and short state labels.</p>
				<p>Variants map the marker to a semantic state; size should follow nearby text.</p>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	._c2 {
		display: grid;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
