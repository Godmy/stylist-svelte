import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import type { SlotMessageThread as MessageThreadProps } from '$stylist/chat/interface/slot/message-thread';

export const createMessageThreadState = (props: MessageThreadProps) => {
	const hostClasses = $derived(ClassNamesManager.merge('c-message-thread', props.class));

	const headerClasses = $derived('c-message-thread__header');

	const containerClasses = $derived('c-message-thread__body');

	const messageContainerClasses = $derived('c-message-thread__messages');

	const variantClass = $derived(props.variant ? `c-message-thread__item--${props.variant}` : '');

	const loadingClasses = $derived('c-message-thread__loading');

	const spinnerClasses = $derived('c-message-thread__spinner');

	return {
		get hostClasses() {
			return hostClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get messageContainerClasses() {
			return messageContainerClasses;
		},
		get variantClass() {
			return variantClass;
		},
		get loadingClasses() {
			return loadingClasses;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		get title() {
			return props.title;
		},
		get messages() {
			return props.messages ?? [];
		},
		get loading() {
			return props.loading ?? false;
		},
		get messageVariant() {
			return props.messageVariant;
		}
	};
};

export default createMessageThreadState;
