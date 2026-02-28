import type { Justification, Orientation } from '../../tokens';
import type { Alignment } from '../../tokens/architecture/alignments';
import { cn } from '../../utils/cn/index';

export const STACK_DIRECTION_CLASSES: Record<Orientation, string> = {
	vertical: 'flex-col',
	horizontal: 'flex-row'
};

export const STACK_ALIGN_CLASSES: Record<Alignment, string> = {
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
