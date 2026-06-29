import type { TokenAnimation } from '$stylist/animation/type/alias/animation';
import type { TokenDuration } from '$stylist/animation/type/alias/duration';
import type { TokenEasing } from '$stylist/animation/type/alias/easing';

export interface BehaviorMotion {
	animation?: TokenAnimation;
	duration?: TokenDuration;
	easing?: TokenEasing;
	delay?: number;
	infinite?: boolean;
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
	iterations?: number | 'infinite';
}
