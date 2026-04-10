import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export interface VideoPlayerProps extends RestProps {
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

function formatTime(seconds: number): string {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function createVideoPlayerState(props: VideoPlayerProps) {
	const src = $derived(props.src);
	const poster = $derived(props.poster);
	const title = $derived(props.title);
	const width = $derived(props.width ?? '100%');
	const height = $derived(props.height ?? 'auto');
	const showControls = $derived(props.showControls ?? true);
	const autoPlay = $derived(props.autoPlay ?? false);
	const loop = $derived(props.loop ?? false);
	const muted = $derived(props.muted ?? false);
	const hostClass = $derived(props.class ?? '');
	const videoClass = $derived(props.videoClass ?? '');
	const controlsClass = $derived(props.controlsClass ?? '');

	const hostClasses = $derived(`video-player bg-[var(--color-neutral-900)] rounded-lg overflow-hidden ${hostClass}`);
	const hostStyle = $derived(`width: ${width}; height: ${height};`);

	const restProps = $derived.by(() => {
		const { class: _class, src: _src, poster: _poster, title: _title, width: _width, height: _height, showControls: _showControls, autoPlay: _autoPlay, loop: _loop, muted: _muted, videoClass: _videoClass, controlsClass: _controlsClass, ...rest } = props;
		return rest;
	});

	return {
		get src() { return src; },
		get poster() { return poster; },
		get title() { return title; },
		get width() { return width; },
		get height() { return height; },
		get showControls() { return showControls; },
		get autoPlay() { return autoPlay; },
		get loop() { return loop; },
		get muted() { return muted; },
		get hostClass() { return hostClass; },
		get videoClass() { return videoClass; },
		get controlsClass() { return controlsClass; },
		get hostClasses() { return hostClasses; },
		get hostStyle() { return hostStyle; },
		get restProps() { return restProps; },
		formatTime
	};
}

export default createVideoPlayerState;
