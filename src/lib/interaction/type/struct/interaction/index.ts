/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { InteractionFeedback } from './interaction-feedback';
export type { InteractionIntent } from './interaction-intent';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { InteractionIntent } from '$stylist/interaction/type/struct/interaction-intent';
import type { InteractionFeedback } from '$stylist/interaction/type/struct/interaction-feedback';

export type InteractionHTMLAttributes<T extends HTMLElement = HTMLDivElement> = ThemeAttributes<T> & {
	interactionIntent?: InteractionIntent;
	interactionFeedback?: InteractionFeedback;
	interactionDelay?: number;
	interactionDuration?: string;
	interactionState?: 'idle' | 'pressed' | 'hover' | 'disabled' | 'active';
	interactionSticky?: boolean;
	interactionThreshold?: number;
};