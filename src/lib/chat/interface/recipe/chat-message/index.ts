import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotChatMessage } from '$stylist/chat/interface/slot/chat-message';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeChatMessage
	extends ComputeIntersectAll<
		[SlotChatMessage, Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotInteraction, SlotChildren]
	> {}