import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type SemanticZoomParams =
	| {
			worldDepth: FoundationDepth;
			cameraDepth: FoundationDepth;
	  }
	| {
			node: SceneNode;
			cameraDepth: FoundationDepth;
	  };
