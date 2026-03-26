import type { InterfaceZoom } from '$stylist/architecture/interface/zoom';
import type { InterfaceZoomStep } from '$stylist/architecture/interface/zoom-step';

export function getZoomStep<TValue>(
	scale: InterfaceZoom<TValue>,
	stepId: number
): InterfaceZoomStep<TValue> | undefined {
	return scale.steps.find((step) => step.id === stepId);
}

export function getZoomValue<TValue>(
	scale: InterfaceZoom<TValue>,
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
