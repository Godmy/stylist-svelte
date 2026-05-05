import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import { ChatStyleManager } from '$stylist/chat/class/style-manager/chat';

export const createChatItemState = (props: { chat: Chat; currentUser: User; isActive?: boolean; class?: string }) => {
	const isActiveVal = $derived(props.isActive ?? false);
	const isGroupChat = $derived(props.chat.participants.length > 2);

	const otherUser = $derived(
		!isGroupChat ? props.chat.participants.find((user: User) => user.id !== props.currentUser.id) : null
	);

	const lastMessagePreview = $derived.by(() => {
		if (!props.chat.lastMessage) return 'No messages yet';

		const content = typeof props.chat.lastMessage === 'object' ? props.chat.lastMessage.content : props.chat.lastMessage || '';
		return content.length > 30 ? `${content.substring(0, 30)}...` : content;
	});

	const containerClasses = $derived(
		ChatStyleManager.getItemContainerClasses(isActiveVal, props.class ?? '')
	);

	const chatInfoClasses = ChatStyleManager.getItemInfoClasses();

	const chatNameClasses = ChatStyleManager.getItemNameClasses();

	const lastMessageClasses = ChatStyleManager.getItemPreviewClasses();

	const chatMetaClasses = ChatStyleManager.getItemMetaClasses();

	const chatActionsClasses = ChatStyleManager.getItemActionsClasses();

	function handleClick() {
		// dispatch('select')
	}

	function handleKeydown(keyEvent: KeyboardEvent) {
		if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
			handleClick();
		}
	}

	function handleDelete() {
		// dispatch('delete')
	}

	return {
		get isGroupChat() {
			return isGroupChat;
		},
		get otherUser() {
			return otherUser;
		},
		get lastMessagePreview() {
			return lastMessagePreview;
		},
		get containerClasses() {
			return containerClasses;
		},
		get chatInfoClasses() {
			return chatInfoClasses;
		},
		get chatNameClasses() {
			return chatNameClasses;
		},
		get lastMessageClasses() {
			return lastMessageClasses;
		},
		get chatMetaClasses() {
			return chatMetaClasses;
		},
		get chatActionsClasses() {
			return chatActionsClasses;
		},
		handleClick,
		handleKeydown,
		handleDelete
	};
};

export default createChatItemState;
