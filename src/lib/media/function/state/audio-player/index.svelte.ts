import type { HTMLAttributes } from 'svelte/elements';

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

function formatTime(seconds: number): string {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function createAudioPlayerState(props: AudioPlayerProps) {
	const src = $derived(props.src);
	const title = $derived(props.title);
	const showControls = $derived(props.showControls ?? true);
	const autoPlay = $derived(props.autoPlay ?? false);
	const loop = $derived(props.loop ?? false);
	const muted = $derived(props.muted ?? false);
	const hostClass = $derived(props.class ?? '');
	const controlsClass = $derived(props.controlsClass ?? '');

	const hostClasses = $derived(`audio-player bg-[var(--color-background-primary)] rounded-lg p-4 border border-[var(--color-border-primary)] ${hostClass}`);

	const restProps = $derived.by(() => {
		const { class: _class, src: _src, title: _title, showControls: _showControls, autoPlay: _autoPlay, loop: _loop, muted: _muted, controlsClass: _controlsClass, ...rest } = props;
		return rest;
	});

	return {
		get src() { return src; },
		get title() { return title; },
		get showControls() { return showControls; },
		get autoPlay() { return autoPlay; },
		get loop() { return loop; },
		get muted() { return muted; },
		get hostClass() { return hostClass; },
		get controlsClass() { return controlsClass; },
		get hostClasses() { return hostClasses; },
		get restProps() { return restProps; },
		formatTime
	};
}

export default createAudioPlayerState;
