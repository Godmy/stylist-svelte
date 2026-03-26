import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/depth/index';
import type { TokenShape } from '$stylist/architecture/type/token/shape/index';

export const RECORD_SHAPE: Record<FoundationSemanticZoomStage, TokenShape> = {
	dot: 'circle',
	icon: 'square',
	pill: 'pill',
	minimal: 'rectangle',
	compact: 'rectangle',
	detailed: 'rectangle',
	screen: 'rectangle'
};
