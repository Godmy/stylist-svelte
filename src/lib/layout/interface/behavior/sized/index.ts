import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface BehaviorSized {
	size?: TokenSize;
	density?: TokenDensity;
}
