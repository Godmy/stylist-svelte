import {
	getFoundationDepthDistance,
	normalizeFoundationDepthDistance,
	resolveFoundationSemanticZoomStage
} from '$stylist/architecture/function/script/depth/index';
import { RECORD_DENSITY } from '$stylist/architecture/const/record/density/index';
import { RECORD_FRAME } from '$stylist/architecture/const/record/frame/index';
import { RECORD_LAYER } from '$stylist/architecture/const/record/layer/index';
import { RECORD_LEVEL } from '$stylist/architecture/const/record/level/index';
import { RECORD_SHAPE } from '$stylist/architecture/const/record/shape/index';
import { RECORD_SIZE } from '$stylist/architecture/const/record/size/index';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom/index';

type SemanticZoomParams =
	| {
			worldDepth: number;
			cameraDepth: number;
	  }
	| {
			node: SceneNode;
			cameraDepth: number;
	  };

export type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom/index';

export function resolveSemanticZoomPresentation(
	worldDepth: number,
	cameraDepth: number
): SemanticZoomPresentation {
	const distance = getFoundationDepthDistance(worldDepth, cameraDepth);
	const proximity = normalizeFoundationDepthDistance(distance);
	const stage = resolveFoundationSemanticZoomStage(worldDepth, cameraDepth);
	const frame = RECORD_FRAME[stage];

	return {
		stage,
		layer: RECORD_LAYER[stage],
		architecture: RECORD_LEVEL[stage],
		shape: RECORD_SHAPE[stage],
		density: RECORD_DENSITY[stage],
		size: RECORD_SIZE[stage],
		showIcon: stage !== 'dot',
		showLabel: stage !== 'dot' && stage !== 'icon',
		showDescription: stage === 'compact' || stage === 'detailed' || stage === 'screen',
		showChildren: stage === 'detailed' || stage === 'screen',
		width: frame.width,
		height: frame.height,
		scale: 0.8 + proximity * 0.45,
		distance,
		proximity
	};
}

export function resolveSemanticZoomNode(
	node: SceneNode,
	cameraDepth: number
): SemanticZoomPresentation & { node: SceneNode } {
	return {
		node,
		...resolveSemanticZoomPresentation(node.depth, cameraDepth)
	};
}

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

