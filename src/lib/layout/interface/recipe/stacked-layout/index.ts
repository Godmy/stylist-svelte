import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
export interface StackedLayoutProps extends ComputeIntersectAll<[]> {
	direction?: SplitLayoutDirection;
	gap?: SplitLayoutGap;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	class?: string;
	children?: any;
}
