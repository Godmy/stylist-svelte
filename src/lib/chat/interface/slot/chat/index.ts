import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenMessageStatus } from '$stylist/chat/type/enum/message-status';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';

export interface SlotChat {
	id: string;
	name?: string;
	participants: SlotUser[];
	isGroup: boolean;
	lastMessage?: SlotMessage | string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}
