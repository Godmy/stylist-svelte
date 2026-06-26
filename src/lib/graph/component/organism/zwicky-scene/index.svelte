<script lang="ts">
	import { onMount } from 'svelte';
	import createZwickySceneState from '$stylist/graph/function/state/zwicky-scene/index.svelte';
	import GraphLegend from '$stylist/graph/component/molecule/graph-legend/index.svelte';
	import type { ZwickySceneProps } from '$stylist/graph/type/struct/zwicky-scene-props';

	let props: ZwickySceneProps = $props();
	const state = createZwickySceneState(props);
	let canvasRef: HTMLCanvasElement | null = null;

	onMount(() => {
		state.mount(canvasRef);
		return () => state.destroy();
	});
</script>

<div class={state.containerClass} {...state.restProps}>
	<canvas bind:this={canvasRef} class={state.canvasClass}></canvas>

	<div class={state.overlayClass}>
		<span class="zwicky-scene__badge">WebGL2 · Instanced</span>
		<h2 class="zwicky-scene__title">{state.title}</h2>

		<div class="zwicky-scene__metrics">
			<div class="zwicky-scene__metric">
				<span>{state.nodeCount.toLocaleString()}</span>
				<label>nodes</label>
			</div>
			<div class="zwicky-scene__metric">
				<span>{state.edgeCount.toLocaleString()}</span>
				<label>edges</label>
			</div>
			<div class="zwicky-scene__metric">
				<span>{state.isLoaded ? 'GPU' : '—'}</span>
				<label>render</label>
			</div>
		</div>

		{#if state.selectedNode}
			<div class="zwicky-scene__selection">
				<label>selected</label>
				<code class="zwicky-scene__path">{state.selectedNode.path}</code>
				<div class="zwicky-scene__tags">
					<span>{state.selectedNode.domain}</span>
					<span>{state.selectedNode.cluster}</span>
					<span>{state.selectedNode.joint}</span>
				</div>
				<div class="zwicky-scene__deps">
					<label>{state.selectedNode.dependencyIds.length} deps</label>
				</div>
			</div>
		{/if}

		<div class="zwicky-scene__legend-wrap">
			<GraphLegend />
		</div>

		<p class="zwicky-scene__hint">Drag to orbit · Wheel to zoom · F to fit · Click to select</p>
	</div>
</div>

<style>
	.zwicky-scene {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 640px;
		overflow: hidden;
		background:
			radial-gradient(ellipse at 20% 15%, rgb(18 56 88 / 40%), transparent 40%),
			radial-gradient(ellipse at 80% 85%, rgb(64 22 88 / 30%), transparent 38%),
			radial-gradient(ellipse at 60% 10%, rgb(22 80 56 / 22%), transparent 32%),
			linear-gradient(145deg, #04080f, #0c0e18 55%, #100c14);
	}

	.zwicky-scene__canvas {
		width: 100%;
		height: 100%;
		display: block;
		min-height: inherit;
	}

	.zwicky-scene__overlay {
		position: absolute;
		top: 1rem;
		left: 1rem;
		width: min(20rem, calc(100vw - 2rem));
		background: rgb(6 9 14 / 82%);
		border: 1px solid rgb(255 255 255 / 9%);
		color: rgb(225 235 248);
		padding: 0.9rem 1rem;
		border-radius: 0.6rem;
		box-shadow:
			0 0 0 1px rgb(255 255 255 / 4%),
			0 2rem 5rem rgb(0 0 0 / 42%);
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
		font-size: 0.85rem;
		pointer-events: none;
		backdrop-filter: blur(20px);
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.zwicky-scene__badge {
		display: block;
		width: fit-content;
		padding: 0.16rem 0.5rem;
		border-radius: 999px;
		border: 1px solid rgb(100 220 180 / 25%);
		color: rgb(120 230 190);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.zwicky-scene__title {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 660;
		line-height: 1.15;
		color: rgb(240 248 255);
	}

	.zwicky-scene__metrics {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.45rem;
	}

	.zwicky-scene__metric {
		padding: 0.55rem 0.65rem;
		border: 1px solid rgb(255 255 255 / 8%);
		border-radius: 0.4rem;
		background: rgb(255 255 255 / 4%);
	}

	.zwicky-scene__metric span {
		display: block;
		font-size: 1rem;
		font-weight: 700;
		color: rgb(240 250 255);
	}

	.zwicky-scene__metric label {
		display: block;
		margin-top: 0.1rem;
		font-size: 0.66rem;
		text-transform: uppercase;
		color: rgb(155 175 200);
	}

	.zwicky-scene__selection {
		padding: 0.6rem 0.7rem;
		border: 1px solid rgb(255 255 255 / 8%);
		border-radius: 0.4rem;
		background: rgb(255 255 255 / 4%);
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.zwicky-scene__selection > label {
		font-size: 0.66rem;
		text-transform: uppercase;
		color: rgb(155 175 200);
	}

	.zwicky-scene__path {
		font-family: 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
		font-size: 0.68rem;
		color: rgb(140 220 200);
		word-break: break-all;
	}

	.zwicky-scene__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.zwicky-scene__tags span {
		padding: 0.1rem 0.4rem;
		border-radius: 999px;
		background: rgb(255 255 255 / 8%);
		font-size: 0.65rem;
		color: rgb(190 210 230);
	}

	.zwicky-scene__deps label {
		font-size: 0.68rem;
		color: rgb(155 175 200);
	}

	.zwicky-scene__legend-wrap {
		pointer-events: all;
	}

	.zwicky-scene__hint {
		margin: 0;
		font-size: 0.62rem;
		color: rgb(100 120 145);
		line-height: 1.5;
	}

	@media (max-width: 640px) {
		.zwicky-scene {
			min-height: 520px;
		}

		.zwicky-scene__overlay {
			right: 0.75rem;
			left: 0.75rem;
			width: auto;
		}
	}
</style>
