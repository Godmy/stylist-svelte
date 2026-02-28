import { TRANSITION_DURATION } from './transition-duration';
import { TRANSITION_EASING } from './transition-easing';

export const TRANSITION = {
	instant: `all ${TRANSITION_DURATION.none} ${TRANSITION_EASING.easeInOut}`,
	quick: `all ${TRANSITION_DURATION.fast} ${TRANSITION_EASING.easeInOut}`,
	smooth: `all ${TRANSITION_DURATION.normal} ${TRANSITION_EASING.easeInOut}`,
	gentle: `all ${TRANSITION_DURATION.slow} ${TRANSITION_EASING.easeInOut}`,
	emphasized: `all ${TRANSITION_DURATION.slower} cubic-bezier(0.2, 0, 0, 1)`
} as const;

export type TransitionKey = keyof typeof TRANSITION;
