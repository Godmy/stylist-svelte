import type { InteractionFeedback } from '$stylist/token/type/alias/interaction-feedback';
import type { InteractionIntent } from '$stylist/interaction/type/struct/interaction/interaction-intent';

export interface SlotInteraction {
	interactionIntent?: InteractionIntent;
	interactionFeedback?: InteractionFeedback;
	interactionDelay?: number;
	interactionDuration?: string;
	interactionState?: 'idle' | 'pressed' | 'hover' | 'disabled' | 'active';
	interactionSticky?: boolean;
	interactionThreshold?: number;
}

