import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom';
import type { TokenSize } from '$stylist/layout/type/alias/size';

export type LiteGraphNodePresentation = Partial<SemanticZoomPresentation> & {
	stage?: SemanticZoomPresentation['stage'];
	size?: TokenSize;
	width?: number;
	height?: number | 'auto';
	showChildren?: boolean;
};
