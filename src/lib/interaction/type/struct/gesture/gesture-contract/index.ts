import type { TokenAnimation } from '$stylist/animation/type/enum/animation';
import type { TokenDuration } from '$stylist/animation/type/enum/duration';
import type { TokenEasing } from '$stylist/animation/type/enum/easing';
import type { TokenCursor } from '$stylist/interaction/type/enum/cursor';

export type GestureContract = {
	disabled: boolean;
	animation: TokenAnimation;
	duration: TokenDuration;
	easing: TokenEasing;
	cursor: TokenCursor;
	pressEffect: boolean;
	hoverEffect: boolean;
}
