import type { HTMLVideoAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface VideoPlayerProps extends StructIntersectAll<[HTMLVideoAttributes]> {
	src?: string;
	poster?: string;
	title?: string;
	width?: string;
	height?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	class?: string;
	videoClass?: string;
	controlsClass?: string;
}
