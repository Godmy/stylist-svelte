import {
	getFoundationDepthDistance,
	normalizeFoundationDepthDistance,
	resolveFoundationSemanticZoomStage,
	type FoundationSemanticZoomStage
} from '$stylist/foundation/depth';
import type { FoundationSceneNode } from '$stylist/foundation/scene';
import type { TokenArchitecture } from '$stylist/design-system/tokens/architecture/architecture';
import type { TokenDensity } from '$stylist/design-system/tokens/architecture/density';
import type { TokenShape } from '$stylist/design-system/tokens/architecture/shape';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

export interface SemanticZoomPresentation {
	stage: FoundationSemanticZoomStage;
	architecture: TokenArchitecture;
	shape: TokenShape;
	density: TokenDensity;
	size: TokenSize;
	showIcon: boolean;
	showLabel: boolean;
	showDescription: boolean;
	showChildren: boolean;
	width: number;
	height: number;
	scale: number;
	distance: number;
	proximity: number;
}

const STAGE_ARCHITECTURE_MAP: Record<FoundationSemanticZoomStage, TokenArchitecture> = {
	dot: 'dot',
	icon: 'icon',
	pill: 'minimal',
	minimal: 'minimal',
	compact: 'compact',
	detailed: 'detailed',
	screen: 'default'
};

const STAGE_SHAPE_MAP: Record<FoundationSemanticZoomStage, TokenShape> = {
	dot: 'circle',
	icon: 'square',
	pill: 'pill',
	minimal: 'rectangle',
	compact: 'rectangle',
	detailed: 'rectangle',
	screen: 'rectangle'
};

const STAGE_DENSITY_MAP: Record<FoundationSemanticZoomStage, TokenDensity> = {
	dot: 'compact',
	icon: 'compact',
	pill: 'compact',
	minimal: 'compact',
	compact: 'default',
	detailed: 'spacious',
	screen: 'spacious'
};

const STAGE_SIZE_MAP: Record<FoundationSemanticZoomStage, TokenSize> = {
	dot: 'xs',
	icon: 'sm',
	pill: 'md',
	minimal: 'lg',
	compact: 'xl',
	detailed: '2xl',
	screen: 'full'
};

const STAGE_FRAME_MAP: Record<FoundationSemanticZoomStage, { width: number; height: number }> = {
	dot: { width: 16, height: 16 },
	icon: { width: 42, height: 42 },
	pill: { width: 144, height: 44 },
	minimal: { width: 192, height: 82 },
	compact: { width: 268, height: 152 },
	detailed: { width: 368, height: 238 },
	screen: { width: 520, height: 320 }
};

export function resolveSemanticZoomPresentation(
	worldDepth: number,
	cameraDepth: number
): SemanticZoomPresentation {
	const distance = getFoundationDepthDistance(worldDepth, cameraDepth);
	const proximity = normalizeFoundationDepthDistance(distance);
	const stage = resolveFoundationSemanticZoomStage(worldDepth, cameraDepth);
	const frame = STAGE_FRAME_MAP[stage];

	return {
		stage,
		architecture: STAGE_ARCHITECTURE_MAP[stage],
		shape: STAGE_SHAPE_MAP[stage],
		density: STAGE_DENSITY_MAP[stage],
		size: STAGE_SIZE_MAP[stage],
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
	node: FoundationSceneNode,
	cameraDepth: number
): SemanticZoomPresentation & { node: FoundationSceneNode } {
	return {
		node,
		...resolveSemanticZoomPresentation(node.depth, cameraDepth)
	};
}
