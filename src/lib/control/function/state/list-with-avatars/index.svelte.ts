import type { ListWithAvatarsProps } from '$stylist/control/type/struct/list-with-avatars-props';

export function createListWithAvatarsState(props: ListWithAvatarsProps) {
	const avatarSize = $derived(
		props.size === 'sm' ? 'w-8 h-8' : props.size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
	);
	const paddingClass = $derived(
		props.size === 'sm' ? 'py-2' : props.size === 'lg' ? 'py-4' : 'py-3'
	);
	const textSize = $derived(
		props.size === 'sm' ? 'text-sm' : props.size === 'lg' ? 'text-lg' : 'text-base'
	);

	return {
		get avatarSize() {
			return avatarSize;
		},
		get paddingClass() {
			return paddingClass;
		},
		get textSize() {
			return textSize;
		}
	};
}

export default createListWithAvatarsState;
