import type { ChipProps } from '$stylist/design-system/props';

export const createChipState = (props: ChipProps) => {
	const classes = [
		'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium',
		props.class
	]
		.filter(Boolean)
		.join(' ');
	return {
		classes
	};
};

