<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Grid from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
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

<Story {controls} component={Grid} title="Grid Component" description="SVG grid overlay with configurable size, opacity, and color.">
	{#snippet children(values: any)}
		<div class="relative h-[360px] w-full overflow-hidden rounded border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)]">
			<Grid
				zoom={Number(values.zoom) || 1}
				gridSize={Number(values.gridSize) || 50}
				visible={Boolean(values.visible)}
				color={values.color || 'var(--color-border-subtle, #e0e0e0)'}
				class="absolute inset-0 h-full w-full"
			/>
			<div class="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-text-secondary)]">
				zoom: {values.zoom}, gridSize: {values.gridSize}
			</div>
		</div>
	{/snippet}
</Story>
