import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/script/depth/index';
import type { TokenShape } from '$stylist/layout/type/enum/shape';

export const RECORD_SHAPE: Record<FoundationSemanticZoomStage, TokenShape> = {
	dot: 'circle',
	icon: 'square',
	pill: 'pill',
	minimal: 'rectangle',
	compact: 'rectangle',
	detailed: 'rectangle',
	screen: 'rectangle'
};
