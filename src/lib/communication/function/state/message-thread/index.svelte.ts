import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { SlotMessageThread as MessageThreadProps } from '$stylist/communication/interface/slot/message-thread';
import { MessageStyleManager } from '$stylist/communication/class/style-manager/message';

export const createMessageThreadState = (props: MessageThreadProps) => {
	const hostClasses = $derived(
		MessageStyleManager.getThreadHostClasses(props.class)
	);
	
	const headerClasses = $derived(
		MessageStyleManager.getThreadHeaderClasses()
	);
	
	const containerClasses = $derived(
		MessageStyleManager.getThreadContainerClasses()
	);
	
	const messageContainerClasses = $derived(
		MessageStyleManager.getThreadMessageContainerClasses()
	);
	
	const variantClass = $derived(
		props.variant ? `variant-${props.variant}` : ''
	);
	
	const loadingClasses = $derived(
		MessageStyleManager.getThreadLoadingClasses()
	);
	
	const spinnerClasses = $derived(
		MessageStyleManager.getThreadSpinnerClasses()
	);

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







