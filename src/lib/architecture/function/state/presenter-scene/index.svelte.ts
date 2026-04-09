import { PresenterSceneStyleManager } from '$stylist/architecture/class/style-manager/presenter-scene';
import { projectSceneCoordinate } from '$stylist/architecture/function/script/project-scene-coordinate';
import { resolvePresenterSceneLinks } from '$stylist/architecture/function/script/scene/presenter';
import { useCamera } from '$stylist/architecture/function/state/camera';
import type { SceneCamera } from '$stylist/architecture/type/struct/scene-camera';
import type { PresenterSceneContract } from '$stylist/architecture/type/struct/presenter-scene';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export function createPresenterSceneState(contract: PresenterSceneContract) {
	let selectedNodeId = $state(contract.nodes?.[0]?.id ?? '');
	let isDragging = $state(false);
	let dragOriginX = $state(0);
	let dragOriginY = $state(0);

	const cameraState = useCamera(contract.camera ?? {});
	const camera = $derived.by<SceneCamera>(() => cameraState.camera);
	const title = $derived(contract.title ?? 'Presenter Scene');
	const sectionClass = $derived(PresenterSceneStyleManager.getSectionClass(String(contract.class ?? '')));
	const viewportClass = $derived(PresenterSceneStyleManager.getViewportClass(isDragging));
	const selectedNode = $derived(
		contract.nodes?.find((node) => node.id === selectedNodeId) ?? contract.nodes?.[0] ?? null
	);
	const sceneLinks = $derived.by(() => resolvePresenterSceneLinks(contract.nodes ?? []));
	const showHeader = $derived(contract.showHeader ?? true);
	const showDepthControls = $derived(contract.showDepthControls ?? true);
	const showGrid = $derived(contract.showGrid ?? true);
	const showLinks = $derived(contract.showLinks ?? true);
	const showInspector = $derived(contract.showInspector ?? true);

	function syncCamera(): void {
		cameraState.setDepth(contract.camera?.depth ?? 500);
		cameraState.setZoom(contract.camera?.zoom ?? 1);
	}

	function syncSelectedNode(): void {
		selectedNodeId = contract.nodes?.[0]?.id ?? '';
	}

	function setViewportSize(width: number, height: number): void {
		cameraState.setViewportSize(width, height);
	}

	function focusNode(node: SceneNode): void {
		selectedNodeId = node.id;
		cameraState.focusNode(node);
		contract.onfocusnode?.(node);
	}

	function stepDepth(delta: number): void {
		cameraState.setDepth(camera.depth + delta);
	}

	function resetCamera(): void {
		cameraState.reset({
			depth: contract.camera?.depth,
			zoom: contract.camera?.zoom,
			viewportWidth: camera.viewportWidth,
			viewportHeight: camera.viewportHeight
		});
	}

	function handleWheel(event: WheelEvent, bounds: DOMRect | null | undefined): void {
		event.preventDefault();
		if (!bounds) return;

		cameraState.zoomAtPoint(
			event.deltaY < 0 ? 0.12 : -0.12,
			event.clientX - bounds.left,
			event.clientY - bounds.top
		);
	}

	function handlePointerDown(event: PointerEvent): void {
		isDragging = true;
		dragOriginX = event.clientX;
		dragOriginY = event.clientY;
		(event.currentTarget as HTMLElement | null)?.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event: PointerEvent): void {
		if (!isDragging) return;

		const dx = (event.clientX - dragOriginX) / camera.zoom;
		const dy = (event.clientY - dragOriginY) / camera.zoom;

		cameraState.panBy(-dx, -dy);
		dragOriginX = event.clientX;
		dragOriginY = event.clientY;
	}

	function handlePointerUp(): void {
		isDragging = false;
	}

	function handleKeyDown(event: KeyboardEvent): void {
		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				cameraState.panBy(-60 / camera.zoom, 0);
				break;
			case 'ArrowRight':
				event.preventDefault();
				cameraState.panBy(60 / camera.zoom, 0);
				break;
			case 'ArrowUp':
				event.preventDefault();
				cameraState.panBy(0, -60 / camera.zoom);
				break;
			case 'ArrowDown':
				event.preventDefault();
				cameraState.panBy(0, 60 / camera.zoom);
				break;
			case '+':
			case '=':
				event.preventDefault();
				cameraState.zoomAtPoint(0.12, camera.viewportWidth / 2, camera.viewportHeight / 2);
				break;
			case '-':
			case '_':
				event.preventDefault();
				cameraState.zoomAtPoint(-0.12, camera.viewportWidth / 2, camera.viewportHeight / 2);
				break;
			case '0':
				event.preventDefault();
				resetCamera();
				break;
		}
	}

	function projectX(x: number): number {
		return projectSceneCoordinate(x, camera.x, camera.zoom);
	}

	function projectY(y: number): number {
		return projectSceneCoordinate(y, camera.y, camera.zoom);
	}

	return {
		get camera() {
			return camera;
		},
		get title() {
			return title;
		},
		get isDragging() {
			return isDragging;
		},
		get sectionClass() {
			return sectionClass;
		},
		get viewportClass() {
			return viewportClass;
		},
		get selectedNodeId() {
			return selectedNodeId;
		},
		get selectedNode() {
			return selectedNode;
		},
		get sceneLinks() {
			return sceneLinks;
		},
		get showHeader() {
			return showHeader;
		},
		get showDepthControls() {
			return showDepthControls;
		},
		get showGrid() {
			return showGrid;
		},
		get showLinks() {
			return showLinks;
		},
		get showInspector() {
			return showInspector;
		},
		syncCamera,
		syncSelectedNode,
		setViewportSize,
		focusNode,
		stepDepth,
		resetCamera,
		handleWheel,
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleKeyDown,
		projectX,
		projectY
	};
}

export default createPresenterSceneState;
