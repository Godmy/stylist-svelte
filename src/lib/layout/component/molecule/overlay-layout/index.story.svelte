<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import OverlayLayout from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'overlayAlign',
			type: 'select',
			defaultValue: 'bottom-right',
			options: [
				'top-left',
				'top-center',
				'top-right',
				'center-left',
				'center',
				'center-right',
				'bottom-left',
				'bottom-center',
				'bottom-right',
				'fill'
			]
		},
		{ name: 'overlayPointerEvents', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={OverlayLayout}
	title="OverlayLayout"
	description="Stacks absolute-positioned overlay layers on top of a base element."
	{controls}
>
	{#snippet children(values: any)}
		<OverlayLayout
			overlayAlign={values.overlayAlign}
			overlayPointerEvents={values.overlayPointerEvents}
			class="_c1"
		>
			{#snippet base()}
				<div class="_c2"></div>
			{/snippet}
			{#snippet overlay()}
				<div class="_c3">Overlay</div>
			{/snippet}
		</OverlayLayout>
	{/snippet}
</Story>

<style>
	:global(._c1) {
		height: 12rem;
		width: 100%;
	}
	._c2 {
		height: 100%;
		width: 100%;
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
	}
	._c3 {
		border-radius: 0.375rem;
		background-color: var(--color-primary-500);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-inverse);
	}
</style>
