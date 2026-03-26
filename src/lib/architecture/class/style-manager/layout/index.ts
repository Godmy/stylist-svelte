import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenJustification } from '$stylist/architecture/type/token/justification';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { cn } from '$stylist/information/function/cn/index';
import type { TokenSize } from '$stylist/architecture/type/token/size';

export class LayoutStyleManager {
	static getAspectRatioClasses(className = ''): string {
		return ['relative', 'w-full', '[aspect-ratio:var(--aspect-ratio)]', className]
			.filter(Boolean)
			.join(' ');
	}

	static getContainerClasses(size: TokenSize, className = ''): string {
		const maxWidthClass =
			{
				xs: 'max-w-screen-xs',
				sm: 'max-w-screen-sm',
				md: 'max-w-screen-md',
				lg: 'max-w-screen-lg',
				xl: 'max-w-screen-xl',
				'2xl': 'max-w-screen-2xl',
				'1/4': 'max-w-[25%]',
				'1/3': 'max-w-[33.333333%]',
				'2/5': 'max-w-[40%]',
				'1/2': 'max-w-[50%]',
				'3/5': 'max-w-[60%]',
				'2/3': 'max-w-[66.666667%]',
				'3/4': 'max-w-[75%]',
				full: 'max-w-full'
			}[size] ?? 'max-w-full';
		return cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthClass, className);
	}

	static getDividerLineClass(dashed: boolean): string {
		return dashed
			? 'border-dashed border-[--color-border-secondary]'
			: 'border-solid border-[--color-border-secondary]';
	}

	static getDividerLineFlexClass(align: TokenAlignment, side: 'left' | 'right'): string {
		if (side === 'left' && align === 'left') return 'flex-none w-4';
		if (side === 'right' && align === 'right') return 'flex-none w-4';
		return 'flex-1';
	}

	static getGridLayoutContainerClass(className = ''): string {
		return cn('grid', className);
	}

	static getGridLayoutItemClass(className = '', itemClass = ''): string {
		return [StyleManagerBase.classes.card, 'p-4', className, itemClass].filter(Boolean).join(' ');
	}

	static getGridItemStyle(colSpan?: number, rowSpan?: number): string {
		let style = '';
		if (colSpan) {
			style += `grid-column: span ${colSpan};`;
		}
		if (rowSpan) {
			style += `grid-row: span ${rowSpan};`;
		}
		return style;
	}

	static getGridLayoutStyle(columns: string, gap: string): string {
		return `grid-template-columns: ${columns}; gap: ${gap};`;
	}

	static getHorizontalLayoutClasses(
		gap: TokenSize,
		alignItems: TokenAlignment,
		justifyContent: TokenJustification,
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
				'2xl': 'gap-12',
				'1/4': 'gap-1',
				'1/3': 'gap-2',
				'2/5': 'gap-2',
				'1/2': 'gap-4',
				'3/5': 'gap-4',
				'2/3': 'gap-6',
				'3/4': 'gap-8',
				full: 'gap-12'
			}[gap],
			className
		);
	}

	static getSpacerClasses(axis: TokenOrientation, className = ''): string {
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
