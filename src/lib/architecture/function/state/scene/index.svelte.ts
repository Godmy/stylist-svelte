import { SceneObjectManager } from '$stylist/architecture/class/object-manager/scene/index';
import { SceneStyleManager } from '$stylist/architecture/class/style-manager/scene/index';
import type { SceneProps } from '$stylist/architecture/type/struct/scene-props';
import type { SceneDebugInfo } from '$stylist/architecture/type/struct/scene-debug-info';

const DEFAULT_SCENE_TITLE = 'WebGL Demo';
const DEFAULT_SCENE_ROTATE_HINT = 'LMB + drag to orbit the camera';
const DEFAULT_SCENE_ZOOM_HINT = 'Mouse wheel to zoom';

export function createSceneState(props: SceneProps) {
	const sceneManager = new SceneObjectManager();
	let debugInfo = $state<SceneDebugInfo>({
		mounted: false,
		context: 'none',
		glVersion: 'none',
		glslVersion: 'none',
		programLinked: false,
		uniformsReady: false,
		cubeReady: false,
		depthTest: false,
		canvasClient: 'none',
		canvasBuffer: 'none',
		viewport: 'none',
		devicePixelRatio: '1.00',
		drawCount: 0,
		lastError: null,
		cameraPosition: 'none',
		radius: '0.00',
		angles: '0.00, 0.00',
		cubeRotation: '0.00',
		sceneObjects: 0,
		sceneFitRadius: '0.00',
		sceneMolecules: 0,
		cameraPreset: 'iso',
		hoveredAtom: 'none',
		selectedAtom: 'none',
		selectedMolecule: 'none',
		shaderProfile: 'unknown'
	});
	let debugTimer: ReturnType<typeof setInterval> | null = null;

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

		debugInfo = {
			...debugInfo,
			mounted: true,
			canvasClient: `${canvas.clientWidth}x${canvas.clientHeight}`,
			canvasBuffer: `${canvas.width}x${canvas.height}`,
			lastError: null
		};

		try {
			sceneManager.start(canvas);
			debugInfo = sceneManager.getDebugInfo();
		} catch (error) {
			debugInfo = {
				...debugInfo,
				lastError: error instanceof Error ? error.message : String(error)
			};
			return;
		}

		if (debugTimer !== null) {
			clearInterval(debugTimer);
		}

		debugTimer = setInterval(() => {
			debugInfo = sceneManager.getDebugInfo();
		}, 120);
	}

	function destroy(): void {
		if (debugTimer !== null) {
			clearInterval(debugTimer);
			debugTimer = null;
		}

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
		get debugInfo() {
			return debugInfo;
		},
		mount,
		destroy
	};
}

export default createSceneState;
