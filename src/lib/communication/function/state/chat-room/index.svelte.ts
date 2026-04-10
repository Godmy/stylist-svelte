import type { User, Message } from '$stylist/communication/interface/component/chat/other';

export type ChatRoomMessage = {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: 'sent' | 'delivered' | 'read';
	isOwn: boolean;
};

export const createChatRoomState = (props: {
	messages: ChatRoomMessage[];
	currentUser: { id: string; name: string; avatar?: string };
	participants: { id: string; name: string; avatar?: string }[];
	title?: string;
	subtitle?: string;
	class?: string;
	messagesClass?: string;
	headerClass?: string;
	footerClass?: string;
	onMessageSend?: (text: string) => void;
	loading?: boolean;
	variant?: 'default' | 'compact' | 'spacious';
}) => {
	const variantClass = $derived(
		({
			default: 'p-4',
			compact: 'p-2',
			spacious: 'p-6'
		})[props.variant ?? 'default']
	);

	const containerClasses = $derived(
		`chat-room flex flex-col h-full border rounded-lg shadow-sm ${props.class ?? ''}`.trim()
	);

	const headerClasses = $derived(
		`bg-[var(--color-background-primary)] border-b p-4 flex items-center ${props.headerClass ?? ''}`.trim()
	);

	const messagesAreaClasses = $derived(
		`flex-1 overflow-y-auto p-4 space-y-4 ${props.messagesClass ?? ''} ${variantClass}`.trim()
	);

	const footerClasses = $derived(
		`bg-[var(--color-background-secondary)] border-t p-4 ${props.footerClass ?? ''}`.trim()
	);

	const participantAvatarClasses = (index: number) =>
		`w-8 h-8 rounded-full overflow-hidden ${index > 0 ? '-ml-2' : 'ml-0'} border-2 border-[var(--color-background-primary)]`;

	function handleSend(text: string) {
		props.onMessageSend?.(text);
	}

	return {
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
		participantAvatarClasses,
		handleSend
	};
};

export default createChatRoomState;
