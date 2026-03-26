import type { ThemeAttributes } from '$stylist/information/interface/theme';

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
