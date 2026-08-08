<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import createCanvasImageEditorState from '$stylist/image/function/state/canvas-image-editor/index.svelte';
	import type { RecipeCanvasImageEditor } from '$stylist/image/interface/recipe/canvas-image-editor';

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
