import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import { ChatStyleManager } from '$stylist/communication/class/style-manager/chat';

export const createUserStatusState = (props: {
	user: User;
	showAvatar?: boolean;
	showName?: boolean;
	showStatusText?: boolean;
}) => {
	const showAvatar = $derived(props.showAvatar ?? true);
	const showName = $derived(props.showName ?? true);
	const showStatusText = $derived(props.showStatusText ?? false);

	const statusText = $derived.by(() => {
		const userStatus = props.user.status;
		const lastSeen = ((props.user as unknown) as Record<string, unknown>).lastSeen as Date | undefined;
		switch (userStatus) {
			case 'online':
				return 'в сети';
			case 'away':
			case 'idle':
				return 'не на месте';
			case 'typing':
				return 'печатает...';
			case 'offline':
				return lastSeen
					? `был(а) ${new Date(lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
					: 'не в сети';
			default:
				return '';
		}
	});

	const containerClasses = ChatStyleManager.getUserStatusContainerClasses();

	const userInfoClasses = ChatStyleManager.getUserStatusInfoClasses();

	const userNameClasses = ChatStyleManager.getUserStatusNameClasses();

	const statusTextClasses = ChatStyleManager.getUserStatusTextClasses();

	return {
		get showAvatar() {
			return showAvatar;
		},
		get showName() {
			return showName;
		},
		get showStatusText() {
			return showStatusText;
		},
		get statusText() {
			return statusText;
		},
		get containerClasses() {
			return containerClasses;
		},
		get userInfoClasses() {
			return userInfoClasses;
		},
		get userNameClasses() {
			return userNameClasses;
		},
		get statusTextClasses() {
			return statusTextClasses;
		}
	};
};

export default createUserStatusState;
