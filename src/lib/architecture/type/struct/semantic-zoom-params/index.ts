import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

export type SemanticZoomParams =
	| {
			worldDepth: number;
			cameraDepth: number;
	  }
	| {
			node: SceneNode;
			cameraDepth: number;
	  };
