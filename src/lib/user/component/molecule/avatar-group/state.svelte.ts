import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { RecipeAvatarGroup } from '$stylist/user/interface/recipe/avatar-group';
import type { AvatarGroupAvatar } from '$stylist/user/type/object/avatar-group/avatargroupavatar';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function statusDotClass(status?: AvatarGroupAvatar['status']): string {
	return `ag-status-dot--${status ?? 'offline'}`;
}

export function createAvatarGroupState(
	props: RecipeAvatarGroup & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography
) {
	const avatars = $derived(props.avatars ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const size = $derived(props.size ?? 'md');
	const stackDirection = $derived(props.stackDirection ?? 'horizontal');
	const showStatus = $derived(props.showStatus ?? true);
	const showTooltip = $derived(props.showTooltip ?? true);
	const className = $derived(props.class ?? '');
	const avatarClass = $derived(props.avatarClass ?? '');
	const overflowClass = $derived(props.overflowClass ?? '');
	const tooltipClass = $derived(props.tooltipClass ?? '');

	const visibleAvatars = $derived(avatars.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, avatars.length - maxVisible));

	const sizeClasses = $derived(`ag-size--${size}`);
	const fontSizeClasses = $derived(`ag-font-size--${size}`);
	const statusSizeClasses = $derived(`ag-status-size--${size}`);
	const itemDirectionClass = $derived(stackDirection === 'vertical' ? 'ag-item--v' : 'ag-item--h');

	const hostClasses = $derived(
		mergeClassNames(
			'ag-host',
			stackDirection === 'vertical' ? 'ag-host--vertical' : 'ag-host--horizontal',
			className
		)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			avatars: _avatars,
			maxVisible: _maxVisible,
			size: _size,
			stackDirection: _stackDirection,
			showStatus: _showStatus,
			showTooltip: _showTooltip,
			avatarClass: _avatarClass,
			overflowClass: _overflowClass,
			tooltipClass: _tooltipClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get avatars() {
			return avatars;
		},
		get maxVisible() {
			return maxVisible;
		},
		get size() {
			return size;
		},
		get stackDirection() {
			return stackDirection;
		},
		get showStatus() {
			return showStatus;
		},
		get showTooltip() {
			return showTooltip;
		},
		get className() {
			return className;
		},
		get avatarClass() {
			return avatarClass;
		},
		get overflowClass() {
			return overflowClass;
		},
		get tooltipClass() {
			return tooltipClass;
		},
		get visibleAvatars() {
			return visibleAvatars;
		},
		get overflowCount() {
			return overflowCount;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get fontSizeClasses() {
			return fontSizeClasses;
		},
		get statusSizeClasses() {
			return statusSizeClasses;
		},
		get itemDirectionClass() {
			return itemDirectionClass;
		},
		get hostClasses() {
			return hostClasses;
		},
		get restProps() {
			return restProps;
		},
		statusDotClass
	};
}
