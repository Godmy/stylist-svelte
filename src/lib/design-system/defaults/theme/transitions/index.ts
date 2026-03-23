import { TOKEN_DURATION } from '$stylist/design-system/tokens/interaction/duration';
import { TOKEN_EASING } from '$stylist/design-system/tokens/architecture/easing';

export const TRANSITION = {
	instant: `all ${TOKEN_DURATION[0]} ${TOKEN_EASING.easeInOut}`,
	quick: `all ${TOKEN_DURATION[150]} ${TOKEN_EASING.easeInOut}`,
	smooth: `all ${TOKEN_DURATION[200]} ${TOKEN_EASING.easeInOut}`,
	gentle: `all ${TOKEN_DURATION[300]} ${TOKEN_EASING.easeInOut}`,
	emphasized: `all ${TOKEN_DURATION[400]} cubic-bezier(0.2, 0, 0, 1)`
} as const;

export type TransitionKey = keyof typeof TRANSITION;


