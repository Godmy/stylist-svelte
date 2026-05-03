import { TOKEN_DURATION } from '$stylist/animation/const/map/duration';
import { TOKEN_EASING } from '$stylist/architecture/const/map/easing';

export const TOKEN_TRANSITION = {
	instant: `all ${TOKEN_DURATION[0]} ${TOKEN_EASING.easeInOut}`,
	quick: `all ${TOKEN_DURATION[150]} ${TOKEN_EASING.easeInOut}`,
	smooth: `all ${TOKEN_DURATION[200]} ${TOKEN_EASING.easeInOut}`,
	gentle: `all ${TOKEN_DURATION[300]} ${TOKEN_EASING.easeInOut}`,
	emphasized: `all ${TOKEN_DURATION[400]} cubic-bezier(0.2, 0, 0, 1)`
} as const;
