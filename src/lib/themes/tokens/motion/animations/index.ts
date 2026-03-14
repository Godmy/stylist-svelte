export const ANIMATIONS = {
	linear: 'linear',
	ease: 'ease',
	easeIn: 'ease-in',
	easeOut: 'ease-out',
	easeInOut: 'ease-in-out',
	stepStart: 'step-start',
	stepEnd: 'step-end'
} as const;

export type Animations = (typeof ANIMATIONS)[keyof typeof ANIMATIONS];
