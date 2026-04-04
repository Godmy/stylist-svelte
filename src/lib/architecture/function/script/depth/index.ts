export const FOUNDATION_DEPTH_RANGE = {
	min: 0,
	max: 1000
} as const;

export const FOUNDATION_SEMANTIC_ZOOM_STAGES = [
	'dot',
	'icon',
	'pill',
	'minimal',
	'compact',
	'detailed',
	'screen'
] as const;

export type FoundationDepth = number;
export type FoundationSemanticZoomStage = (typeof FOUNDATION_SEMANTIC_ZOOM_STAGES)[number];

export interface FoundationDepthThreshold {
	stage: FoundationSemanticZoomStage;
	maxDistance: number;
}

export const FOUNDATION_DEPTH_THRESHOLDS: readonly FoundationDepthThreshold[] = [
	{ stage: 'screen', maxDistance: 36 },
	{ stage: 'detailed', maxDistance: 96 },
	{ stage: 'compact', maxDistance: 180 },
	{ stage: 'minimal', maxDistance: 300 },
	{ stage: 'pill', maxDistance: 440 },
	{ stage: 'icon', maxDistance: 620 },
	{ stage: 'dot', maxDistance: Number.POSITIVE_INFINITY }
] as const;

export function clampFoundationDepth(depth: number): FoundationDepth {
	return Math.min(FOUNDATION_DEPTH_RANGE.max, Math.max(FOUNDATION_DEPTH_RANGE.min, depth));
}

export function getFoundationDepthDistance(
	worldDepth: FoundationDepth,
	cameraDepth: FoundationDepth
): number {
	return Math.abs(clampFoundationDepth(worldDepth) - clampFoundationDepth(cameraDepth));
}

export function normalizeFoundationDepthDistance(distance: number): number {
	return 1 - Math.min(1, Math.max(0, distance / FOUNDATION_DEPTH_RANGE.max));
}

export function resolveFoundationSemanticZoomStage(
	worldDepth: FoundationDepth,
	cameraDepth: FoundationDepth
): FoundationSemanticZoomStage {
	const distance = getFoundationDepthDistance(worldDepth, cameraDepth);
	return (
		FOUNDATION_DEPTH_THRESHOLDS.find((threshold) => distance <= threshold.maxDistance)?.stage ??
		'dot'
	);
}
