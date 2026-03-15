import type { Alignment, Justification } from '../../tokens';
import type { Orientation } from '../../tokens/architecture/orientations';
import type { ComponentSize } from '../../tokens';
import { BASE_CLASSES } from '../../runtime/foundation';
import { cn } from '../../utils/cn/index';
import type { ContainerMaxWidth as LayoutContainerMaxWidth, LayoutSize } from '../../tokens/architecture/size';

export class LayoutStyleManager {
	static getAspectRatioClasses(className = ''): string {
		return ['relative', 'w-full', '[aspect-ratio:var(--aspect-ratio)]', className]
			.filter(Boolean)
			.join(' ');
	}

	static getContainerClasses(size: LayoutContainerMaxWidth, className = ''): string {
		const maxWidthClass =
			{
				xs: 'max-w-screen-xs',
				sm: 'max-w-screen-sm',
				md: 'max-w-screen-md',
				lg: 'max-w-screen-lg',
				xl: 'max-w-screen-xl',
				'2xl': 'max-w-screen-2xl',
				full: 'max-w-full'
			}[size] ?? 'max-w-full';
		return cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthClass, className);
	}

	static getDividerLineClass(dashed: boolean): string {
		return dashed
			? 'border-dashed border-[--color-border-secondary]'
			: 'border-solid border-[--color-border-secondary]';
	}

	static getDividerLineFlexClass(align: Alignment, side: 'left' | 'right'): string {
		if (side === 'left' && align === 'left') return 'flex-none w-4';
		if (side === 'right' && align === 'right') return 'flex-none w-4';
		return 'flex-1';
	}

	static getGridLayoutContainerClass(className = ''): string {
		return cn('grid', className);
	}

	static getGridLayoutItemClass(className = '', itemClass = ''): string {
		return [BASE_CLASSES.card, 'p-4', className, itemClass].filter(Boolean).join(' ');
	}

	static getGridLayoutStyle(columns: string, gap: string): string {
		return `grid-template-columns: ${columns}; gap: ${gap};`;
	}

	static getHorizontalLayoutClasses(
		gap: ComponentSize,
		alignItems: Alignment,
		justifyContent: Justification,
		wrap: boolean,
		className = ''
	): string {
		return cn(
			'flex',
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
			}[alignItems],
			{
				stretch: 'justify-stretch',
				baseline: 'justify-start',
				between: 'justify-between',
				around: 'justify-around',
				evenly: 'justify-evenly',
				justify: 'justify-center'
			}[justifyContent],
			wrap ? 'flex-wrap' : 'flex-nowrap',
			{
				xs: 'gap-1',
				sm: 'gap-2',
				md: 'gap-4',
				lg: 'gap-6',
				xl: 'gap-8',
				'2xl': 'gap-12'
			}[gap],
			className
		);
	}

	static getSpacerClasses(axis: Orientation, className = ''): string {
		const axisClass =
			{
				horizontal: 'w-[var(--spacer-size)]',
				vertical: 'h-[var(--spacer-size)]'
			}[axis];
		return `inline-block flex-shrink-0 ${axisClass} ${className}`.trim();
	}

	static getSpacerSize(size?: string | number): string {
		if (typeof size === 'number') return `${size}px`;

		switch (size) {
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
			case '2xl':
				return '3rem';
			default:
				return size ?? '1rem';
		}
	}
}
