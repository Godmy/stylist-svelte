import type { Justification, Orientation } from '$stylist/design-system/tokens';
import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import { cn } from '$stylist/design-system/utils/cn/index';

export class StackStyleManager {
	static getStackClasses(
		direction: Orientation,
		align: Alignment,
		justify: Justification,
		className = ''
	): string {
		return cn(
			'flex',
			{ vertical: 'flex-col', horizontal: 'flex-row' }[direction],
			{
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
				justify: 'items-center'
			}[align],
			{
				stretch: 'justify-stretch',
				baseline: 'justify-start',
				between: 'justify-between',
				around: 'justify-around',
				evenly: 'justify-evenly',
				justify: 'justify-center'
			}[justify],
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


