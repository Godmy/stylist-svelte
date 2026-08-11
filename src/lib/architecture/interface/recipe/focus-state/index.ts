import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { {
		 id: string;
		x: number;
		y: number;
		width: number;
		height: number;
		depth: number;
	} } from '$stylist/architecture/interface/slot/focus-target/index';

export interface FocusState extends ComputeIntersectAll<[]> {
	target: {
		 id: string;
		x: number;
		y: number;
		width: number;
		height: number;
		depth: number;
	} | null;
	isFocused: boolean;
	isFullscreen: boolean;
}
