import type { VideoPlayerContract } from '$stylist/media/interface/component/video-player/contract';

export type VideoPlayerProps = VideoPlayerContract & {
	title?: string;
	width?: string;
	height?: string;
	videoClass?: string;
	controlsClass?: string;
};
