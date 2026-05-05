<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Stage from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'zoom', type: 'range', min: 0.25, max: 2, step: 0.05, defaultValue: 1 },
		{ name: 'cameraX', type: 'number', defaultValue: 0 },
		{ name: 'cameraY', type: 'number', defaultValue: 0 },
		{ name: 'worldWidth', type: 'number', defaultValue: 1600 },
		{ name: 'worldHeight', type: 'number', defaultValue: 1200 }
	];
</script>

<Story
	{controls}
	component={Stage}
	title="Stage Component"
	description="World-space layer that transforms child content with the camera. This story highlights how fixed scene objects shift together."
>
	{#snippet children(values: any)}
		<div class="stage-shell">
			<div class="chip-row">
				<span>camera x: {values.cameraX}</span>
				<span>camera y: {values.cameraY}</span>
				<span>zoom: {values.zoom}</span>
			</div>

			<div class="stage-frame">
				<Stage
					camera={{ x: Number(values.cameraX) || 0, y: Number(values.cameraY) || 0, zoom: Number(values.zoom) || 1 }}
					worldWidth={Number(values.worldWidth) || 1600}
					worldHeight={Number(values.worldHeight) || 1200}
				>
					<div class="stage-node stage-node-primary">Module A</div>
					<div class="stage-node stage-node-secondary">Module B</div>
					<div class="stage-marker">Checkpoint</div>
				</Stage>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	.stage-shell {
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

	.stage-frame {
		height: 420px;
		width: 100%;
		overflow: hidden;
		border-radius: 1rem;
		border: 1px solid rgba(148, 163, 184, 0.3);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98)),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 31px,
				rgba(148, 163, 184, 0.08) 31px,
				rgba(148, 163, 184, 0.08) 32px
			);
	}

	.stage-node,
	.stage-marker {
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
	}

	.stage-node {
		border-radius: 1rem;
		color: white;
		font-size: 0.85rem;
	}

	.stage-node-primary {
		left: 240px;
		top: 180px;
		width: 180px;
		height: 96px;
		background: #1d4ed8;
	}

	.stage-node-secondary {
		left: 680px;
		top: 340px;
		width: 160px;
		height: 88px;
		background: #0f766e;
	}

	.stage-marker {
		left: 980px;
		top: 220px;
		width: 124px;
		height: 124px;
		border-radius: 999px;
		background: #f59e0b;
		color: #172033;
		font-size: 0.82rem;
	}
</style>
