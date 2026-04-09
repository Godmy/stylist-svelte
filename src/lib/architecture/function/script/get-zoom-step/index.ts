import type { Zoom } from '$stylist/architecture/type/struct/zoom';
import type { ZoomStep } from '$stylist/architecture/type/struct/zoom-step';

export function getZoomStep<TValue>(
	scale: Zoom<TValue>,
	stepId: number
): ZoomStep<TValue> | undefined {
	return scale.steps.find((step) => step.id === stepId);
}
