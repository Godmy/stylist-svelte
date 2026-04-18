import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';
import type { ChatWindowChat } from '$stylist/communication/interface/slot/chat-window-chat';

export const createChatWindowState = (props: {
	chat: ChatWindowChat;
	currentUser: User;
	messages: Message[];
}) => {
	const compatibleChat = $derived({
		...props.chat,
		lastMessage:
			typeof props.chat.lastMessage === 'object' && props.chat.lastMessage
				? (props.chat.lastMessage as Message).content
				: (props.chat.lastMessage as string)
	});

	const containerClasses = 'chat-window flex flex-col h-full w-full bg-[var(--color-background-secondary)] rounded-lg overflow-hidden shadow-custom40';

	const headerClasses = 'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3';

	const messagesClasses = 'chat-messages flex-1 overflow-y-auto';

	const inputClasses = 'chat-input border-t border-[var(--color-border-primary)] bg-white';

	function handleMessageSend(content: string) {
		// dispatch('messageSend', { content, chatId: props.chat.id })
	}

	function handleMessageReaction(event: CustomEvent<{ message: Message; reaction: string }>) {
		// dispatch('messageReaction', { messageId: event.detail.message.id, reaction: event.detail.reaction })
	}

	function handleCall() {
		// dispatch('call', { chat: props.chat })
	}

	function handleVideoCall() {
		// dispatch('videoCall', { chat: props.chat })
	}

	function handleChatInfo() {
		// dispatch('chatInfo', { chat: props.chat })
	}

	return {
		get compatibleChat() {
			return compatibleChat;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get messagesClasses() {
			return messagesClasses;
		},
		get inputClasses() {
			return inputClasses;
		},
		handleMessageSend,
		handleMessageReaction,
		handleCall,
		handleVideoCall,
		handleChatInfo
	};
};

export default createChatWindowState;
