<script lang="ts">
	import { createCanvasImageEditorState } from '$stylist/media/function/state/canvas-image-editor';
	import type { CanvasImageEditorRecipe } from '$stylist/media/interface/recipe/canvas-image-editor';

	let props: CanvasImageEditorRecipe = $props();
	const state = createCanvasImageEditorState(props);
</script>

<canvas
	bind:this={state.canvasRef}
	width={state.width}
	height={state.height}
	class={state.canvasClasses}
	{...state.restProps}
	aria-label="Canvas image editor"
></canvas>
