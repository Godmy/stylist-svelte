import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

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
	const statusIcon = $derived(
		{
			sent: 'check',
			delivered: 'check',
			read: 'check-check'
		}[props.status ?? 'sent']
	);

	const statusIconClasses = $derived(
		mergeClassNames(
			'c-chat-message__status-icon',
			props.status === 'read' && 'c-chat-message__status-icon--read'
		)
	);

	const containerClasses = $derived(
		mergeClassNames(
			'c-chat-message',
			props.isOwn && 'c-chat-message--own',
			props.class ?? ''
		)
	);

	const contentClasses = $derived(
		mergeClassNames('c-chat-message__content', props.contentClass ?? '')
	);

	const headerClasses = $derived(
		mergeClassNames('c-chat-message__header', props.headerClass ?? '')
	);

	const footerClasses = $derived(
		mergeClassNames('c-chat-message__footer', props.footerClass ?? '')
	);

	const bubbleClasses = $derived(
		mergeClassNames(
			'c-chat-message__bubble',
			props.isOwn
				? 'c-chat-message__bubble--own'
				: `c-chat-message__bubble--${props.variant ?? 'default'}`
		)
	);

	const textClasses = $derived('c-chat-message__text');

	return {
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
