import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/script/semantic-zoom';
import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export function resolveSemanticZoomNode(
	node: SceneNode,
	cameraDepth: FoundationDepth
): SemanticZoomPresentation & { node: SceneNode } {
	return {
		node,
		...resolveSemanticZoomPresentation(node.depth, cameraDepth)
	};
}
