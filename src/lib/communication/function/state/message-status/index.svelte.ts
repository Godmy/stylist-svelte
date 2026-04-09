import { IndicatorsStyleManager } from '$stylist/interaction/class/style-manager/indicators';
import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';

type MessageStatusProps = {
	status?: TokenMessageStatus;
	size?: 'sm' | 'md' | 'lg';
};

/**
 * MessageStatus state creator
 * Provides reactive state management for message status components using Svelte 5 runes
 *
 * @param props - MessageStatus component props
 * @returns Reactive state object with classes and computed values
 */
export function createMessageStatusState(props: MessageStatusProps) {
	const status = $derived(props.status ?? 'sent');
	const size = $derived(props.size ?? 'sm');
	const containerClasses = $derived(
		IndicatorsStyleManager.getMessageStatusContainerClasses(status as TokenMessageStatus)
	);
	const iconClasses = $derived(
		IndicatorsStyleManager.getMessageStatusIconClasses(
			size as Parameters<typeof IndicatorsStyleManager.getMessageStatusIconClasses>[0]
		)
	);
	const isDoubleCheck = $derived(status === 'read');

	return {
		get status() {
			return status;
		},
		get size() {
			return size;
		},
		get containerClasses() {
			return containerClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get isDoubleCheck() {
			return isDoubleCheck;
		}
	};
}

export default createMessageStatusState;






