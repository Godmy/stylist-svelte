import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';

const Check = 'check';
const CheckCheck = 'check-check';

export const createMessageMetaState = (props: {
	message?: Message;
	showTimestamp?: boolean;
	showStatus?: boolean;
}) => {
	const showTimestamp = $derived(props.showTimestamp ?? true);
	const showStatus = $derived(props.showStatus ?? true);

	const timestamp = $derived(
		props.message?.timestamp instanceof Date
			? props.message.timestamp
			: props.message?.timestamp
				? new Date(props.message.timestamp as unknown as string | number | Date)
				: undefined
	);

	const displayStatus = $derived(
		props.message?.status === 'sent' || props.message?.status === 'delivered' || props.message?.status === 'read'
			? props.message.status
			: undefined
	);

	const statusIcon = $derived(
		displayStatus === 'read' ? CheckCheck : displayStatus === 'delivered' ? CheckCheck : Check
	);

	const statusIconClasses = $derived(
		`h-3 w-3 ${displayStatus === 'read' ? 'text-[--color-primary-600]' : ''}`
	);

	const containerClasses = 'message-meta flex items-center gap-1 mt-1';

	const separatorClasses = 'meta-separator text-[var(--color-text-secondary)] text-sm';

	const statusTextClasses = 'inline-flex items-center gap-1 text-xs text-[--color-gray-500]';

	return {
		get showTimestamp() {
			return showTimestamp;
		},
		get showStatus() {
			return showStatus;
		},
		get timestamp() {
			return timestamp;
		},
		get displayStatus() {
			return displayStatus;
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
		get separatorClasses() {
			return separatorClasses;
		},
		get statusTextClasses() {
			return statusTextClasses;
		}
	};
};

export default createMessageMetaState;
