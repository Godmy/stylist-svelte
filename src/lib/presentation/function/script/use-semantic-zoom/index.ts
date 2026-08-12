import type { SceneNode } from '$stylist/architecture/interface/slot/scene-node/scene-node';
import { SemanticZoomManager } from '$stylist/architecture/class/manager/semantic-zoom';
export function useSemanticZoom(params: | {
			worldDepth: number;
			cameraDepth: number;
	  }
	| {
			node: SceneNode;
			cameraDepth: number;
	  }) {
	const readPresentation = () => {
		if ('node' in params) {
			return SemanticZoomManager.resolvePresentation(params.node.depth, params.cameraDepth);
		}

		return SemanticZoomManager.resolvePresentation(params.worldDepth, params.cameraDepth);
	};

	return {
		get presentation() {
			return readPresentation();
		},
		get stage() {
			return readPresentation().stage;
		},
		get layer() {
			return readPresentation().layer;
		}
	};
}
