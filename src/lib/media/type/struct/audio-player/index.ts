import type { ContractAudioPlayer as AudioPlayerContract } from '$stylist/media/interface/contract/audio-player';

export type AudioPlayerProps = AudioPlayerContract & {
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	controlsClass?: string;
};
