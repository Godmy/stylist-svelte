export const FOUNDATION_SEMANTIC_ZOOM_STAGES = [
	'dot',
	'icon',
	'pill',
	'minimal',
	'compact',
	'detailed',
	'screen'
] as const;

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
