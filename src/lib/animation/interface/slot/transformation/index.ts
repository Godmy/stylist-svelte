import type { TokenAnimation } from '$stylist/animation/type/alias/animation';
import type { TokenDuration } from '$stylist/animation/type/alias/duration';
import type { TokenEasing } from '$stylist/animation/type/alias/easing';
import type { InteractionIntent } from '$stylist/interaction/type/struct/interaction/interaction-intent';
import type { InteractionFeedback } from '$stylist/interaction/type/alias/interaction-feedback';

export interface SlotTransformation {
	animation?: TokenAnimation;
	duration?: TokenDuration;
	easing?: TokenEasing;
	delay?: number;
	infinite?: boolean;
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
	iterations?: number | 'infinite';
	scale?: number;
	rotate?: number;
	translateX?: number;
	translateY?: number;
	skewX?: number;
	skewY?: number;
	transformOrigin?: string;
	animateOnHover?: boolean;
	animateOnClick?: boolean;
	animateInfinite?: boolean;
	interactionIntent?: InteractionIntent;
	interactionFeedback?: InteractionFeedback;
	interactionDelay?: number;
	interactionDuration?: string;
	interactionState?: 'idle' | 'pressed' | 'hover' | 'disabled' | 'active';
	interactionSticky?: boolean;
	interactionThreshold?: number;
	disabled?: boolean;
	class?: string;
}

