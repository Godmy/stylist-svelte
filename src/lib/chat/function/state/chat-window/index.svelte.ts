import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { ChatWindowChat } from '$stylist/chat/interface/slot/chat-window-chat';
import { ChatStyleManager } from '$stylist/chat/class/style-manager/chat';

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

	const containerClasses = ChatStyleManager.getWindowContainerClasses();

	const headerClasses = ChatStyleManager.getWindowHeaderClasses();

	const messagesClasses = ChatStyleManager.getWindowMessagesClasses();

	const inputClasses = ChatStyleManager.getWindowInputClasses();

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
