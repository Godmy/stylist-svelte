<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Stage from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'zoom', type: 'range', min: 0.25, max: 2, step: 0.05, defaultValue: 1 },
		{ name: 'cameraX', type: 'number', defaultValue: 0 },
		{ name: 'cameraY', type: 'number', defaultValue: 0 },
		{ name: 'worldWidth', type: 'number', defaultValue: 2000 },
		{ name: 'worldHeight', type: 'number', defaultValue: 2000 }
	];
</script>

<Story {controls} component={Stage} title="Stage Component" description="World-space stage that transforms child content using a camera.">
	{#snippet children(values: any)}
		<div class="h-[420px] w-full overflow-hidden rounded border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)]">
			<Stage
				camera={{ x: Number(values.cameraX) || 0, y: Number(values.cameraY) || 0, zoom: Number(values.zoom) || 1 }}
				worldWidth={Number(values.worldWidth) || 2000}
				worldHeight={Number(values.worldHeight) || 2000}
			>
				<div class="absolute left-[280px] top-[220px] flex h-24 w-40 items-center justify-center rounded-lg bg-[var(--color-primary-500)] text-sm font-semibold text-[var(--color-text-inverse)]">
					Stage Node
				</div>
				<div class="absolute left-[620px] top-[360px] h-16 w-16 rounded-full bg-[var(--color-success-500)]"></div>
			</Stage>
		</div>
	{/snippet}
</Story>

