export interface AudioVisualizerProps {
	src?: string;
	alt?: string;
	title?: string;
	author?: string;
	duration?: string;
	isPlaying?: boolean;
	onPlayToggle?: (isPlaying: boolean) => void;
	class?: string;
}

export function createAudioVisualizerState(props: AudioVisualizerProps) {
	const src = $derived(props.src ?? '');
	const alt = $derived(props.alt ?? 'Audio Visualization');
	const title = $derived(props.title ?? 'Audio Track');
	const author = $derived(props.author ?? 'Unknown Artist');
	const duration = $derived(props.duration ?? '0:00');
	const isPlaying = $derived(props.isPlaying ?? false);
	const onPlayToggle = $derived(props.onPlayToggle ?? (() => {}));
	const className = $derived(props.class ?? '');

	const restProps = $derived.by(() => {
		const { class: _class, src: _src, alt: _alt, title: _title, author: _author, duration: _duration, isPlaying: _isPlaying, onPlayToggle: _onPlayToggle, ...rest } = props;
		return rest;
	});

	return {
		get src() { return src; },
		get alt() { return alt; },
		get title() { return title; },
		get author() { return author; },
		get duration() { return duration; },
		get isPlaying() { return isPlaying; },
		get onPlayToggle() { return onPlayToggle; },
		get className() { return className; },
		get restProps() { return restProps; }
	};
}

export default createAudioVisualizerState;
