import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/script/semantic-zoom';
import type { SemanticZoomParams } from '$stylist/architecture/type/struct/semantic-zoom-params';

export function useSemanticZoom(params: SemanticZoomParams) {
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
