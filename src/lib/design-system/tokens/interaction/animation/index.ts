export const TOKEN_ANIMATION = {
	linear: 'linear',
	ease: 'ease',
	easeIn: 'ease-in',
	easeOut: 'ease-out',
	easeInOut: 'ease-in-out',
	stepStart: 'step-start',
	stepEnd: 'step-end'
} as const;

export type TokenAnimation = (typeof TOKEN_ANIMATION)[keyof typeof TOKEN_ANIMATION];
