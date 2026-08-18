<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import WidgetContainer from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Deployment status' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Region: us-east-1' },
		{ name: 'collapsible', type: 'boolean', defaultValue: true },
		{ name: 'initiallyCollapsed', type: 'boolean', defaultValue: false },
		{ name: 'draggable', type: 'boolean', defaultValue: true },
		{ name: 'maximizable', type: 'boolean', defaultValue: true },
		{ name: 'resizable', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	component={WidgetContainer}
	title="WidgetContainer"
	description="Card-like widget shell with controls and collapse behavior."
	{controls}
>
	{#snippet children(values: any)}
		<WidgetContainer
			title={values.title}
			subtitle={values.subtitle}
			collapsible={values.collapsible}
			initiallyCollapsed={values.initiallyCollapsed}
			draggable={values.draggable}
			maximizable={values.maximizable}
			resizable={values.resizable}
		>
			{#snippet content()}
				<div class="_c1">No incidents detected in the last 24 hours.</div>
			{/snippet}
		</WidgetContainer>
	{/snippet}
</Story>

<style>
	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
