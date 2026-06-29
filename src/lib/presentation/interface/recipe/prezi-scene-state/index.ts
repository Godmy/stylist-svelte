import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PreziCamera } from '$stylist/architecture/interface/slot/prezi-camera/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';
import type { PresenterSceneLink } from '$stylist/presentation/type/struct/presenter-scene-link';

export interface PreziSceneState extends ComputeIntersectAll<[]> {
	camera: PreziCamera;
	nodeCamera: {
		x: number;
		y: number;
		zoom: number;
		depth: number;
		viewportWidth: number;
		viewportHeight: number;
	};
	viewportWidth: number;
	viewportHeight: number;
	selectedNode: SceneNode | null;
	selectedNodeId: string | null;
	isPanning: boolean;
	isAnimating: boolean;
	showGrid: boolean;
	showMinimap: boolean;
	showInspector: boolean;
	showLinks: boolean;
	showHeader: boolean;
	title: string | undefined;
	subtitle: string | undefined;
	panMode: 'drag' | 'space' | 'always';
	zoomEnabled: boolean;
	panEnabled: boolean;
	minZoom: number;
	maxZoom: number;
	nodes: readonly SceneNode[];
	sceneLinks: PresenterSceneLink[];
	worldStyle: string;
}
