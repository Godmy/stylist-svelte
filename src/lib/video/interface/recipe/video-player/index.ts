import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
export interface RecipeVideoPlayer
	extends ComputeIntersectAll<[SlotClass, Omit<HTMLAttributes<HTMLDivElement>, 'class'>]> {
	width?: string;
	height?: string;

	src?: string;
	poster?: string;
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	videoClass?: string;
	controlsClass?: string;
}
