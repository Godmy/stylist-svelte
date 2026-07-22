import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { RecipeTeamAvatarStack } from '$stylist/media/interface/recipe/team-avatar-stack';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function getStatusColor(status?: string): string {
	return `tas-status-dot--${status ?? 'default'}`;
}

export function createTeamAvatarStackState(
	props: RecipeTeamAvatarStack & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography
) {
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

	const sizeClasses = $derived(`tas-size--${size}`);
	const statusSize = $derived(`tas-status-size--${size}`);

	const hostClasses = $derived(
		mergeClassNames(
			'tas-host',
			stackDirection === 'vertical' ? 'tas-host--vertical' : 'tas-host--horizontal',
			className
		)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			members: _members,
			maxVisible: _maxVisible,
			showStatus: _showStatus,
			showTooltip: _showTooltip,
			size: _size,
			stackDirection: _stackDirection,
			avatarClass: _avatarClass,
			tooltipClass: _tooltipClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get members() {
			return members;
		},
		get maxVisible() {
			return maxVisible;
		},
		get showStatus() {
			return showStatus;
		},
		get showTooltip() {
			return showTooltip;
		},
		get size() {
			return size;
		},
		get stackDirection() {
			return stackDirection;
		},
		get className() {
			return className;
		},
		get avatarClass() {
			return avatarClass;
		},
		get tooltipClass() {
			return tooltipClass;
		},
		get visibleMembers() {
			return visibleMembers;
		},
		get overflowCount() {
			return overflowCount;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get statusSize() {
			return statusSize;
		},
		get hostClasses() {
			return hostClasses;
		},
		get restProps() {
			return restProps;
		},
		getStatusColor
	};
}
