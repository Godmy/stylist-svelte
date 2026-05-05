import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import { MessageStyleManager } from '$stylist/chat/class/style-manager/message';

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
		MessageStyleManager.getMetaStatusIconClasses(displayStatus === 'read')
	);

	const containerClasses = MessageStyleManager.getMetaClasses();

	const separatorClasses = MessageStyleManager.getMetaSeparatorClasses();

	const statusTextClasses = MessageStyleManager.getMetaStatusTextClasses();

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
