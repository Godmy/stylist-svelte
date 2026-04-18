import type { SlotChat as Chat } from '$stylist/communication/interface/slot/chat';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';

export const createChatListState = (props: { chats: Chat[]; currentUser: User; activeChatId?: string }) => {
	const containerClasses = 'flex flex-col h-full overflow-y-auto bg-[var(--color-background-primary)] border-r border-[var(--color-border-primary)]';

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
