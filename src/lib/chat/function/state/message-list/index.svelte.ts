import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

export const createMessageListState = (props: {
	messages: Message[];
	currentUser: User;
	onMessageAction?: (action: string, message: Message) => void;
}) => {
	const containerClasses = 'message-list';

	function handleMessageClick(message: Message) {
		// dispatch('messageClick', { message })
	}

	function handleMessageReaction(message: Message, reaction: string) {
		// dispatch('messageReaction', { message, reaction })
		props.onMessageAction?.('reaction', message);
	}

	function enhanceScroll(node: HTMLElement) {
		let handleScroll: () => void;

		if (props.messages.length > 0) {
			node.scrollTop = node.scrollHeight;
		}

		handleScroll = () => {
			// Could be used to implement "show new messages" indicator
		};

		node.addEventListener('scroll', handleScroll);

		return {
			destroy() {
				if (handleScroll) {
					node.removeEventListener('scroll', handleScroll);
				}
			}
		};
	}

	return {
		get containerClasses() {
			return containerClasses;
		},
		handleMessageClick,
		handleMessageReaction,
		enhanceScroll
	};
};

export default createMessageListState;
