import type { PreziCamera } from '$stylist/architecture/interface/slot/prezi-camera/index';
import type { SceneNode } from '$stylist/architecture/interface/slot/scene-node/scene-node';
import type { SemanticZoomPresentation } from '$stylist/architecture/interface/slot/semantic-zoom';
export interface BehaviorPreziSceneMethods {
	setCamera: (camera: Partial<PreziCamera>) => void;
	setViewportSize: (width: number, height: number) => void;
	viewport: (element: HTMLDivElement) => { destroy(): void };
	selectNode: (node: SceneNode | null) => void;
	toggleGrid: () => void;
	toggleMinimap: () => void;
	handleWheel: (event: WheelEvent, viewportRect?: DOMRect) => void;
	handlePointerDown: (event: PointerEvent) => void;
	handlePointerMove: (event: PointerEvent) => void;
	handlePointerUp: (event: PointerEvent) => void;
	handleKeyDown: (event: KeyboardEvent) => void;
	focusNode: (node: SceneNode) => void;
	resetCamera: () => void;
	stepDepth: (delta: number) => void;
	getPresentation: (node: SceneNode) => SemanticZoomPresentation & { node: SceneNode };
}
