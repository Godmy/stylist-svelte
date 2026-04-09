<script lang="ts">
	import { onMount } from 'svelte';
	import { createSceneState } from '$stylist/architecture/function/state/scene';
	import type { SceneProps } from '$stylist/architecture/type/struct/scene-props';

	let props: SceneProps = $props();
	const state = createSceneState(props);
	let canvasRef: HTMLCanvasElement | null = null;

	onMount(() => {
		if (canvasRef) {
			state.mount(canvasRef);
		}

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
		<p>Click object to select</p>
		<p>1 iso | 2 top | 3 front | F fit scene | Shift+F fit selection</p>
		<hr class="scene__divider" />
		<p>mounted: {state.debugInfo.mounted ? 'yes' : 'no'}</p>
		<p>context: {state.debugInfo.context}</p>
		<p>gl version: {state.debugInfo.glVersion}</p>
		<p>glsl: {state.debugInfo.glslVersion}</p>
		<p>shader profile: {state.debugInfo.shaderProfile}</p>
		<p>program linked: {state.debugInfo.programLinked ? 'yes' : 'no'}</p>
		<p>uniforms ready: {state.debugInfo.uniformsReady ? 'yes' : 'no'}</p>
		<p>cube ready: {state.debugInfo.cubeReady ? 'yes' : 'no'}</p>
		<p>depth test: {state.debugInfo.depthTest ? 'on' : 'off'}</p>
		<p>canvas client: {state.debugInfo.canvasClient}</p>
		<p>canvas buffer: {state.debugInfo.canvasBuffer}</p>
		<p>viewport: {state.debugInfo.viewport}</p>
		<p>dpr: {state.debugInfo.devicePixelRatio}</p>
		<p>draw count: {state.debugInfo.drawCount}</p>
		<p>camera: {state.debugInfo.cameraPosition}</p>
		<p>camera preset: {state.debugInfo.cameraPreset}</p>
		<p>radius: {state.debugInfo.radius}</p>
		<p>scene fit radius: {state.debugInfo.sceneFitRadius}</p>
		<p>angles: {state.debugInfo.angles}</p>
		<p>cube rotation: {state.debugInfo.cubeRotation}</p>
		<p>scene objects: {state.debugInfo.sceneObjects}</p>
		<p>scene molecules: {state.debugInfo.sceneMolecules}</p>
		<p>hovered atom: {state.debugInfo.hoveredAtom}</p>
		<p>selected atom: {state.debugInfo.selectedAtom}</p>
		<p>selected molecule: {state.debugInfo.selectedMolecule}</p>
		{#if state.debugInfo.lastError}
			<p>error: {state.debugInfo.lastError}</p>
		{/if}
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
		width: min(28rem, calc(100vw - 2rem));
		max-height: calc(100vh - 2rem);
		overflow: auto;
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

	.scene__divider {
		margin: 0.6rem 0;
		border: 0;
		border-top: 1px solid rgb(255 255 255 / 15%);
	}
</style>
