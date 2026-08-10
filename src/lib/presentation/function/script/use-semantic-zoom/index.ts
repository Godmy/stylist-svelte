import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';
import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/script/semantic-zoom';
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
			return resolveSemanticZoomPresentation(params.node.depth, params.cameraDepth);
		}

		return resolveSemanticZoomPresentation(params.worldDepth, params.cameraDepth);
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
