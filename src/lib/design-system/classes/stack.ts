import type { Justification, Orientation, StackAlign } from '../tokens';
export type { StackAlign } from '../tokens';

export const STACK_DIRECTION_CLASSES: Record<Orientation, string> = {
	vertical: 'flex-col',
	horizontal: 'flex-row'
};

export const STACK_ALIGN_CLASSES: Record<StackAlign, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline'
};

export const STACK_JUSTIFY_CLASSES: Record<Justification, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};
