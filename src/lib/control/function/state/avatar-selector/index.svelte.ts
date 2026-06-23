import type { AvatarSize } from '$stylist/media/type/struct/avatar-size';
import type { AvatarSelectorProps } from '$stylist/control/interface/recipe/avatar-selector';

export function createAvatarSelectorState(props: AvatarSelectorProps) {
	const size = $derived((props.size ?? 'md') as AvatarSize);
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
