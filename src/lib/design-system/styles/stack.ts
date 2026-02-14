import type { Justification, Orientation } from '../tokens';
import type { StackAlign } from '../classes/stack';
import {
	STACK_ALIGN_CLASSES,
	STACK_DIRECTION_CLASSES,
	STACK_JUSTIFY_CLASSES
} from '../classes/stack';
import { cn } from '../utils/cn';

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
		return typeof spacing === 'number' ? `${spacing}px` : spacing;
	}
}
