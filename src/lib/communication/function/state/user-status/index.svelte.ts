interface UserStatusUser {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'away' | 'offline' | 'typing';
	lastSeen?: Date;
}

export const createUserStatusState = (props: {
	user: UserStatusUser;
	showAvatar?: boolean;
	showName?: boolean;
	showStatusText?: boolean;
}) => {
	const showAvatar = $derived(props.showAvatar ?? true);
	const showName = $derived(props.showName ?? true);
	const showStatusText = $derived(props.showStatusText ?? false);

	const statusText = $derived(() => {
		switch (props.user.status) {
			case 'online':
				return 'в сети';
			case 'away':
				return 'не на месте';
			case 'typing':
				return 'печатает...';
			case 'offline':
				return props.user.lastSeen
					? `был(а) ${new Date(props.user.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
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
