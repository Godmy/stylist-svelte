import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
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
