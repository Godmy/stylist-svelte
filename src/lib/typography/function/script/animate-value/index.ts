import { getEasingFunction } from '$stylist/animation/function/script/get-easing-function';
import type { AnimateValueOptions } from '$stylist/typography/interface/slot/animate-value-options';

export function animateValue({
	from,
	to,
	duration,
	delay,
	easing,
	onUpdate,
	onFinish
}: AnimateValueOptions): () => void {
	if (duration <= 0 || typeof window === 'undefined') {
		onUpdate(to);
		onFinish?.();
		return () => {};
	}

	const easingFunction = getEasingFunction(easing);
	const startDelay = Math.max(delay, 0);
	const targetDuration = Math.max(duration, 0);
	const startTime = (window.performance?.now() ?? Date.now()) + startDelay;
	const endTime = startTime + targetDuration;
	let frameId: number;

	const step = (timestamp: number) => {
		if (timestamp < startTime) {
			frameId = window.requestAnimationFrame(step);
			return;
		}

		if (timestamp >= endTime) {
			onUpdate(to);
			onFinish?.();
			return;
		}

		const progress = (timestamp - startTime) / targetDuration;
		const eased = easingFunction(Math.min(Math.max(progress, 0), 1));
		const nextValue = from + (to - from) * eased;
		onUpdate(nextValue);

		frameId = window.requestAnimationFrame(step);
	};

	frameId = window.requestAnimationFrame(step);

	return () => {
		if (frameId) {
			window.cancelAnimationFrame(frameId);
		}
	};
}
