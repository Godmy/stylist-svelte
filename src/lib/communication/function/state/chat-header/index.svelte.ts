import type { ChatHeaderProps } from '$stylist/communication/type/struct/chat-header/chat-header-props';
import type { ChatHeaderChat } from '$stylist/communication/type/struct/chat-header/chat-header-chat';
import type { ChatHeaderUser } from '$stylist/communication/type/struct/chat-header/chat-header-user';

export function ChatHeaderModel(props: ChatHeaderProps) {
	let isGroupChat = $state(false);
	let otherUser = $state<ChatHeaderUser | null>(null);

	function updateFromProps(nextProps: ChatHeaderProps) {
		isGroupChat = nextProps.chat.participants.length > 2;

		if (!isGroupChat) {
			otherUser =
				nextProps.chat.participants.find(
					(user: ChatHeaderUser) => user.id !== nextProps.currentUser.id
				) || null;
			return;
		}

		otherUser = null;
	}

	function handleCall(chat: ChatHeaderChat, dispatch: (event: string, detail: any) => void) {
		dispatch('call', { chat });
	}

	function handleVideoCall(
		chat: ChatHeaderChat,
		dispatch: (event: string, detail: any) => void
	) {
		dispatch('videoCall', { chat });
	}

	function handleInfo(chat: ChatHeaderChat, dispatch: (event: string, detail: any) => void) {
		dispatch('info', { chat });
	}

	updateFromProps(props);

	return {
		get isGroupChat() {
			return isGroupChat;
		},
		get otherUser() {
			return otherUser;
		},
		updateFromProps,
		handleCall,
		handleVideoCall,
		handleInfo
	};
}

export default ChatHeaderModel;


