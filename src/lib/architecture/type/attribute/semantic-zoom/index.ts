import type { FoundationSemanticZoomStage } from '$stylist/architecture/function/depth';
import type { TokenArchitecture } from '$stylist/architecture/type/token/architecture';
import type { TokenDensity } from '$stylist/architecture/type/token/density';
import type { TokenShape } from '$stylist/architecture/type/token/shape';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenZIndex } from '$stylist/architecture/type/token/z-index';

export type SemanticZoomPresentation = {
	stage: FoundationSemanticZoomStage;
	layer: TokenZIndex;
	architecture: TokenArchitecture;
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
