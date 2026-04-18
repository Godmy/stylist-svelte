import type { PresentationFrame } from '$stylist/architecture/interface/slot/presentation-frame/index';

export function createPresentationFrame(initial?: Partial<PresentationFrame>) {
	const frame = $state<PresentationFrame>({
		id: initial?.id ?? '',
		title: initial?.title ?? '',
		targetX: initial?.targetX ?? 0,
		targetY: initial?.targetY ?? 0,
		targetZoom: initial?.targetZoom ?? 1,
		duration: initial?.duration ?? 800
	});

	return {
		get id() { return frame.id; },
		get title() { return frame.title; },
		get targetX() { return frame.targetX; },
		get targetY() { return frame.targetY; },
		get targetZoom() { return frame.targetZoom; },
		get duration() { return frame.duration; },
		setId(id: string) { frame.id = id; },
		setTitle(title: string) { frame.title = title; },
		setTargetX(x: number) { frame.targetX = x; },
		setTargetY(y: number) { frame.targetY = y; },
		setTargetZoom(zoom: number) { frame.targetZoom = zoom; },
		setDuration(duration: number) { frame.duration = duration; }
	};
}

export default createPresentationFrame;
