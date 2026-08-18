<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Grid from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'zoom',
			type: 'range',
			min: 0.1,
			max: 2,
			step: 0.1,
			defaultValue: 1
		},
		{
			name: 'gridSize',
			type: 'range',
			min: 16,
			max: 128,
			step: 4,
			defaultValue: 50
		},
		{
			name: 'visible',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'color',
			type: 'text',
			defaultValue: 'var(--color-border-subtle, #e0e0e0)'
		}
	];
</script>

<Story
	{controls}
	component={Grid}
	title="Grid Component"
	description="SVG grid overlay with configurable size, opacity, and color."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Grid
				zoom={Number(values.zoom) || 1}
				gridSize={Number(values.gridSize) || 50}
				visible={Boolean(values.visible)}
				color={values.color || 'var(--color-border-subtle, #e0e0e0)'}
				class="_c2"
			/>
			<div class="_c3">
				zoom: {values.zoom}, gridSize: {values.gridSize}
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 360px;
		width: 100%;
		overflow: hidden;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
	}
	:global(._c2) {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
	}
	._c3 {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
