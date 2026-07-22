import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createMessageItemState = (props: {
	message: Message;
	isOwn?: boolean;
	showAvatar?: boolean;
	enableReactions?: boolean;
	sender?: User;
}) => {
	const isOwn = $derived(props.isOwn ?? false);
	const showAvatar = $derived(props.showAvatar ?? true);
	const enableReactions = $derived(props.enableReactions ?? true);

	let reactionsVisible = $state(false);
	const availableReactions = $state(['👍', '👎', '❤️', '😂', '😮', '😢']);

	const messageContainerClasses = $derived(
		mergeClassNames('message-container', isOwn ? 'message-container--own' : '')
	);

	const messageBubbleClasses = $derived(
		mergeClassNames('message-bubble', isOwn ? 'message-bubble--own' : 'message-bubble--other')
	);

	const messageContentClasses = 'message-content';

	const messageActionsClasses = 'message-actions';

	const actionButtonClasses = 'action-button';

	const reactionsPickerClasses = 'reactions-picker';

	const reactionOptionClasses = 'reaction-option';

	function handleReactionClick(reaction: string) {
		// dispatch('reaction', { reaction })
		reactionsVisible = false;
	}

	function handleReactionKeydown(event: KeyboardEvent, reaction: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleReactionClick(reaction);
		}
	}

	function handleReply() {
		// dispatch('reply', { message: props.message })
	}

	function handleForward() {
		// dispatch('forward', { message: props.message })
	}

	return {
		get isOwn() {
			return isOwn;
		},
		get showAvatar() {
			return showAvatar;
		},
		get enableReactions() {
			return enableReactions;
		},
		get reactionsVisible() {
			return reactionsVisible;
		},
		set reactionsVisible(value: boolean) {
			reactionsVisible = value;
		},
		get availableReactions() {
			return availableReactions;
		},
		get messageContainerClasses() {
			return messageContainerClasses;
		},
		get messageBubbleClasses() {
			return messageBubbleClasses;
		},
		get messageContentClasses() {
			return messageContentClasses;
		},
		get messageActionsClasses() {
			return messageActionsClasses;
		},
		get actionButtonClasses() {
			return actionButtonClasses;
		},
		get reactionsPickerClasses() {
			return reactionsPickerClasses;
		},
		get reactionOptionClasses() {
			return reactionOptionClasses;
		},
		handleReactionClick,
		handleReactionKeydown,
		handleReply,
		handleForward
	};
};

export default createMessageItemState;
