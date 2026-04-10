import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import { formatTime } from '$stylist/media/function/script/format-time';
import { TOKEN_MEDIA_ICON } from '$stylist/media/const/record/media-icon';

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

export function createVideoPlayerState(props: VideoPlayerProps) {
	let videoRef = $state<HTMLVideoElement | null>(null);
	let isPlaying = $state(false);
	let isMuted = $state(props.muted ?? false);
	let currentTime = $state(0);
	let duration = $state(0);
	let volume = $state(1.0);

	const src = $derived(props.src);
	const poster = $derived(props.poster);
	const title = $derived(props.title);
	const width = $derived(props.width ?? '100%');
	const height = $derived(props.height ?? 'auto');
	const showControls = $derived(props.showControls ?? true);
	const autoPlay = $derived(props.autoPlay ?? false);
	const loop = $derived(props.loop ?? false);
	const hostClass = $derived(props.class ?? '');
	const videoClass = $derived(props.videoClass ?? '');
	const controlsClass = $derived(props.controlsClass ?? '');

	const hostClasses = $derived(
		`video-player bg-[var(--color-neutral-900)] rounded-lg overflow-hidden ${hostClass}`
	);
	const hostStyle = $derived(`width: ${width}; height: ${height};`);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			src: _src,
			poster: _poster,
			title: _title,
			width: _width,
			height: _height,
			showControls: _showControls,
			autoPlay: _autoPlay,
			loop: _loop,
			muted: _muted,
			videoClass: _videoClass,
			controlsClass: _controlsClass,
			...rest
		} = props;
		return rest;
	});

	function togglePlay() {
		if (videoRef) {
			if (isPlaying) {
				videoRef.pause();
			} else {
				videoRef.play();
			}
			isPlaying = !isPlaying;
		}
	}

	function toggleMute() {
		if (videoRef) {
			videoRef.muted = !videoRef.muted;
			isMuted = !isMuted;
		}
	}

	function handleLoadedMetadata() {
		if (videoRef) {
			duration = videoRef.duration;
		}
	}

	function handleTimeUpdate() {
		if (videoRef) {
			currentTime = videoRef.currentTime;
		}
	}

	function handleVolumeChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const newVolume = parseFloat(target.value);
		if (videoRef) {
			videoRef.volume = newVolume;
			volume = newVolume;
			if (newVolume === 0) {
				isMuted = true;
				videoRef.muted = true;
			} else if (isMuted) {
				isMuted = false;
				videoRef.muted = false;
			}
		}
	}

	function handleProgressChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const newTime = parseFloat(target.value);
		if (videoRef) {
			videoRef.currentTime = newTime;
			currentTime = newTime;
		}
	}

	function reloadVideo() {
		if (videoRef) {
			videoRef.load();
			currentTime = 0;
		}
	}

	return {
		get videoRef() {
			return videoRef;
		},
		set videoRef(val: HTMLVideoElement | null) {
			videoRef = val;
		},
		get isPlaying() {
			return isPlaying;
		},
		get isMuted() {
			return isMuted;
		},
		get currentTime() {
			return currentTime;
		},
		get duration() {
			return duration;
		},
		get volume() {
			return volume;
		},
		get src() {
			return src;
		},
		get poster() {
			return poster;
		},
		get title() {
			return title;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get showControls() {
			return showControls;
		},
		get autoPlay() {
			return autoPlay;
		},
		get loop() {
			return loop;
		},
		get hostClasses() {
			return hostClasses;
		},
		get hostStyle() {
			return hostStyle;
		},
		get videoClass() {
			return videoClass;
		},
		get controlsClass() {
			return controlsClass;
		},
		get restProps() {
			return restProps;
		},
		get icons() {
			return TOKEN_MEDIA_ICON;
		},
		togglePlay,
		toggleMute,
		handleLoadedMetadata,
		handleTimeUpdate,
		handleVolumeChange,
		handleProgressChange,
		reloadVideo,
		formatTime
	};
}

export default createVideoPlayerState;
