import type { AudioPlayerContract } from '$stylist/media/interface/component/audio-player/contract';

export type AudioPlayerProps = AudioPlayerContract & {
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	controlsClass?: string;
};
