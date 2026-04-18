import type { FoundationSemanticZoomStage } from '$stylist/architecture/type/script/foundation-semantic-zoom-stages';
import type { TokenDensity } from '$stylist/layout/type/enum/density';

export const RECORD_DENSITY: Record<FoundationSemanticZoomStage, TokenDensity> = {
	dot: 'compact',
	icon: 'compact',
	pill: 'compact',
	minimal: 'compact',
	compact: 'default',
	detailed: 'spacious',
	screen: 'spacious'
};
