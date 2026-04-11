import type { User } from '$stylist/communication/interface/component/chat/other';

export const createUserStatusState = (props: {
	user: User;
	showAvatar?: boolean;
	showName?: boolean;
	showStatusText?: boolean;
}) => {
	const showAvatar = $derived(props.showAvatar ?? true);
	const showName = $derived(props.showName ?? true);
	const showStatusText = $derived(props.showStatusText ?? false);

	const statusText = $derived(() => {
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

	const containerClasses = 'user-status flex items-center gap-2';

	const userInfoClasses = 'user-info flex flex-col';

	const userNameClasses = 'user-name font-medium text-[var(--color-text-primary)] text-sm';

	const statusTextClasses = 'status-text text-sm text-[var(--color-text-secondary)]';

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
