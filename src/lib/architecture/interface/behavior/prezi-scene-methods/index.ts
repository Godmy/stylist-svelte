import type { PreziCamera } from '$stylist/architecture/interface/slot/prezi-camera/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/index';
import type { resolveSemanticZoomNode } from '$stylist/architecture/function/script/resolve-semantic-zoom-node/index';

export interface BehaviorPreziSceneMethods {
	setCamera: (camera: Partial<PreziCamera>) => void;
	setViewportSize: (width: number, height: number) => void;
	selectNode: (node: SceneNode | null) => void;
	toggleGrid: () => void;
	toggleMinimap: () => void;
	toggleInspector: () => void;
	handleWheel: (event: WheelEvent, viewportRect?: DOMRect) => void;
	handlePointerDown: (event: PointerEvent) => void;
	handlePointerMove: (event: PointerEvent) => void;
	handlePointerUp: (event: PointerEvent) => void;
	handleKeyDown: (event: KeyboardEvent) => void;
	focusNode: (node: SceneNode) => void;
	resetCamera: () => void;
	stepDepth: (delta: number) => void;
	getPresentation: (node: SceneNode) => ReturnType<typeof resolveSemanticZoomNode>;
}
