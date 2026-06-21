import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

// ChatHeader props interface
export interface SlotChatHeader {
	chat: SlotChat;
	currentUser: SlotUser;
	showActions?: boolean;
	class?: string;
}
