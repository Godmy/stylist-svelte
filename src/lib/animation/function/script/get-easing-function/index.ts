import { BASE_EASING } from '$stylist/animation/const/record/base-easing';
import type { EasingFunction, EasingType } from '$stylist/animation/type/script/get-easing-function';

export function getEasingFunction(easing: EasingType): EasingFunction {
	return BASE_EASING[easing] ?? BASE_EASING['ease-out'];
}
