<script lang="ts">
	import type { SceneCamera } from '$stylist/architecture/type/attribute/camera';
	import Stage from '$stylist/architecture/atom/canvas/stage/index.svelte';
	import Grid from '$stylist/architecture/atom/canvas/grid/index.svelte';

	let {
		camera,
		worldWidth = 10000,
		worldHeight = 10000,
		showGrid = true,
		interactive = true,
		children
	}: {
		camera: SceneCamera;
		worldWidth?: number;
		worldHeight?: number;
		showGrid?: boolean;
		interactive?: boolean;
		children: import('svelte').Snippet;
	} = $props();

	let isDragging = $state(false);
	let lastX = $state(0);
	let lastY = $state(0);

	const handleMouseDown = (event: MouseEvent) => {
		if (!interactive) return;
		isDragging = true;
		lastX = event.clientX;
		lastY = event.clientY;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!interactive || !isDragging) return;
		const dx = event.clientX - lastX;
		const dy = event.clientY - lastY;
		camera.x -= dx / camera.zoom;
		camera.y -= dy / camera.zoom;
		lastX = event.clientX;
		lastY = event.clientY;
	};

	const handleMouseUp = () => {
		isDragging = false;
	};

	const handleWheel = (event: WheelEvent) => {
		if (!interactive) return;
		event.preventDefault();
		const delta = -event.deltaY * 0.001;
		const newZoom = Math.max(0.1, Math.min(5, camera.zoom * (1 + delta)));
		camera.zoom = newZoom;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (!interactive) return;

		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				camera.x -= 60 / camera.zoom;
				break;
			case 'ArrowRight':
				event.preventDefault();
				camera.x += 60 / camera.zoom;
				break;
			case 'ArrowUp':
				event.preventDefault();
				camera.y -= 60 / camera.zoom;
				break;
			case 'ArrowDown':
				event.preventDefault();
				camera.y += 60 / camera.zoom;
				break;
			case '+':
			case '=':
				event.preventDefault();
				camera.zoom = Math.min(5, camera.zoom * 1.12);
				break;
			case '-':
			case '_':
				event.preventDefault();
				camera.zoom = Math.max(0.1, camera.zoom / 1.12);
				break;
			case '0':
				event.preventDefault();
				camera.zoom = 1;
				break;
		}
	};
</script>

<div
	class="viewport"
	class:dragging={isDragging}
	role="button"
	aria-roledescription="pan and zoom viewport"
	aria-label="Interactive viewport"
	aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown + - 0"
	tabindex="0"
	onmousedown={handleMouseDown}
	onmousemove={handleMouseMove}
	onmouseup={handleMouseUp}
	onmouseleave={handleMouseUp}
	onwheel={handleWheel}
	onkeydown={handleKeyDown}
>
	<Grid zoom={camera.zoom} visible={showGrid} />
	<Stage {camera} {worldWidth} {worldHeight}>
		{@render children()}
	</Stage>
</div>

<style>
	.viewport {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		cursor: grab;
	}

	.viewport.dragging {
		cursor: grabbing;
	}
</style>

