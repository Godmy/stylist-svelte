import type { ContractVideoPlayer as VideoPlayerContract } from '$stylist/media/interface/contract/video-player';

export type VideoPlayerProps = VideoPlayerContract & {
	title?: string;
	width?: string;
	height?: string;
	videoClass?: string;
	controlsClass?: string;
};
