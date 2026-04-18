import { resolveSemanticZoomNode } from '$stylist/architecture/function/script/resolve-semantic-zoom-node';
import { RECORD_FRAME } from '$stylist/architecture/const/record/frame/index';
import { FOCUS_DURATION_MS } from '$stylist/architecture/const/value/prezi-scene/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/index';
import type { PreziSceneContract } from '$stylist/architecture/type/struct/prezi-scene/index';
import type { PreziCamera } from '$stylist/architecture/interface/slot/prezi-camera/index';
import type { PreziSceneState } from '$stylist/architecture/interface/recipe/prezi-scene-state/index';
import type { BehaviorPreziSceneMethods } from '$stylist/architecture/interface/behavior/prezi-scene-methods';

/**
 * Hook для управления состоянием PreziScene.
 * Coordinate system: CSS-translate — transform: translate(x, y) scale(zoom) с origin 0 0.
 * Nodes внутри world-div используют raw position (не трансформированные).
 */
export function usePreziState(contract: PreziSceneContract): PreziSceneState & BehaviorPreziSceneMethods {
	const {
		nodes = [],
		initialCamera = { x: 0, y: 0, zoom: 1 },
		initialDepth = 0,
		showGrid: showGridProp = true,
		showMinimap: showMinimapProp = true,
		showInspector: showInspectorProp = true,
		showHeader: showHeaderProp = true,
		title,
		subtitle,
		panMode = 'drag',
		zoomEnabled = true,
		panEnabled = true,
		minZoom = 0.1,
		maxZoom = 5,
		selectedNodeId: controlledSelectedNodeId,
		onNodeSelect,
		onCameraChange,
		onDepthChange,
		...restProps
	} = contract;

	let camera = $state<PreziCamera>({
		x: initialCamera.x,
		y: initialCamera.y,
		zoom: initialCamera.zoom,
		depth: initialDepth
	});

	let viewportWidth = $state(800);
	let viewportHeight = $state(600);
	let selectedNode = $state<SceneNode | null>(null);
	let selectedNodeId = $state<string | null>(controlledSelectedNodeId ?? null);
	let isPanning = $state(false);
	let isAnimating = $state(false);
	let lastPointerX = 0;
	let lastPointerY = 0;
	let showGrid = $state(showGridProp);
	let showMinimap = $state(showMinimapProp);
	let showInspector = $state(showInspectorProp);

	let animationTimer: ReturnType<typeof setTimeout> | null = null;

	const clampZoom = (z: number) => Math.max(minZoom, Math.min(maxZoom, z));

	const setCamera = (next: Partial<PreziCamera>) => {
		camera = { ...camera, ...next };
		onCameraChange?.({ x: camera.x, y: camera.y, zoom: camera.zoom });
	};

	const setViewportSize = (width: number, height: number) => {
		viewportWidth = Math.max(1, width);
		viewportHeight = Math.max(1, height);
	};

	const selectNode = (node: SceneNode | null) => {
		selectedNode = node;
		selectedNodeId = node?.id ?? null;
		onNodeSelect?.(node);
	};

	const startAnimation = () => {
		if (animationTimer !== null) clearTimeout(animationTimer);
		isAnimating = true;
		animationTimer = setTimeout(() => {
			isAnimating = false;
			animationTimer = null;
		}, FOCUS_DURATION_MS);
	};

	/**
	 * Prezi-zoom: центрируем ноду и зумируем так, чтобы она занимала ~65% вьюпорта.
	 * screen-frame (520×320) — максимальная детализация при distance=0.
	 */
	const focusNode = (node: SceneNode) => {
		const screenFrame = RECORD_FRAME['screen'];
		const targetZoom = clampZoom(
			Math.min(
				(viewportWidth * 0.65) / screenFrame.width,
				(viewportHeight * 0.65) / screenFrame.height
			)
		);

		startAnimation();
		setCamera({
			x: viewportWidth / 2 - node.position.x * targetZoom,
			y: viewportHeight / 2 - node.position.y * targetZoom,
			zoom: targetZoom,
			depth: node.depth
		});
		selectNode(node);
		onDepthChange?.(node.depth);
	};

	const resetCamera = () => {
		startAnimation();
		setCamera({
			x: initialCamera.x,
			y: initialCamera.y,
			zoom: initialCamera.zoom,
			depth: initialDepth
		});
		selectNode(null);
		onDepthChange?.(initialDepth);
	};

	const stepDepth = (delta: number) => {
		const newDepth = Math.max(0, Math.min(1000, camera.depth + delta));
		setCamera({ depth: newDepth });
		onDepthChange?.(newDepth);
	};

	const handleWheel = (event: WheelEvent, viewportRect?: DOMRect) => {
		if (!zoomEnabled) return;
		event.preventDefault();

		const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
		const newZoom = clampZoom(camera.zoom * factor);

		if (viewportRect) {
			const mouseX = event.clientX - viewportRect.left;
			const mouseY = event.clientY - viewportRect.top;
			const worldX = (mouseX - camera.x) / camera.zoom;
			const worldY = (mouseY - camera.y) / camera.zoom;
			setCamera({
				zoom: newZoom,
				x: mouseX - worldX * newZoom,
				y: mouseY - worldY * newZoom
			});
		} else {
			setCamera({ zoom: newZoom });
		}
	};

	const handlePointerDown = (event: PointerEvent) => {
		if (!panEnabled || event.button !== 0) return;
		isPanning = true;
		lastPointerX = event.clientX;
		lastPointerY = event.clientY;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
	};

	const handlePointerMove = (event: PointerEvent) => {
		if (!isPanning || !panEnabled) return;
		const dx = event.clientX - lastPointerX;
		const dy = event.clientY - lastPointerY;
		setCamera({ x: camera.x + dx, y: camera.y + dy });
		lastPointerX = event.clientX;
		lastPointerY = event.clientY;
	};

	const handlePointerUp = (event: PointerEvent) => {
		if (!isPanning) return;
		isPanning = false;
		try {
			(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
		} catch {
			// pointerleave может прийти без предшествующего capture
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		const step = 60 / camera.zoom;

		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				if (panEnabled) setCamera({ x: camera.x + step });
				break;
			case 'ArrowRight':
				event.preventDefault();
				if (panEnabled) setCamera({ x: camera.x - step });
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (panEnabled) setCamera({ y: camera.y + step });
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (panEnabled) setCamera({ y: camera.y - step });
				break;
			case '+':
			case '=':
				event.preventDefault();
				if (zoomEnabled) setCamera({ zoom: clampZoom(camera.zoom * 1.12) });
				break;
			case '-':
			case '_':
				event.preventDefault();
				if (zoomEnabled) setCamera({ zoom: clampZoom(camera.zoom / 1.12) });
				break;
			case '0':
				event.preventDefault();
				resetCamera();
				break;
			case 'Escape':
				event.preventDefault();
				selectNode(null);
				break;
		}
	};

	const getPresentation = (node: SceneNode) => resolveSemanticZoomNode(node, camera.depth);

	return {
		get camera() { return camera; },
		get viewportWidth() { return viewportWidth; },
		get viewportHeight() { return viewportHeight; },
		get selectedNode() { return selectedNode; },
		get selectedNodeId() { return selectedNodeId; },
		get isPanning() { return isPanning; },
		get isAnimating() { return isAnimating; },
		get showGrid() { return showGrid; },
		get showMinimap() { return showMinimap; },
		get showInspector() { return showInspector; },
		get showHeader() { return showHeaderProp; },
		get title() { return title; },
		get subtitle() { return subtitle; },
		get panMode() { return panMode; },
		get zoomEnabled() { return zoomEnabled; },
		get panEnabled() { return panEnabled; },
		get minZoom() { return minZoom; },
		get maxZoom() { return maxZoom; },
		get nodes() { return nodes; },
		get restProps() { return restProps; },
		setCamera,
		setViewportSize,
		selectNode,
		toggleGrid: () => { showGrid = !showGrid; },
		toggleMinimap: () => { showMinimap = !showMinimap; },
		toggleInspector: () => { showInspector = !showInspector; },
		handleWheel,
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleKeyDown,
		focusNode,
		resetCamera,
		stepDepth,
		getPresentation
	};
}

export default usePreziState;
