import type { HTMLAudioAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface AudioPlayerProps extends ComputeIntersectAll<[HTMLAudioAttributes]> {
	src?: string;
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	class?: string;
	controlsClass?: string;
}
