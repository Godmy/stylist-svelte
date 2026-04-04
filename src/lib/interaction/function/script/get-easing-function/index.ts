export type EasingFunction = (t: number) => number;
export type EasingType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

const BASE_EASING: Record<EasingType, EasingFunction> = {
	linear: (t) => t,
	'ease-in': (t) => t * t,
	'ease-out': (t) => t * (2 - t),
	'ease-in-out': (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
};

export function getEasingFunction(easing: EasingType): EasingFunction {
	return BASE_EASING[easing] ?? BASE_EASING['ease-out'];
}
