import type { PictureToolbarProps } from '$stylist/design-system/attributes';
import { getPictureToolbarButtonClasses, getPictureToolbarContainerClasses } from './helpers';

export const createPictureToolbarState = (props: PictureToolbarProps) => {
	return {
		containerClasses: getPictureToolbarContainerClasses(props.class),
		buttonClasses: getPictureToolbarButtonClasses()
	};
};
