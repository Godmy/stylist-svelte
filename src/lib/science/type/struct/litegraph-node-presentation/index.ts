import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type LitegraphNodePresentation = Partial<SemanticZoomPresentation> & {
	stage?: SemanticZoomPresentation['stage'];
	size?: TokenSize;
	width?: number;
	height?: number | 'auto';
	showChildren?: boolean;
};
