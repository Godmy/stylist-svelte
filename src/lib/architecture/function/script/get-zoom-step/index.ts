import type { Zoom } from '$stylist/architecture/type/object/zoom/zoom';
export function getZoomStep<TValue>(
	scale: Zoom<TValue>,
	stepId: number
): {
	id: number;
	value: TValue;
	label: string;
	preview?: string;
} | undefined {
	return scale.steps.find((step) => step.id === stepId);
}
