import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ChatRoomProps } from '$stylist/communication/type/alias/chat-room-props';
import { ChatStyleManager } from '$stylist/communication/class/style-manager/chat';

export function createChatRoomState(props: ChatRoomProps) {
	let messageText = $state('');

	const variantClass = $derived(
		({
			default: 'gap-4',
			compact: 'gap-2',
			spacious: 'gap-6'
		} as Record<string, string>)[props.variant ?? 'default']
	);

	const containerClasses = $derived(
		ChatStyleManager.getRoomContainerClasses(props.class ?? '')
	);

	const headerClasses = $derived(
		ChatStyleManager.getRoomHeaderClasses(props.headerClass ?? '')
	);

	const messagesAreaClasses = $derived(
		ChatStyleManager.getRoomMessagesAreaClasses(variantClass, props.messagesClass ?? '')
	);

	const footerClasses = $derived(
		ChatStyleManager.getRoomFooterClasses(props.footerClass ?? '')
	);

	const participantAvatarClasses = (index: number) => ChatStyleManager.getRoomParticipantAvatarClasses(index);

	const participantOverflowClasses = ChatStyleManager.getRoomOverflowBadgeClasses();

	const loadingClasses = 'flex h-full items-center justify-center';

	const spinnerClasses = 'h-8 w-8 animate-spin rounded-full border-b-2 border-[var(--color-primary-500)]';

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
