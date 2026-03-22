export const TRANSITION_EASING = {
	easeLinear: 'linear',
	easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
	easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
	easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
	easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
	easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
	easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
	easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	easeStandard: 'cubic-bezier(0.4, 0, 0.2, 1)',
	easeEntrance: 'cubic-bezier(0.2, 0.8, 0.4, 1)'
} as const;

export type TransitionEasingKey = keyof typeof TRANSITION_EASING;
