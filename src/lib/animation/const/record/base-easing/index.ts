import type { EasingFunction, EasingType } from '$stylist/animation/function/script/get-easing-function';

export const BASE_EASING: Record<EasingType, EasingFunction> = {
	linear: (t) => t,
	'ease-in': (t) => t * t,
	'ease-out': (t) => t * (2 - t),
	'ease-in-out': (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
};
