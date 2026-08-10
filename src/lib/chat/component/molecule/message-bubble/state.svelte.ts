import type { SlotMessageBubble as IMessageBubbleProps } from '$stylist/chat/interface/slot/message-bubble';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createMessageBubbleState = (props: IMessageBubbleProps) => {
	const isSecondary = $derived((props.variant ?? 'primary') === 'secondary');
	const isRight = $derived((props.align ?? 'left') === 'right');

	const containerClasses = $derived(
		mergeClassNames(
			'message-bubble-container',
			isRight ? 'message-bubble-container--right' : 'message-bubble-container--left',
			String(props.class ?? '')
		)
	);

	const wrapperClasses = $derived(
		mergeClassNames(
			'message-bubble-wrapper',
			isSecondary
				? 'message-bubble-wrapper--secondary'
				: isRight
					? 'message-bubble-wrapper--right'
					: 'message-bubble-wrapper--left'
		)
	);

	const authorClasses = $derived(
		mergeClassNames(
			'message-bubble-author',
			isSecondary && 'message-bubble-author--secondary',
			!isSecondary && isRight && 'message-bubble-author--right'
		)
	);

	const messageClasses = $derived(
		mergeClassNames(
			'message-bubble-text',
			isSecondary && 'message-bubble-text--secondary',
			!isSecondary && isRight && 'message-bubble-text--right'
		)
	);

	const timestampClasses = $derived(
		mergeClassNames(
			'message-bubble-timestamp',
			isSecondary && 'message-bubble-timestamp--secondary',
			!isSecondary && isRight && 'message-bubble-timestamp--right'
		)
	);

	const avatarContainerClasses = $derived(
		mergeClassNames(
			'message-bubble-avatar',
			(props.align ?? 'left') === 'left'
				? 'message-bubble-avatar--left'
				: 'message-bubble-avatar--right'
		)
	);

	const showLeftAvatar = $derived(props.avatar != null && props.align === 'left');

	const showRightAvatar = $derived(props.avatar != null && props.align === 'right');

	return {
		get containerClasses() {
			return containerClasses;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get authorClasses() {
			return authorClasses;
		},
		get messageClasses() {
			return messageClasses;
		},
		get timestampClasses() {
			return timestampClasses;
		},
		get avatarContainerClasses() {
			return avatarContainerClasses;
		},
		get showLeftAvatar() {
			return showLeftAvatar;
		},
		get showRightAvatar() {
			return showRightAvatar;
		}
	};
};

export default createMessageBubbleState;
