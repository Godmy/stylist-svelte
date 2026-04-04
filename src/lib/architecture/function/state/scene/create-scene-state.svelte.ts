import { SceneObjectManager } from '$stylist/architecture/class/object-manager/scene/index';
import { SceneStyleManager } from '$stylist/architecture/class/style-manager/scene/index';
import type { SceneProps } from '$stylist/architecture/type/struct/scene';

const DEFAULT_SCENE_TITLE = 'WebGL Demo';
const DEFAULT_SCENE_ROTATE_HINT = 'LMB + drag to orbit the camera';
const DEFAULT_SCENE_ZOOM_HINT = 'Mouse wheel to zoom';

export function createSceneState(props: SceneProps) {
	const sceneManager = new SceneObjectManager();

	const title = $derived(props.title ?? DEFAULT_SCENE_TITLE);
	const rotateHint = $derived(props.rotateHint ?? DEFAULT_SCENE_ROTATE_HINT);
	const zoomHint = $derived(props.zoomHint ?? DEFAULT_SCENE_ZOOM_HINT);
	const containerClass = $derived(SceneStyleManager.getContainerClass(props.class?.toString() ?? ''));
	const canvasClass = $derived(SceneStyleManager.getCanvasClass(props.canvasClass?.toString() ?? ''));
	const overlayClass = $derived(
		SceneStyleManager.getOverlayClass(props.overlayClass?.toString() ?? '')
	);
	const restProps = $derived.by(() => {
		const {
			title: _title,
			rotateHint: _rotateHint,
			zoomHint: _zoomHint,
			canvasClass: _canvasClass,
			overlayClass: _overlayClass,
			class: _class,
			...rest
		} = props;

		return rest;
	});

	function mount(canvas: HTMLCanvasElement | null): void {
		if (!canvas) return;
		sceneManager.start(canvas);
	}

	function destroy(): void {
		sceneManager.stop();
	}

	return {
		get title() {
			return title;
		},
		get rotateHint() {
			return rotateHint;
		},
		get zoomHint() {
			return zoomHint;
		},
		get containerClass() {
			return containerClass;
		},
		get canvasClass() {
			return canvasClass;
		},
		get overlayClass() {
			return overlayClass;
		},
		get restProps() {
			return restProps;
		},
		mount,
		destroy
	};
}

export default createSceneState;
