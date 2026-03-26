import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/depth/index';
import type { TokenSize } from '$stylist/architecture/type/token/size/index';

export const RECORD_SIZE: Record<FoundationSemanticZoomStage, TokenSize> = {
	dot: 'xs',
	icon: 'sm',
	pill: 'md',
	minimal: 'lg',
	compact: 'xl',
	detailed: '2xl',
	screen: 'full'
};
