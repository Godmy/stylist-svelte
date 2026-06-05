import type { Zoom } from '$stylist/architecture/type/struct/zoom/zoom';
import { getZoomStep } from '$stylist/architecture/function/script/get-zoom-step';

export function getZoomValue<TValue>(
	scale: Zoom<TValue>,
	stepId: number,
	fallback: TValue
): TValue {
	return getZoomStep(scale, stepId)?.value ?? fallback;
}
