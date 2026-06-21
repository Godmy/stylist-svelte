import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotChatMessage } from '$stylist/chat/interface/slot/chat-message';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeChatMessage
	extends ComputeIntersectAll<
		[SlotChatMessage, Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>, SlotChildren]
	> {}