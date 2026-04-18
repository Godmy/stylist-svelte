import type { AvatarSelectorSize } from '$stylist/control/type/alias/avatar-selector-size';
import type { AvatarSelectorProps } from '$stylist/control/interface/recipe/avatar-selector';

export function createAvatarSelectorState(props: AvatarSelectorProps) {
	const sizeClasses = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-24 h-24'
	};

	const size = $derived((props.size ?? 'md') as AvatarSelectorSize);
	const className = $derived(props.class ?? '');
	const src = $derived(props.src ?? '');
	const alt = $derived(props.alt ?? 'Avatar');
	const imageClass = $derived(`rounded-full object-cover ${sizeClasses[size]}`);

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
		containerClass: 'inline-block',
		hasChildren: props.children !== undefined,
		children: props.children
	};
}

export default createAvatarSelectorState;
