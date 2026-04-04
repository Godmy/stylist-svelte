import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/script/depth';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenZIndex } from '$stylist/layout/type/enum/z-index';

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
