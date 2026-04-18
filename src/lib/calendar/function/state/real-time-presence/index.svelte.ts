import type { RealTimePresenceStatus } from '$stylist/calendar/type/struct/real-time-presence-status';
import type { RecipeRealTimePresence as RealTimePresenceContract } from '$stylist/calendar/interface/recipe/real-time-presence';

export function createRealTimePresenceState(props: RealTimePresenceContract) {
	const users = $derived(props.users ?? []);
	const showAvatars = $derived(props.showAvatars ?? true);
	const showStatus = $derived(props.showStatus ?? true);
	const showLastSeen = $derived(props.showLastSeen ?? true);
	const showCursorPositions = $derived(props.showCursorPositions ?? false);
	const title = $derived(props.title ?? 'Active Users');
	const className = $derived(props.class ?? '');
	const userListClass = $derived(props.userListClass ?? '');
	const userItemClass = $derived(props.userItemClass ?? '');
	const statusClass = $derived(props.statusClass ?? '');

	const restProps = $derived.by(() => {
		const {
			users: _users,
			showAvatars: _showAvatars,
			showStatus: _showStatus,
			showLastSeen: _showLastSeen,
			showCursorPositions: _showCursorPositions,
			title: _title,
			class: _class,
			userListClass: _userListClass,
			userItemClass: _userItemClass,
			statusClass: _statusClass,
			...rest
		} = props;
		return rest;
	});

	function getStatusColor(status: RealTimePresenceStatus): string {
		switch (status) {
			case 'online': return 'bg-[var(--color-success-500)]';
			case 'away': return 'bg-yellow-500';
			case 'busy': return 'bg-[var(--color-danger-500)]';
			default: return 'bg-[var(--color-neutral-500)]';
		}
	}

	function getStatusText(status: RealTimePresenceStatus): string {
		switch (status) {
			case 'online': return 'Online';
			case 'away': return 'Away';
			case 'busy': return 'Busy';
			default: return 'Offline';
		}
	}

	function getStatusIconClass(status: RealTimePresenceStatus): string {
		switch (status) {
			case 'online': return 'text-[var(--color-success-500)]';
			case 'away': return 'text-yellow-500';
			case 'busy': return 'text-[var(--color-danger-500)]';
			default: return 'text-[var(--color-text-secondary)]';
		}
	}

	function formatLastSeen(date?: Date): string {
		if (!date) return 'Unknown';
		const now = new Date();
		const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
		if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
		if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
		if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
		return `${Math.floor(diffInSeconds / 86400)} days ago`;
	}

	return {
		get users() { return users; },
		get showAvatars() { return showAvatars; },
		get showStatus() { return showStatus; },
		get showLastSeen() { return showLastSeen; },
		get showCursorPositions() { return showCursorPositions; },
		get title() { return title; },
		get className() { return className; },
		get userListClass() { return userListClass; },
		get userItemClass() { return userItemClass; },
		get statusClass() { return statusClass; },
		get restProps() { return restProps; },
		getStatusColor,
		getStatusText,
		getStatusIconClass,
		formatLastSeen
	};
}

export default createRealTimePresenceState;
