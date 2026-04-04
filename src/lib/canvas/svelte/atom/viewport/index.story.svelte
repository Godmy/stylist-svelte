<script lang="ts">
	import Viewport from './index.svelte';
	import type { SceneCamera } from '$stylist/architecture/type/struct/camera';

	let camera: SceneCamera = $state({
		x: 0,
		y: 0,
		depth: 500,
		zoom: 1,
		viewportWidth: 1920,
		viewportHeight: 1080
	});
</script>

<div style="width: 800px; height: 600px; border: 1px solid #ccc;">
	<Viewport {camera} worldWidth={2000} worldHeight={2000} showGrid={true} interactive={true}>
		<!-- Demo nodes -->
		<div style="position: absolute; left: 500px; top: 500px; width: 100px; height: 100px; background: #3498db; border-radius: 8px;" />
		<div style="position: absolute; left: 800px; top: 400px; width: 150px; height: 150px; background: #e74c3c; border-radius: 12px;" />
		<div style="position: absolute; left: 400px; top: 800px; width: 200px; height: 200px; background: #2ecc71; border-radius: 16px;" />
	</Viewport>
</div>

<div style="margin-top: 20px; font-family: monospace; font-size: 12px;">
	<p>Camera:</p>
	<p>x: {camera.x.toFixed(2)}, y: {camera.y.toFixed(2)}, zoom: {camera.zoom.toFixed(2)}</p>
	<p style="color: #666;">Drag to pan, scroll to zoom</p>
</div>

