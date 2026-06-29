import type { TokenEasing } from '$stylist/animation/type/alias/easing';

export interface BehaviorMotionPreset {
	duration?: number;
	easing?: TokenEasing;
	delay?: number;
	transitionProperty?: string;
	animateInfinite?: boolean;
	motionPreset?: string;
}
