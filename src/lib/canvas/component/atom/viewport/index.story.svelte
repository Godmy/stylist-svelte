<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Viewport from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'zoom', type: 'range', min: 0.25, max: 2, step: 0.05, defaultValue: 1 },
		{ name: 'interactive', type: 'boolean', defaultValue: true },
		{ name: 'showGrid', type: 'boolean', defaultValue: true },
		{ name: 'worldWidth', type: 'number', defaultValue: 2000 },
		{ name: 'worldHeight', type: 'number', defaultValue: 2000 }
	];
</script>

<Story {controls} component={Viewport} title="Viewport Component" description="Interactive viewport with pan, zoom, grid, and stage composition.">
	{#snippet children(values: any)}
		<div class="h-[420px] w-full overflow-hidden rounded border border-[var(--color-border-primary)]">
			<Viewport
				camera={{ x: 0, y: 0, zoom: Number(values.zoom) || 1 }}
				worldWidth={Number(values.worldWidth) || 2000}
				worldHeight={Number(values.worldHeight) || 2000}
				showGrid={Boolean(values.showGrid)}
				interactive={Boolean(values.interactive)}
			>
				<div class="absolute left-[300px] top-[180px] h-24 w-24 rounded-xl bg-[var(--color-primary-500)]"></div>
				<div class="absolute left-[540px] top-[280px] h-32 w-40 rounded-2xl bg-[var(--color-danger-500)]"></div>
				<div class="absolute left-[180px] top-[420px] h-20 w-56 rounded-lg bg-[var(--color-success-500)]"></div>
			</Viewport>
		</div>
	{/snippet}
</Story>

