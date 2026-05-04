import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { MessageStyleManager } from '$stylist/communication/class/style-manager/message';

type MessageStatus = 'sent' | 'delivered' | 'read';

export const createChatMessageState = (props: {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: MessageStatus;
	isOwn?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: TokenAppearance;
}) => {
	const alignmentClass = $derived(props.isOwn ? 'justify-end' : 'justify-start');

	const bgClass = $derived(
		props.isOwn
			? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
			: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
	);

	const variantClass = $derived(
		(({
			default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
			primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
			secondary: 'bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]'
		}) as Partial<Record<string, string>>)[props.variant ?? 'default'] ?? ''
	);

	const bubbleShapeClass = $derived(props.isOwn ? 'rounded-br-none' : 'rounded-bl-none');

	const statusIcon = $derived(
		({
			sent: 'check',
			delivered: 'check',
			read: 'check-check'
		})[props.status ?? 'sent']
	);

	const statusIconClasses = $derived(
		`ml-1 h-3 w-3 ${props.status === 'read' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-tertiary)]'}`
	);

	const containerClasses = $derived(MessageStyleManager.getChatMessageContainerClasses(!!props.isOwn, props.class ?? ''));

	const contentClasses = $derived(MessageStyleManager.getChatMessageContentClasses(props.contentClass ?? ''));

	const headerClasses = $derived(MessageStyleManager.getChatMessageHeaderClasses(props.headerClass ?? ''));

	const footerClasses = $derived(MessageStyleManager.getChatMessageFooterClasses(props.footerClass ?? ''));

	const bubbleClasses = $derived(
		MessageStyleManager.getChatMessageBubbleShellClasses(!!props.isOwn, stateVariantClass(), '')
	);

	const textClasses = $derived(MessageStyleManager.getChatMessageTextClasses());

	function stateVariantClass() {
		return props.isOwn ? '' : variantClass;
	}

	return {
		get alignmentClass() {
			return alignmentClass;
		},
		get bgClass() {
			return bgClass;
		},
		get variantClass() {
			return variantClass;
		},
		get bubbleShapeClass() {
			return bubbleShapeClass;
		},
		get statusIcon() {
			return statusIcon;
		},
		get statusIconClasses() {
			return statusIconClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get bubbleClasses() {
			return bubbleClasses;
		},
		get textClasses() {
			return textClasses;
		}
	};
};

export default createChatMessageState;
