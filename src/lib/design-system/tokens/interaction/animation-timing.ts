export const ANIMATION_TIMING = {
	linear: 'linear',
	ease: 'ease',
	easeIn: 'ease-in',
	easeOut: 'ease-out',
	easeInOut: 'ease-in-out',
	stepStart: 'step-start',
	stepEnd: 'step-end'
} as const;

export type AnimationTiming = (typeof ANIMATION_TIMING)[keyof typeof ANIMATION_TIMING];
