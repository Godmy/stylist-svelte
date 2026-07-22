import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { ChatPreviewProps } from '$stylist/chat/type/struct/chat-preview';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createChatPreviewState(props: ChatPreviewProps | AnyProperty) {
	// Initialize props with defaults
	const title = props.title ?? 'Chat';
	const participants = props.participants ?? [];
	const messages = props.messages ?? [];
	const maxMessages = props.maxMessages ?? 3;
	const showAvatars = props.showAvatars ?? true;
	const variant = props.variant ?? 'default';
	const size = props.size ?? 'md';

	// Get display messages (limited by maxMessages)
	const displayMessages = $derived(messages.slice(0, maxMessages));

	const validVariant = ['default', 'elevated', 'muted'].includes(variant) ? variant : 'default';
	const validSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';

	const styles = {
		container: joinClassNames(
			'c-chat-preview',
			`c-chat-preview--${validVariant}`,
			`c-chat-preview--${validSize}`
		),
		header: 'c-chat-preview__header',
		chatInfo: 'c-chat-preview__chat-info',
		title: 'c-chat-preview__title',
		participants: 'c-chat-preview__participants',
		messagesContainer: 'c-chat-preview__messages'
	};

	// Merge classes with custom classes
	const classes = $derived(joinClassNames(String(props.class ?? ''), styles.container));

	return {
		get title() {
			return title;
		},
		get participants() {
			return participants;
		},
		get messages() {
			return messages;
		},
		get displayMessages() {
			return displayMessages;
		},
		get maxMessages() {
			return maxMessages;
		},
		get showAvatars() {
			return showAvatars;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get headerClasses() {
			return styles.header;
		},
		get chatInfoClasses() {
			return styles.chatInfo;
		},
		get titleClasses() {
			return styles.title;
		},
		get participantsClasses() {
			return styles.participants;
		},
		get messagesContainerClasses() {
			return styles.messagesContainer;
		}
	};
}

export default createChatPreviewState;
