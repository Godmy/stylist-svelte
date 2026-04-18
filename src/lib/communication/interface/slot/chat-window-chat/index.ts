import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';

export interface ChatWindowChat {
	id: string;
	name?: string;
	participants: User[];
	isGroup: boolean;
	lastMessage?: Message | string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}
