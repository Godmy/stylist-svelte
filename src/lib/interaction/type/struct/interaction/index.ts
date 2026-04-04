import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type InteractionIntent =
	| 'tap'
	| 'doubleTap'
	| 'longPress'
	| 'drag'
	| 'drop'
	| 'swipe'
	| 'resize'
	| 'zoom';

export type InteractionFeedback = 'ripple' | 'pulse' | 'glow' | 'none';

export type InteractionHTMLAttributes<T extends HTMLElement = HTMLDivElement> = ThemeAttributes<T> & {
	interactionIntent?: InteractionIntent;
	interactionFeedback?: InteractionFeedback;
	interactionDelay?: number;
	interactionDuration?: string;
	interactionState?: 'idle' | 'pressed' | 'hover' | 'disabled' | 'active';
	interactionSticky?: boolean;
	interactionThreshold?: number;
};
