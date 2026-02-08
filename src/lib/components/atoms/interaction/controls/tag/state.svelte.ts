import type { TagProps } from '$stylist/design-system/attributes';

export const createTagState = (props: TagProps) => {
	return {
		classes: ['inline-flex items-center rounded-md px-2 py-1 text-sm', props.class]
			.filter(Boolean)
			.join(' ')
	};
};
