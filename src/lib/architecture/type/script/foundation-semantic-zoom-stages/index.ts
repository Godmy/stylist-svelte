import { FOUNDATION_SEMANTIC_ZOOM_STAGES } from '$stylist/architecture/const/script/foundation-semantic-zoom-stages';

export type FoundationSemanticZoomStage = (typeof FOUNDATION_SEMANTIC_ZOOM_STAGES)[number];

export interface FoundationDepthThreshold {
	stage: FoundationSemanticZoomStage;
	maxDistance: number;
}
