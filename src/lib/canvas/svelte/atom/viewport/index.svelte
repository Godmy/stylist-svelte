<script lang="ts">
	import type { ViewportContract } from '$stylist/canvas/type/struct/viewport';
	import { ViewportStyleManager } from '$stylist/canvas/class/style-manager/viewport';
	import Stage from '$stylist/canvas/svelte/atom/stage/index.svelte';
	import Grid from '$stylist/layout/svelte/atom/grid/index.svelte';

	type ViewportProps = ViewportContract & {
		camera: { x: number; y: number; zoom: number };
		interactive?: boolean;
		showGrid?: boolean;
		worldWidth?: number;
		worldHeight?: number;
	};

	const contract: ViewportProps = $props();
	const { camera } = contract;

	let isDragging = $state(false);
	let lastX = $state(0);
	let lastY = $state(0);

	const handleMouseDown = (event: MouseEvent) => {
		if (!contract.interactive) return;
		isDragging = true;
		lastX = event.clientX;
		lastY = event.clientY;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!contract.interactive || !isDragging) return;
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
		if (!contract.interactive) return;
		event.preventDefault();
		const delta = -event.deltaY * 0.001;
		const newZoom = Math.max(0.1, Math.min(5, camera.zoom * (1 + delta)));
		camera.zoom = newZoom;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (!contract.interactive) return;

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
	const classString = typeof contract.class === 'string' ? contract.class : undefined;
</script>

<div
	class={ViewportStyleManager.getViewportClass(isDragging, classString)}
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
	<Grid zoom={camera.zoom} visible={contract.showGrid} />
	<Stage camera={camera} worldWidth={contract.worldWidth} worldHeight={contract.worldHeight}>
		{@render contract.children?.()}
	</Stage>
</div>
