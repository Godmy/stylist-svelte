export type AudioVisualizerProps = {
	src?: string;
	alt?: string;
	title?: string;
	author?: string;
	duration?: string;
	isPlaying?: boolean;
	onPlayToggle?: (isPlaying: boolean) => void;
	class?: string;
};
