import type { ChatRoomProps } from '$stylist/chat/type/alias/chat-room-props';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createChatRoomState(props: ChatRoomProps) {
	let messageText = $state('');

	const variantClass = $derived(`c-chat-room__messages--${props.variant ?? 'default'}`);

	const containerClasses = $derived(mergeClassNames('c-chat-room', props.class ?? ''));

	const headerClasses = $derived(
		mergeClassNames('c-chat-room__header', props.headerClass ?? '')
	);

	const messagesAreaClasses = $derived(
		mergeClassNames('c-chat-room__messages', variantClass, props.messagesClass ?? '')
	);

	const footerClasses = $derived(
		mergeClassNames('c-chat-room__footer', props.footerClass ?? '')
	);

	const participantAvatarClasses = (index: number) =>
		mergeClassNames('c-chat-room__avatar', index > 0 && 'c-chat-room__avatar--overlap');

	const participantOverflowClasses = 'c-chat-room__overflow';

	const loadingClasses = 'c-chat-room__loading';

	const spinnerClasses = 'c-chat-room__spinner';

	function handleSend(text: string) {
		props.onMessageSend?.(text);
		messageText = '';
	}

	return {
		get messageText() {
			return messageText;
		},
		get variantClass() {
			return variantClass;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get messagesAreaClasses() {
			return messagesAreaClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get participantOverflowClasses() {
			return participantOverflowClasses;
		},
		get loadingClasses() {
			return loadingClasses;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		participantAvatarClasses,
		handleSend
	};
}

export default createChatRoomState;
