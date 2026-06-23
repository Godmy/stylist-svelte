import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/script/semantic-zoom';
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

export function resolveSemanticZoomNode(
	node: SceneNode,
	cameraDepth: number
): SemanticZoomPresentation & { node: SceneNode } {
	return {
		node,
		...resolveSemanticZoomPresentation(node.depth, cameraDepth)
	};
}
