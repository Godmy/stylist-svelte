import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { RecipeAvatarGroup } from '$stylist/media/interface/recipe/avatar-group';

export function createAvatarGroupState(
	props: RecipeAvatarGroup & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography
) {
	const avatars = $derived(props.avatars ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const size = $derived(props.size ?? 'md');
	const showTooltip = $derived(props.showTooltip ?? true);
	const tooltipPosition = $derived(props.tooltipPosition ?? 'top');
	const className = $derived(props.class ?? '');
	const avatarClass = $derived(props.avatarClass ?? '');
	const overflowClass = $derived(props.overflowClass ?? '');

	const visibleAvatars = $derived(avatars.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, avatars.length - maxVisible));

	const sizeClasses = $derived(`ag-size--${size}`);
	const fontSizeClasses = $derived(`ag-font-size--${size}`);

	const hostClasses = $derived(`ag-host ${className}`.trim());

	const restProps = $derived.by(() => {
		const {
			class: _class,
			avatars: _avatars,
			maxVisible: _maxVisible,
			size: _size,
			showTooltip: _showTooltip,
			tooltipPosition: _tooltipPosition,
			avatarClass: _avatarClass,
			overflowClass: _overflowClass,
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
		get showTooltip() {
			return showTooltip;
		},
		get tooltipPosition() {
			return tooltipPosition;
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
		get hostClasses() {
			return hostClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
