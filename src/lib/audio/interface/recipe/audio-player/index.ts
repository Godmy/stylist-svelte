import type { HTMLAudioAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractAudioPlayer } from '$stylist/audio/interface/contract/audio-player';
export interface RecipeAudioPlayer
	extends ComputeIntersectAll<[ComputeIntersectAll<[HTMLAudioAttributes]> & {
src?: string;
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	class?: string;
	controlsClass?: string;
}, ContractAudioPlayer]> {}
