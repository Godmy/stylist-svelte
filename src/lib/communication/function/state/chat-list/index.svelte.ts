import type { SlotChat as Chat } from '$stylist/communication/interface/slot/chat';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import { ChatStyleManager } from '$stylist/communication/class/style-manager/chat';

export const createChatListState = (props: { chats: Chat[]; currentUser: User; activeChatId?: string }) => {
	const containerClasses = ChatStyleManager.getListContainerClasses();

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
