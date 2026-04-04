import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/script/depth/index';
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
