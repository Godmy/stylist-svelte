import type { PictureToolbarProps } from '$stylist/design-system/attributes';
import { mergeClasses } from '$stylist/utils/classes';

export const createPictureToolbarState = (props: PictureToolbarProps) => {
	const containerClasses = $derived(
		mergeClasses(
			'flex items-center gap-2 rounded-lg border border-[--color-border-muted] p-1',
			props.class
		)
	);
	const buttonClasses = $derived(
		'inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-[--color-surface-muted]'
	);
	return {
		get containerClasses() {
			return containerClasses;
		},
		get buttonClasses() {
			return buttonClasses;
		}
	};
};
