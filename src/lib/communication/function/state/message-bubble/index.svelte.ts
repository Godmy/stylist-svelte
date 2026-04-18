import type { SlotMessageBubble as IMessageBubbleProps } from '$stylist/communication/interface/slot/message-bubble';
import { MessageBubbleStyleManager } from '$stylist/communication/class/style-manager/message-bubble';

export const createMessageBubbleState = (props: IMessageBubbleProps) => {
	const containerClasses = $derived(
		MessageBubbleStyleManager.getContainerClasses(props.align ?? 'left', String(props.class ?? ''))
	);

	const wrapperClasses = $derived(
		MessageBubbleStyleManager.getWrapperClasses(props.align ?? 'left', props.variant ?? 'primary')
	);

	const authorClasses = $derived(
		MessageBubbleStyleManager.getAuthorClasses(props.align ?? 'left', props.variant ?? 'primary')
	);

	const messageClasses = $derived(
		MessageBubbleStyleManager.getMessageClasses(props.align ?? 'left', props.variant ?? 'primary')
	);

	const timestampClasses = $derived(
		MessageBubbleStyleManager.getTimestampClasses(props.align ?? 'left', props.variant ?? 'primary')
	);

	const avatarContainerClasses = $derived(
		MessageBubbleStyleManager.getAvatarContainerClasses(props.align ?? 'left')
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
