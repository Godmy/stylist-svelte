import type { Orientation, Justification } from '$stylist/design-system/tokens';

export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = Justification;
export type StackDirection = Orientation;

const DIRECTION_CLASSES: Record<StackDirection, string> = {
	vertical: 'flex-col',
	horizontal: 'flex-row'
};

const ALIGN_CLASSES: Record<StackAlign, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline'
};

const JUSTIFY_CLASSES: Record<StackJustify, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};

export const getStackClasses = (
	direction: StackDirection,
	align: StackAlign,
	justify: StackJustify,
	className = ''
) => {
	return `flex ${DIRECTION_CLASSES[direction]} ${ALIGN_CLASSES[align]} ${JUSTIFY_CLASSES[justify]} ${className}`.trim();
};

export const getStackGap = (spacing: string | number) => {
	return typeof spacing === 'number' ? `${spacing}px` : spacing;
};
