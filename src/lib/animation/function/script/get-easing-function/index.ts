import { BASE_EASING } from '$stylist/animation/const/record/base-easing';

export type EasingFunction = (t: number) => number;
export type EasingType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export function getEasingFunction(easing: EasingType): EasingFunction {
	return BASE_EASING[easing] ?? BASE_EASING['ease-out'];
}
