import type { Chat, User } from '$stylist/communication/interface/component/chat/other';

export const createChatItemState = (props: { chat: Chat; currentUser: User; isActive?: boolean; class?: string }) => {
	const isActiveVal = $derived(props.isActive ?? false);
	const isGroupChat = $derived(props.chat.participants.length > 2);

	const otherUser = $derived(
		!isGroupChat ? props.chat.participants.find((user: User) => user.id !== props.currentUser.id) : null
	);

	const lastMessagePreview = $derived(() => {
		if (!props.chat.lastMessage) return 'No messages yet';

		const content = typeof props.chat.lastMessage === 'object' ? props.chat.lastMessage.content : props.chat.lastMessage || '';
		return content.length > 30 ? `${content.substring(0, 30)}...` : content;
	});

	const containerClasses = $derived(
		`flex items-center gap-3 p-3 cursor-pointer border-b border-[var(--color-border-primary)] transition-colors duration-200 hover:bg-[var(--color-background-secondary)] ${isActiveVal ? 'bg-[var(--color-primary-50)]' : ''} ${props.class ?? ''}`.trim()
	);

	const chatInfoClasses = 'flex-1 min-w-0';

	const chatNameClasses = 'font-semibold text-[var(--color-text-primary)] text-base mb-1 whitespace-nowrap overflow-hidden text-ellipsis';

	const lastMessageClasses = 'text-sm text-[var(--color-text-secondary)] whitespace-nowrap overflow-hidden text-ellipsis';

	const chatMetaClasses = 'flex flex-col items-end gap-1';

	const chatActionsClasses = 'absolute right-2 opacity-0 transition-opacity duration-200 hover:opacity-100';

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
