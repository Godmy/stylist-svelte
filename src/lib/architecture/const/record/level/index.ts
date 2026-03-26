import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/depth/index';
import type { TokenArchitecture } from '$stylist/architecture/type/token/architecture/index';

export const RECORD_LEVEL: Record<FoundationSemanticZoomStage, TokenArchitecture> = {
	dot: 'dot',
	icon: 'icon',
	pill: 'minimal',
	minimal: 'minimal',
	compact: 'compact',
	detailed: 'detailed',
	screen: 'default'
};
