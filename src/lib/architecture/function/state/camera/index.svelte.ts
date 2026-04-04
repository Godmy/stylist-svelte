import type { SceneCamera, SceneCameraInput } from '$stylist/architecture/type/struct/camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

const DEFAULT_CAMERA: SceneCamera = {
	x: 0,
	y: 0,
	depth: 500,
	zoom: 1,
	viewportWidth: 1280,
	viewportHeight: 720
};

function useCamera(initialCamera: SceneCameraInput = {}) {
	let camera = $state<SceneCamera>({
		...DEFAULT_CAMERA,
		...initialCamera
	});

	function setDepth(depth: number) {
		camera.depth = Math.min(1000, Math.max(0, depth));
	}

	function setZoom(zoom: number) {
		camera.zoom = Math.min(2.5, Math.max(0.35, zoom));
	}

	function setViewportSize(width: number, height: number) {
		camera.viewportWidth = Math.max(1, width);
		camera.viewportHeight = Math.max(1, height);
	}

	function panBy(dx: number, dy: number) {
		camera.x += dx;
		camera.y += dy;
	}

	function zoomBy(delta: number) {
		setZoom(camera.zoom * (1 + delta));
	}

	function zoomAtPoint(delta: number, pointX: number, pointY: number) {
		const oldZoom = camera.zoom;
		const worldX = camera.x + pointX / oldZoom;
		const worldY = camera.y + pointY / oldZoom;
		const nextZoom = Math.min(2.5, Math.max(0.35, oldZoom * (1 + delta)));

		camera.zoom = nextZoom;
		camera.x = worldX - pointX / nextZoom;
		camera.y = worldY - pointY / nextZoom;
	}

	function focusNode(node: SceneNode) {
		camera.x = node.position.x - camera.viewportWidth / 2;
		camera.y = node.position.y - camera.viewportHeight / 2;
		setDepth(node.depth);
	}

	function reset(nextCamera: SceneCameraInput = initialCamera) {
		camera = {
			...DEFAULT_CAMERA,
			...nextCamera
		};
	}

	return {
		get camera() {
			return camera;
		},
		get x() {
			return camera.x;
		},
		get y() {
			return camera.y;
		},
		get depth() {
			return camera.depth;
		},
		get zoom() {
			return camera.zoom;
		},
		setViewportSize,
		setDepth,
		setZoom,
		panBy,
		zoomBy,
		zoomAtPoint,
		focusNode,
		reset
	};
}

export { useCamera };
export default useCamera;

