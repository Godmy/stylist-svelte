import type { AvatarSelectorProps } from '$stylist/user/interface/recipe/avatar-selector';

import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export function createAvatarSelectorState(props: AvatarSelectorProps) {
	const size = $derived((props.size ?? 'md') as (typeof TOKEN_SIZE)[number]);
	const className = $derived(props.class ?? '');
	const src = $derived(props.src ?? '');
	const alt = $derived(props.alt ?? 'Avatar');
	const imageClass = 'c-avatar-selector__image';

	return {
		get size() {
			return size;
		},
		get className() {
			return className;
		},
		get src() {
			return src;
		},
		get alt() {
			return alt;
		},
		get imageClass() {
			return imageClass;
		},
		containerClass: 'c-avatar-selector',
		hasChildren: props.children !== undefined,
		children: props.children
	};
}

export default createAvatarSelectorState;
