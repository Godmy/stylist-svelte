import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TeamAvatarStackProps } from '$stylist/media/type/struct/team-avatar-stack';

function getStatusColor(status?: string): string {
	switch (status) {
		case 'online': return 'bg-[var(--color-success-500)]';
		case 'away': return 'bg-yellow-500';
		case 'busy': return 'bg-[var(--color-danger-500)]';
		default: return 'bg-[var(--color-neutral-400)]';
	}
}

export function createTeamAvatarStackState(props: TeamAvatarStackProps & InformationHTMLAttributes<HTMLDivElement>) {
	const members = $derived(props.members ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showStatus = $derived(props.showStatus ?? true);
	const showTooltip = $derived(props.showTooltip ?? true);
	const size = $derived(props.size ?? 'md');
	const stackDirection = $derived(props.stackDirection ?? 'horizontal');
	const className = $derived(props.class ?? '');
	const avatarClass = $derived(props.avatarClass ?? '');
	const tooltipClass = $derived(props.tooltipClass ?? '');

	const visibleMembers = $derived(members.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, members.length - maxVisible));

	const sizeClasses = $derived(size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10');
	const statusSize = $derived(size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-2.5 h-2.5');

	const hostClasses = $derived(`flex items-center ${stackDirection === 'vertical' ? 'flex-col' : 'flex-row'} ${className}`);

	const restProps = $derived.by(() => {
		const { class: _class, members: _members, maxVisible: _maxVisible, showStatus: _showStatus, showTooltip: _showTooltip, size: _size, stackDirection: _stackDirection, avatarClass: _avatarClass, tooltipClass: _tooltipClass, ...rest } = props;
		return rest;
	});

	return {
		get members() { return members; },
		get maxVisible() { return maxVisible; },
		get showStatus() { return showStatus; },
		get showTooltip() { return showTooltip; },
		get size() { return size; },
		get stackDirection() { return stackDirection; },
		get className() { return className; },
		get avatarClass() { return avatarClass; },
		get tooltipClass() { return tooltipClass; },
		get visibleMembers() { return visibleMembers; },
		get overflowCount() { return overflowCount; },
		get sizeClasses() { return sizeClasses; },
		get statusSize() { return statusSize; },
		get hostClasses() { return hostClasses; },
		get restProps() { return restProps; },
		getStatusColor
	};
}

export default createTeamAvatarStackState;
