import type { Alignment } from '$stylist/design-system/tokens';

export const getDividerLineClass = (dashed: boolean) => {
	return dashed
		? 'border-dashed border-[--color-border-secondary]'
		: 'border-solid border-[--color-border-secondary]';
};

export const getDividerLineFlexClass = (align: Alignment, side: 'left' | 'right') => {
	if (side === 'left' && align === 'start') return 'flex-none w-4';
	if (side === 'right' && align === 'end') return 'flex-none w-4';
	return 'flex-1';
};
