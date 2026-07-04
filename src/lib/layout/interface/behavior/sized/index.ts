import type { TokenDensity } from '$stylist/layout/type/alias/density';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface BehaviorSized {
	size?: TokenSize;
	density?: TokenDensity;
}
