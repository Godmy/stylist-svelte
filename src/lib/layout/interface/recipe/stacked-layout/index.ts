import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { StackedLayoutDirection } from '$stylist/layout/type/enum/stacked-layout-direction';
import type { StackedLayoutGap } from '$stylist/layout/type/enum/stacked-layout-gap';
export interface StackedLayoutProps extends StructIntersectAll<[]> {
	direction?: StackedLayoutDirection;
	gap?: StackedLayoutGap;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	class?: string;
	children?: any;
}
