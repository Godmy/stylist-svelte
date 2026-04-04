<script lang="ts">
	import { createSceneState } from '$stylist/architecture/function/state/scene/create-scene-state.svelte';
	import type { SceneProps } from '$stylist/architecture/type/struct/scene/scene';

	let props: SceneProps = $props();
	const state = createSceneState(props);
	let canvasRef: HTMLCanvasElement | null = null;

	$effect(() => {
		if (!canvasRef) return;

		state.mount(canvasRef);

		return () => {
			state.destroy();
		};
	});
</script>

<div class={state.containerClass} {...state.restProps}>
	<canvas bind:this={canvasRef} class={state.canvasClass}></canvas>
	<div class={state.overlayClass}>
		<h2>{state.title}</h2>
		<p>{state.rotateHint}</p>
		<p>{state.zoomHint}</p>
	</div>
</div>

<style>
	.scene {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 600px;
	}

	.scene__canvas {
		width: 100%;
		height: 100%;
		display: block;
	}

	.scene__overlay {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: rgb(0 0 0 / 70%);
		color: white;
		padding: 1rem;
		border-radius: 0.5rem;
		font-family: monospace;
		font-size: 0.875rem;
		pointer-events: none;
	}

	.scene__overlay h2 {
		margin: 0 0 0.5rem;
		font-size: 1rem;
	}

	.scene__overlay p {
		margin: 0.25rem 0;
	}
</style>
