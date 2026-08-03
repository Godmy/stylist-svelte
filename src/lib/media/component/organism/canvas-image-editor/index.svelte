<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
	import createCanvasImageEditorState from '$stylist/media/function/state/canvas-image-editor/index.svelte';
	import type { RecipeCanvasImageEditor } from '$stylist/media/interface/recipe/canvas-image-editor';

	let props: RecipeCanvasImageEditor & HTMLAttributes<HTMLCanvasElement> = $props();
	const state = createCanvasImageEditorState(props);
</script>

<canvas
	bind:this={state.canvasRef}
	width={state.width}
	height={state.height}
	class="canvas-image-editor__canvas"
	{...state.restProps}
	aria-label="Canvas image editor"
></canvas>

<style>
	.canvas-image-editor__toolbar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		background-color: #000000;
	}

	.canvas-image-editor__tool-button {
		padding: 0.5rem;
		border-radius: 0.375rem;
		color: #ffffff;
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	.canvas-image-editor__tool-button:hover {
		background-color: #ffffff;
	}
</style>
