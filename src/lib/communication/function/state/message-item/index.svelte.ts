import type { Message, User } from '$stylist/communication/interface/component/chat/other';

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
	let availableReactions = $state(['👍', '👎', '❤️', '😂', '😮', '😢']);

	const messageAlignment = $derived(isOwn ? 'items-end' : 'items-start');

	const messageBackground = $derived(
		isOwn
			? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
			: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)]'
	);

	const messageBorder = $derived(
		isOwn ? 'border-[var(--color-primary-600)]' : 'border-[var(--color-border-primary)]'
	);

	const messageMargin = $derived(isOwn ? 'ml-auto' : '');

	const messageContainerClasses = 'message-container flex gap-2 w-full';

	const messageBubbleClasses = $derived(
		`message-bubble flex flex-col max-w-[75%] p-3 rounded-xl border box-shadow-custom28 relative ${messageBackground} ${messageBorder} ${messageMargin}`.trim()
	);

	const messageContentClasses = 'message-content word-wrap break-word whitespace-pre-wrap';

	const messageActionsClasses = 'message-actions flex gap-2 mt-1 opacity-70 hover:opacity-100';

	const actionButtonClasses = 'action-button bg-none border-none cursor-pointer p-1 rounded-base hover:bg-[color-mix(in_srgb,var(--color-text-primary)_5%,transparent)]';

	const reactionsPickerClasses = 'reactions-picker absolute bottom-full left-0 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-2 flex gap-1 shadow-custom38 z-[var(--z-index-docked)]';

	const reactionOptionClasses = 'reaction-option text-xl cursor-pointer p-1 rounded-base hover:bg-[var(--color-background-secondary)]';

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
		get messageAlignment() {
			return messageAlignment;
		},
		get messageBackground() {
			return messageBackground;
		},
		get messageBorder() {
			return messageBorder;
		},
		get messageMargin() {
			return messageMargin;
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
