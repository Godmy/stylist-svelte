import type { ChatMessageStatus } from '$stylist/design-system/props';

export type ChatPreviewMessage = {
	text: string;
	sender: string;
	timestamp?: string;
	isOwn?: boolean;
	avatar?: string;
	status?: ChatMessageStatus;
};

export type ChatPreviewProps = {
	class?: string;
	title: string;
	participants: string[];
	messages: ChatPreviewMessage[];
	maxMessages?: number;
	showAvatars?: boolean;
};

export type ChatPreviewItem = ChatPreviewMessage & {
	status?: ChatMessageStatus;
};

export const createChatPreviewState = (props: ChatPreviewProps) => {
	const maxMessages = $derived(props.maxMessages ?? 5);
	const showAvatars = $derived(props.showAvatars ?? true);
	const displayMessages = $derived(props.messages.slice(0, maxMessages));
	const classes = $derived(
		['chat-preview border rounded-lg bg-white shadow-sm overflow-hidden', props.class]
			.filter(Boolean)
			.join(' ')
	);
	const headerClasses = $derived('p-4 border-b bg-gray-50 flex items-center justify-between');
	const chatInfoClasses = $derived('flex items-center');
	const titleClasses = $derived('font-semibold text-gray-900');
	const participantsClasses = $derived('text-sm text-gray-500 ml-2');
	const messagesContainerClasses = $derived('max-h-80 overflow-y-auto p-4 space-y-4');
	const avatarClasses = $derived('w-6 h-6 rounded-full mr-2 flex-shrink-0');

	return {
		get title() {
			return props.title;
		},
		get participants() {
			return props.participants;
		},
		get displayMessages() {
			return displayMessages;
		},
		get showAvatars() {
			return showAvatars;
		},
		get classes() {
			return classes;
		},
		get headerClasses() {
			return headerClasses;
		},
		get chatInfoClasses() {
			return chatInfoClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get participantsClasses() {
			return participantsClasses;
		},
		get messagesContainerClasses() {
			return messagesContainerClasses;
		},
		get avatarClasses() {
			return avatarClasses;
		}
	};
};

