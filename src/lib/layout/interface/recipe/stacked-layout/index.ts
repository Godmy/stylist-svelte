import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/enum/orientation';
import type { SplitLayoutGap } from '$stylist/token/type/alias/split-layout-gap';

export interface StackedLayoutProps extends ComputeIntersectAll<[]> {
	direction?: (typeof TOKEN_ORIENTATION)[number];
	gap?: SplitLayoutGap;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	class?: string;
	children?: any;
}

