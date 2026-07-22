import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AvatarUserStatus } from '$stylist/media/type/alias/avatar-user-status';
import type { RecipeAvatar } from '$stylist/media/interface/recipe/avatar';

import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createAvatarState(props: RecipeAvatar & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography) {
	const name = $derived(props.name ?? '');
	const status = $derived(props.status);
	const showStatus = $derived(props.showStatus ?? false);
	const size = $derived((props.size ?? 'md') as (typeof TOKEN_SIZE)[number]);
	const initials = $derived(name ? name.charAt(0).toUpperCase() : '?');
	const avatarClasses = $derived(
		mergeClassNames('c-avatar', `c-avatar--${size}`, props.class ?? '')
	);
	const imageClasses = $derived('c-avatar__image');
	const fallbackClasses = $derived('c-avatar__fallback');

	function getStatusClasses(status?: AvatarUserStatus): string {
		return `c-avatar__status--${status || 'offline'}`;
	}

	function getStatusSizeClasses(size: (typeof TOKEN_SIZE)[number]): string {
		return `c-avatar__status--${size}`;
	}

	const statusColor = $derived(getStatusClasses(status));
	const statusSize = $derived(getStatusSizeClasses(size));
	const statusIndicatorClasses = $derived(
		mergeClassNames('c-avatar__status', statusColor, statusSize)
	);

	const src = $derived(props.src);
	const alt = $derived(props.alt);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			variant: _variant,
			size: _size,
			src: _src,
			alt: _alt,
			name: _name,
			status: _status,
			showStatus: _showStatus,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get name() {
			return name;
		},
		get status() {
			return status;
		},
		get showStatus() {
			return showStatus;
		},
		get size() {
			return size;
		},
		get initials() {
			return initials;
		},
		get avatarClasses() {
			return avatarClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get fallbackClasses() {
			return fallbackClasses;
		},
		get statusColor() {
			return statusColor;
		},
		get statusSize() {
			return statusSize;
		},
		get statusIndicatorClasses() {
			return statusIndicatorClasses;
		},
		get src() {
			return src;
		},
		get alt() {
			return alt;
		},
		get restProps() {
			return restProps;
		},
		getStatusClasses,
		getStatusSizeClasses
	};
}

