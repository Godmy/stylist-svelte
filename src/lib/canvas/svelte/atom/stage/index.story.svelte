<script lang="ts">
	import Stage from './index.svelte';
	import type { SceneCamera } from '$stylist/architecture/type/struct/camera';

	let camera: SceneCamera = {
		x: 0,
		y: 0,
		depth: 500,
		zoom: 1,
		viewportWidth: 1920,
		viewportHeight: 1080
	};
</script>

<div style="width: 800px; height: 600px; border: 1px solid #ccc;">
	<Stage {camera} worldWidth={2000} worldHeight={2000}>
		<div style="position: absolute; left: 500px; top: 500px; width: 200px; height: 200px; background: #3498db;">
			Test Node
		</div>
	</Stage>
</div>

<p>
	Camera: x={camera.x}, y={camera.y}, zoom={camera.zoom}
</p>

