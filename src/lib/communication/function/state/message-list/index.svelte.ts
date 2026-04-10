import type { Message, User } from '$stylist/communication/interface/component/chat/other';

export const createMessageListState = (props: {
	messages: Message[];
	currentUser: User;
	onMessageAction?: (action: string, message: Message) => void;
}) => {
	const containerClasses = 'message-list flex flex-col flex-1 overflow-y-auto p-4 gap-4 bg-[var(--color-background-secondary)]';

	const scrollbarTrackClasses = 'bg-[var(--color-background-secondary)]';

	const scrollbarThumbClasses = 'bg-[var(--color-border-secondary)] rounded-sm hover:bg-[var(--color-text-secondary)]';

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
		get scrollbarTrackClasses() {
			return scrollbarTrackClasses;
		},
		get scrollbarThumbClasses() {
			return scrollbarThumbClasses;
		},
		handleMessageClick,
		handleMessageReaction,
		enhanceScroll
	};
};

export default createMessageListState;
