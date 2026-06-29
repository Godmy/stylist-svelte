import type { TokenAnimation } from '$stylist/animation/type/alias/animation';
import type { TokenDuration } from '$stylist/animation/type/alias/duration';
import type { TokenEasing } from '$stylist/animation/type/alias/easing';
import type { TokenCursor } from '$stylist/interaction/type/alias/cursor';

export type GestureContract = {
	disabled: boolean;
	animation: TokenAnimation;
	duration: TokenDuration;
	easing: TokenEasing;
	cursor: TokenCursor;
	pressEffect: boolean;
	hoverEffect: boolean;
};
