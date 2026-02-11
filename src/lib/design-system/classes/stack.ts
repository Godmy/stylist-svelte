import type { Justification, Orientation, StackAlign as TokenStackAlign } from '../tokens';

export type StackAlign = TokenStackAlign;

const DIRECTION_CLASSES: Record<Orientation, string> = {
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

const JUSTIFY_CLASSES: Record<Justification, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};

export const getStackClasses = (
	direction: Orientation,
	align: StackAlign,
	justify: Justification,
	className = ''
) => {
	return `flex ${DIRECTION_CLASSES[direction]} ${ALIGN_CLASSES[align]} ${JUSTIFY_CLASSES[justify]} ${className}`.trim();
};

export const getStackGap = (spacing: string | number) => {
	return typeof spacing === 'number' ? `${spacing}px` : spacing;
};
