import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import { MessageStyleManager } from '$stylist/chat/class/style-manager/message';

export const createMessageListState = (props: {
	messages: Message[];
	currentUser: User;
	onMessageAction?: (action: string, message: Message) => void;
}) => {
	const containerClasses = MessageStyleManager.getMessageListContainerClasses('flex-1 bg-[var(--color-background-secondary)]');

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
