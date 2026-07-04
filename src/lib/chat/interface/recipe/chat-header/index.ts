import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotChatHeader } from '$stylist/chat/interface/slot/chat-header';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeChatHeader
	extends ComputeIntersectAll<[SlotChatHeader, HTMLAttributes<HTMLDivElement>, SlotInteraction, SlotChildren]> {}