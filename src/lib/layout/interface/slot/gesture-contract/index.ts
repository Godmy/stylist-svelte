import type { TokenAnimation } from '$stylist/theme/type/alias/animation';
import type { TokenDuration } from '$stylist/theme/type/alias/duration';
import type { TokenEasing } from '$stylist/theme/type/alias/easing';
import type { TokenCursor } from '$stylist/layout/type/alias/cursor';

export interface GestureContract {
	disabled: boolean;
	animation: TokenAnimation;
	duration: TokenDuration;
	easing: TokenEasing;
	cursor: TokenCursor;
	pressEffect: boolean;
	hoverEffect: boolean;
}
