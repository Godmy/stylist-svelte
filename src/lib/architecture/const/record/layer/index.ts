import type { FoundationSemanticZoomStage } from '$stylist/architecture/type/script/foundation-semantic-zoom-stages';
import type { TokenZIndex } from '$stylist/layout/type/enum/z-index';

export const RECORD_LAYER: Record<FoundationSemanticZoomStage, TokenZIndex> = {
	dot: 'layer3',
	icon: 'layer5',
	pill: 'layer20',
	minimal: 'layer20',
	compact: 'layer30',
	detailed: 'overlay',
	screen: 'modal'
};
