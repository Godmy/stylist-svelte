import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/depth/index';
import type { TokenDensity } from '$stylist/architecture/type/token/density/index';

export const RECORD_DENSITY: Record<FoundationSemanticZoomStage, TokenDensity> = {
	dot: 'compact',
	icon: 'compact',
	pill: 'compact',
	minimal: 'compact',
	compact: 'default',
	detailed: 'spacious',
	screen: 'spacious'
};
