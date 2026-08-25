import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

export const createChatListState = (props: {
	chats: Chat[];
	currentUser: User;
	activeChatId?: string;
}) => {
	const containerClasses = 'chat-list';

	function handleChatSelect(chat: Chat) {
		// dispatch('chatSelect', { chat })
	}

	function handleChatDelete(chat: Chat) {
		// dispatch('chatDelete', { chat })
	}

	return {
		get chats() {
			return props.chats;
		},
		get currentUser() {
			return props.currentUser;
		},
		get activeChatId() {
			return props.activeChatId;
		},
		get containerClasses() {
			return containerClasses;
		},
		handleChatSelect,
		handleChatDelete
	};
};

export default createChatListState;
