<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { DrawingSurfaceStyleManager } from '$stylist/canvas/class/style-manager/drawing-surface';
	import { createDrawingSurfaceState } from '$stylist/canvas/function/state/drawing-surface';
	import type { DrawingSurfaceContract } from '$stylist/canvas/type/struct/drawing-surface/drawing-surface-contract';
	import type { DrawingSurfaceCanvasClearedEvent } from '$stylist/canvas/type/struct/drawing-surface/drawing-surface-canvas-cleared-event';
	import type { DrawingSurfaceExposeMethodsEvent } from '$stylist/canvas/type/struct/drawing-surface/drawing-surface-expose-methods-event';
	import type { DrawingSurfaceProps } from '$stylist/canvas/type/struct/drawing-surface/drawing-surface-props';

	const dispatch = createEventDispatcher<{
		'canvas-cleared': DrawingSurfaceCanvasClearedEvent;
		'expose-methods': DrawingSurfaceExposeMethodsEvent;
	}>();

	const contract: DrawingSurfaceContract & DrawingSurfaceProps = $props();
	let canvasRef: HTMLCanvasElement | null = null;
	const state = createDrawingSurfaceState(
		contract,
		(type, detail) => dispatch(type as 'canvas-cleared' | 'expose-methods', detail as never)
	);

	$effect(() => {
		state.fillBackground(canvasRef);
		state.exposeMethods(canvasRef);
	});
</script>

<canvas
	bind:this={canvasRef}
	width={state.width}
	height={state.height}
	class={DrawingSurfaceStyleManager.getCanvasClass(contract.class)}
	onmousedown={(event) => state.startDrawing(event, canvasRef)}
	onmousemove={(event) => state.draw(event, canvasRef)}
	onmouseup={() => state.stopDrawing(canvasRef)}
	onmouseleave={() => state.stopDrawing(canvasRef)}
	{...state.restProps}
></canvas>
