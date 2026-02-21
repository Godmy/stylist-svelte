import type { Justification, Orientation } from '../../tokens';
import type { StackAlign } from '../../classes/architecture/stack';
import {
	STACK_ALIGN_CLASSES,
	STACK_DIRECTION_CLASSES,
	STACK_JUSTIFY_CLASSES
} from '../../classes/architecture/stack';
import { cn } from '../../utils/cn/index';

export class StackStyleManager {
	static getStackClasses(
		direction: Orientation,
		align: StackAlign,
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
		// If it's a number, return as pixels
		if (typeof spacing === 'number') return `${spacing}px`;
		
		// If it's one of our predefined size tokens, map to corresponding values
		switch (spacing) {
			case 'xs':
				return '0.25rem'; // 4px
			case 'sm':
				return '0.5rem';  // 8px
			case 'md':
				return '1rem';    // 16px
			case 'lg':
				return '1.5rem';  // 24px
			case 'xl':
				return '2rem';    // 32px
			default:
				// If it's not a recognized token, return as-is
				return spacing;
		}
	}
}
