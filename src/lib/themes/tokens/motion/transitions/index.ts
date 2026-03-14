import { DURATION } from '../duration';
import { TRANSITION_EASING } from '../easing';

export const TRANSITION = {
	instant: `all ${DURATION[0]} ${TRANSITION_EASING.easeInOut}`,
	quick: `all ${DURATION[150]} ${TRANSITION_EASING.easeInOut}`,
	smooth: `all ${DURATION[200]} ${TRANSITION_EASING.easeInOut}`,
	gentle: `all ${DURATION[300]} ${TRANSITION_EASING.easeInOut}`,
	emphasized: `all ${DURATION[400]} cubic-bezier(0.2, 0, 0, 1)`
} as const;

export type TransitionKey = keyof typeof TRANSITION;


