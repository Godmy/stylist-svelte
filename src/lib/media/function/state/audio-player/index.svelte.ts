import type { HTMLAttributes } from 'svelte/elements';
import { formatTime } from '$stylist/media/function/script/format-time';
import { TOKEN_MEDIA_ICON } from '$stylist/media/const/record/media-icon';

type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

export interface AudioPlayerProps extends RestProps {
	src?: string;
	title?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	class?: string;
	controlsClass?: string;
}

export function createAudioPlayerState(props: AudioPlayerProps) {
	let audioRef = $state<HTMLAudioElement | null>(null);
	let isPlaying = $state(false);
	let isMuted = $state(props.muted ?? false);
	let currentTime = $state(0);
	let duration = $state(0);
	let volume = $state(1.0);

	const src = $derived(props.src);
	const title = $derived(props.title);
	const showControls = $derived(props.showControls ?? true);
	const autoPlay = $derived(props.autoPlay ?? false);
	const loop = $derived(props.loop ?? false);
	const hostClass = $derived(props.class ?? '');
	const controlsClass = $derived(props.controlsClass ?? '');

	const hostClasses = $derived(
		`audio-player bg-[var(--color-background-primary)] rounded-lg p-4 border border-[var(--color-border-primary)] ${hostClass}`
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			src: _src,
			title: _title,
			showControls: _showControls,
			autoPlay: _autoPlay,
			loop: _loop,
			muted: _muted,
			controlsClass: _controlsClass,
			...rest
		} = props;
		return rest;
	});

	function togglePlay() {
		if (audioRef) {
			if (isPlaying) {
				audioRef.pause();
			} else {
				audioRef.play();
			}
			isPlaying = !isPlaying;
		}
	}

	function toggleMute() {
		if (audioRef) {
			audioRef.muted = !audioRef.muted;
			isMuted = !isMuted;
		}
	}

	function handleLoadedMetadata() {
		if (audioRef) {
			duration = audioRef.duration;
		}
	}

	function handleTimeUpdate() {
		if (audioRef) {
			currentTime = audioRef.currentTime;
		}
	}

	function handleVolumeChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const newVolume = parseFloat(target.value);
		if (audioRef) {
			audioRef.volume = newVolume;
			volume = newVolume;
			if (newVolume === 0) {
				isMuted = true;
				audioRef.muted = true;
			} else if (isMuted) {
				isMuted = false;
				audioRef.muted = false;
			}
		}
	}

	function handleProgressChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const newTime = parseFloat(target.value);
		if (audioRef) {
			audioRef.currentTime = newTime;
			currentTime = newTime;
		}
	}

	function reloadAudio() {
		if (audioRef) {
			audioRef.load();
			currentTime = 0;
		}
	}

	return {
		get audioRef() {
			return audioRef;
		},
		set audioRef(val: HTMLAudioElement | null) {
			audioRef = val;
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
		get title() {
			return title;
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
		reloadAudio,
		formatTime
	};
}

export default createAudioPlayerState;
