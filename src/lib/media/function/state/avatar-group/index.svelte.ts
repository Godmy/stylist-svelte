import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { AvatarGroupProps } from '$stylist/media/type/struct/avatar-group';

export function createAvatarGroupState(props: AvatarGroupProps & InformationHTMLAttributes<HTMLDivElement>) {
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

	const sizeClasses = $derived(size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10');
	const fontSizeClasses = $derived(size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm');

	const hostClasses = $derived(`flex items-center ${className}`);

	const restProps = $derived.by(() => {
		const { class: _class, avatars: _avatars, maxVisible: _maxVisible, size: _size, showTooltip: _showTooltip, tooltipPosition: _tooltipPosition, avatarClass: _avatarClass, overflowClass: _overflowClass, ...rest } = props;
		return rest;
	});

	return {
		get avatars() { return avatars; },
		get maxVisible() { return maxVisible; },
		get size() { return size; },
		get showTooltip() { return showTooltip; },
		get tooltipPosition() { return tooltipPosition; },
		get className() { return className; },
		get avatarClass() { return avatarClass; },
		get overflowClass() { return overflowClass; },
		get visibleAvatars() { return visibleAvatars; },
		get overflowCount() { return overflowCount; },
		get sizeClasses() { return sizeClasses; },
		get fontSizeClasses() { return fontSizeClasses; },
		get hostClasses() { return hostClasses; },
		get restProps() { return restProps; }
	};
}

export default createAvatarGroupState;
