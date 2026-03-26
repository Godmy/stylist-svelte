import type { TokenJustification } from '$stylist/architecture/type/token/justification';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import { cn } from '$stylist/information/function/cn/index';

export class StackStyleManager {
	static getStackClasses(
		direction: TokenOrientation,
		align: TokenAlignment,
		justify: TokenJustification,
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



