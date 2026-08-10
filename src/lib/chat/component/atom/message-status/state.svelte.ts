import type { RecipeMessageStatusProps as RecipeMessageStatusProps } from '$stylist/chat/interface/recipe/message-status-props';

export function createMessageStatusState(props: RecipeMessageStatusProps) {
	const status = $derived(props.status ?? 'sent');
	const size = $derived(props.size ?? 'sm');
	const containerClasses = $derived(
		['message-status', `message-status--${status}`, props.class].filter(Boolean).join(' ')
	);
	const iconClasses = $derived(['message-status__icon', `message-status__icon--${size}`].join(' '));
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
