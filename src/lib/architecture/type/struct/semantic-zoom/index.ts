import type { FoundationSemanticZoomStage } from '$stylist/architecture/type/script/foundation-semantic-zoom-stages';
import type { TierContent } from '$stylist/architecture/type/alias/tier';
import type { TokenDensity } from '$stylist/layout/type/alias/density';
import type { TokenShape } from '$stylist/layout/type/alias/shape';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenZIndex } from '$stylist/theme/type/alias/z-index';

export type SemanticZoomPresentation = {
	stage: FoundationSemanticZoomStage;
	layer: TokenZIndex;
	architecture: TierContent;
	shape: TokenShape;
	density: TokenDensity;
	size: TokenSize;
	showIcon: boolean;
	showLabel: boolean;
	showDescription: boolean;
	showChildren: boolean;
	width: number;
	height: number;
	scale: number;
	distance: number;
	proximity: number;
};
