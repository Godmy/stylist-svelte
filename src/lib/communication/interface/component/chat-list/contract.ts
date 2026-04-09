import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ChatItemData, ChatItemUser } from '../chat-item/contract';

export type ChatListContract = RecordArchitectureMerge<
	[
		{
			chats: ChatItemData[];
			currentUser: ChatItemUser;
			activeChatId?: string;
		}
	]
>;
