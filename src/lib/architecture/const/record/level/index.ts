import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/script/foundation-semantic-zoom-stages';
import type { TierContent } from '$stylist/architecture/type/enum/tier/index';

export const RECORD_LEVEL: Record<FoundationSemanticZoomStage, TierContent> = {
	dot: 'dot',
	icon: 'icon',
	pill: 'minimal',
	minimal: 'minimal',
	compact: 'compact',
	detailed: 'detailed',
	screen: 'screen'
};
