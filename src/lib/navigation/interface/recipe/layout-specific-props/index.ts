import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';

export interface LayoutSpecificProps extends ComputeIntersectAll<[SlotChildren]> {
	type?: 'sidebar' | 'overlay' | 'drag-drop' | 'transform' | 'container';

	position?: 'left' | 'right' | 'top' | 'bottom';

	width?: string | number;

	draggable?: boolean;

	dropzone?: boolean;

	scale?: number;
	rotate?: number;

}
