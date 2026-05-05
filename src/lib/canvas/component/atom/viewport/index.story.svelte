<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Viewport from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'zoom', type: 'range', min: 0.25, max: 2, step: 0.05, defaultValue: 1 },
		{ name: 'interactive', type: 'boolean', defaultValue: true },
		{ name: 'showGrid', type: 'boolean', defaultValue: true },
		{ name: 'worldWidth', type: 'number', defaultValue: 1600 },
		{ name: 'worldHeight', type: 'number', defaultValue: 1200 }
	];
</script>

<Story
	{controls}
	component={Viewport}
	title="Viewport Component"
	description="Interactive camera shell for world-space content. The scene uses named landmarks so pan and zoom are easier to read."
>
	{#snippet children(values: any)}
		<div class="viewport-shell">
			<div class="chip-row">
				<span>interactive: {values.interactive ? 'on' : 'off'}</span>
				<span>grid: {values.showGrid ? 'visible' : 'hidden'}</span>
				<span>zoom: {values.zoom}</span>
			</div>

			<div class="viewport-frame">
				<Viewport
					camera={{ x: 0, y: 0, zoom: Number(values.zoom) || 1 }}
					worldWidth={Number(values.worldWidth) || 1600}
					worldHeight={Number(values.worldHeight) || 1200}
					showGrid={Boolean(values.showGrid)}
					interactive={Boolean(values.interactive)}
				>
					<div class="landmark landmark-source">Source</div>
					<div class="landmark landmark-hub">Hub</div>
					<div class="landmark landmark-board">Board</div>
					<div class="route-note">Pan to inspect the full route.</div>
				</Viewport>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	.viewport-shell {
		display: grid;
		gap: 0.75rem;
		padding: 1rem;
		border-radius: 1rem;
		background: linear-gradient(180deg, #f8fafc, #eef2f7);
		border: 1px solid rgba(148, 163, 184, 0.24);
	}

	.chip-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.78rem;
		color: #475569;
	}

	.chip-row span {
		padding: 0.35rem 0.6rem;
		border-radius: 999px;
		background: white;
		border: 1px solid rgba(148, 163, 184, 0.3);
	}

	.viewport-frame {
		height: 420px;
		width: 100%;
		overflow: hidden;
		border-radius: 1rem;
		border: 1px solid rgba(148, 163, 184, 0.3);
		background: white;
	}

	.landmark {
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		color: white;
		font-size: 0.85rem;
		font-weight: 700;
		box-shadow: 0 12px 28px rgba(15, 23, 42, 0.16);
	}

	.landmark-source {
		left: 200px;
		top: 140px;
		width: 140px;
		height: 84px;
		background: #0f766e;
	}

	.landmark-hub {
		left: 620px;
		top: 260px;
		width: 180px;
		height: 104px;
		background: #b45309;
	}

	.landmark-board {
		left: 1040px;
		top: 180px;
		width: 200px;
		height: 96px;
		background: #1d4ed8;
	}

	.route-note {
		position: absolute;
		left: 520px;
		top: 500px;
		padding: 0.65rem 0.8rem;
		border-radius: 0.85rem;
		background: rgba(15, 23, 42, 0.9);
		color: #e2e8f0;
		font-size: 0.78rem;
	}
</style>
