import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotChatHeader } from '$stylist/chat/interface/slot/chat-header';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeChatHeader
	extends ComputeIntersectAll<[SlotChatHeader, InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {}