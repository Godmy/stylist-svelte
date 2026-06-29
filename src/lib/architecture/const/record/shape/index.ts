import type { FoundationSemanticZoomStage } from '$stylist/architecture/type/script/foundation-semantic-zoom-stages';
import type { TokenShape } from '$stylist/layout/type/alias/shape';

export const RECORD_SHAPE: Record<FoundationSemanticZoomStage, TokenShape> = {
	dot: 'circle',
	icon: 'square',
	pill: 'pill',
	minimal: 'rectangle',
	compact: 'rectangle',
	detailed: 'rectangle',
	screen: 'rectangle'
};
