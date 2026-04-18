import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { FocusTarget } from '$stylist/architecture/interface/slot/focus-target/index';

export interface FocusState extends StructIntersectAll<[]> {
	target: FocusTarget | null;
	isFocused: boolean;
	isFullscreen: boolean;
}
