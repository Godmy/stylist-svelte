import type { Zoom, ZoomStep } from '$stylist/architecture/type/struct/zoom';

export function getZoomStep<TValue>(
	scale: Zoom<TValue>,
	stepId: number
): ZoomStep<TValue> | undefined {
	return scale.steps.find((step) => step.id === stepId);
}

export function getZoomValue<TValue>(
	scale: Zoom<TValue>,
	stepId: number,
	fallback: TValue
): TValue {
	return getZoomStep(scale, stepId)?.value ?? fallback;
}

export function normalizeFoundationValue(value: number, min: number, max: number): number {
	if (max <= min) {
		return 0;
	}

	return (value - min) / (max - min);
}

export function interpolateFoundationValue(
	start: number,
	end: number,
	progress: number
): number {
	const clampedProgress = Math.min(1, Math.max(0, progress));
	return start + (end - start) * clampedProgress;
}
