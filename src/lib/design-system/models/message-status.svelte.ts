import type { MessageStatusProps } from '$stylist/design-system/props';
import { IndicatorsStyleManager } from '$stylist/design-system/styles/indicators';

type MessageStatusType = 'sent' | 'delivered' | 'read';

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
		IndicatorsStyleManager.getMessageStatusContainerClasses(status as MessageStatusType)
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
