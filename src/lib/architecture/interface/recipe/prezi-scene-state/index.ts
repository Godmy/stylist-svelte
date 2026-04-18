import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { PreziCamera } from '$stylist/architecture/interface/slot/prezi-camera/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/index';

export interface PreziSceneState extends StructIntersectAll<[]> {
	camera: PreziCamera;
	viewportWidth: number;
	viewportHeight: number;
	selectedNode: SceneNode | null;
	selectedNodeId: string | null;
	isPanning: boolean;
	isAnimating: boolean;
	showGrid: boolean;
	showMinimap: boolean;
	showInspector: boolean;
	showHeader: boolean;
	title: string | undefined;
	subtitle: string | undefined;
	panMode: 'drag' | 'space' | 'always';
	zoomEnabled: boolean;
	panEnabled: boolean;
	minZoom: number;
	maxZoom: number;
	nodes: readonly SceneNode[];
	restProps: Record<string, unknown>;
}
