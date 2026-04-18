import type { HTMLAudioAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface AudioPlayerProps extends StructIntersectAll<[HTMLAudioAttributes]> {
	src?: string;
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	class?: string;
	controlsClass?: string;
}
