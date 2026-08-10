import type { GestureContract } from '$stylist/layout/type/object/gesture-contract';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeHoverable extends ComputeIntersectAll<[SlotClass, Partial<GestureContract> & {
/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
}, SlotChildren]> {}
