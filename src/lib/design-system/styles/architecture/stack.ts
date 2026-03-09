import type { Justification, Orientation } from '../../tokens';
import type { Alignment } from '../../tokens/architecture/alignments';
import { cn } from '../../utils/cn/index';

export const STACK_DIRECTION_CLASSES: Record<Orientation, string> = {
	vertical: 'flex-col',
	horizontal: 'flex-row'
};

export const STACK_ALIGN_CLASSES: Record<Alignment, string> = {
	top: 'items-start',
	'top-center': 'items-start',
	'top-start': 'items-start',
	'top-end': 'items-start',
	bottom: 'items-end',
	'bottom-center': 'items-end',
	'bottom-start': 'items-end',
	'bottom-end': 'items-end',
	left: 'items-center',
	'left-center': 'items-center',
	'left-start': 'items-start',
	'left-end': 'items-end',
	right: 'items-center',
	'right-center': 'items-center',
	'right-start': 'items-start',
	'right-end': 'items-end',
	center: 'items-center',
};

export const STACK_JUSTIFY_CLASSES: Record<Justification, string> = {
	stretch: 'justify-stretch',
	baseline: 'justify-start',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly',
	justify: 'justify-center'
};

export class StackStyleManager {
	static getStackClasses(
		direction: Orientation,
		align: Alignment,
		justify: Justification,
		className = ''
	): string {
		return cn(
			'flex',
			STACK_DIRECTION_CLASSES[direction],
			STACK_ALIGN_CLASSES[align],
			STACK_JUSTIFY_CLASSES[justify],
			className
		);
	}

	static getStackGap(spacing: string | number): string {
		if (typeof spacing === 'number') return `${spacing}px`;

		switch (spacing) {
			case 'xs':
				return '0.25rem';
			case 'sm':
				return '0.5rem';
			case 'md':
				return '1rem';
			case 'lg':
				return '1.5rem';
			case 'xl':
				return '2rem';
			default:
				return spacing;
		}
	}
}
