<script lang="ts">
	import type { SceneCamera } from '$stylist/architecture/type/attribute/camera';

	let {
		camera,
		worldWidth = 10000,
		worldHeight = 10000,
		children
	}: {
		camera: SceneCamera;
		worldWidth?: number;
		worldHeight?: number;
		children: import('svelte').Snippet;
	} = $props();
</script>

<div class="stage" style="--world-width: {worldWidth}px; --world-height: {worldHeight}px;">
	<div
		class="world"
		style="transform: translate({-camera.x}px, {-camera.y}px) scale({camera.zoom});"
	>
		{@render children()}
	</div>
</div>

<style>
	.stage {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: var(--color-background-primary, #f5f5f5);
	}

	.world {
		position: absolute;
		width: var(--world-width);
		height: var(--world-height);
		transform-origin: 0 0;
		will-change: transform;
	}
</style>

