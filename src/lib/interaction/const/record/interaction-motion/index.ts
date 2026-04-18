import { TOKEN_EASING } from '$stylist/architecture/const/map/easing';
import { TOKEN_ANIMATION } from '$stylist/animation/const/map/animation';
import { TOKEN_DURATION } from '$stylist/interaction/const/map/duration';
import { TOKEN_TRANSITION } from '$stylist/animation/const/record/transition';

export const INTERACTION_MOTION = {
	duration: TOKEN_DURATION,
	easing: TOKEN_EASING,
	transitions: TOKEN_TRANSITION,
	animations: TOKEN_ANIMATION
} as const;
