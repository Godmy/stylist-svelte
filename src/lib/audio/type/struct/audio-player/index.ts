import type { ContractAudioPlayer as AudioPlayerContract } from '$stylist/audio/interface/contract/audio-player';

export type AudioPlayerProps = AudioPlayerContract & {
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	controlsClass?: string;
};
