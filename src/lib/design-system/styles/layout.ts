import type { Alignment, Justification } from '../tokens';
import type { ContainerMaxWidth, SpacerAxis } from '../props';
import {
	CONTAINER_MAX_WIDTH_CLASSES,
	HORIZONTAL_ALIGN_ITEMS_CLASSES,
	HORIZONTAL_GAP_CLASSES,
	HORIZONTAL_JUSTIFY_CONTENT_CLASSES,
	SPACER_AXIS_CLASSES
} from '../classes/layout';
import { BASE_CLASSES } from '../classes/classes';
import { cn } from '../utils/cn';

export class LayoutStyleManager {
	static getAspectRatioClasses(className = ''): string {
		return ['relative', 'w-full', '[aspect-ratio:var(--aspect-ratio)]', className]
			.filter(Boolean)
			.join(' ');
	}

	static getContainerClasses(maxWidth: ContainerMaxWidth, className = ''): string {
		const maxWidthClass =
			CONTAINER_MAX_WIDTH_CLASSES[maxWidth as keyof typeof CONTAINER_MAX_WIDTH_CLASSES] ??
			CONTAINER_MAX_WIDTH_CLASSES.full;
		return cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthClass, className);
	}

	static getDividerLineClass(dashed: boolean): string {
		return dashed
			? 'border-dashed border-[--color-border-secondary]'
			: 'border-solid border-[--color-border-secondary]';
	}

	static getDividerLineFlexClass(align: Alignment, side: 'left' | 'right'): string {
		if (side === 'left' && align === 'start') return 'flex-none w-4';
		if (side === 'right' && align === 'end') return 'flex-none w-4';
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
		gap: 'none' | 'sm' | 'md' | 'lg' | 'xl',
		alignItems: Alignment,
		justifyContent: Justification,
		wrap: boolean,
		className = ''
	): string {
		return cn(
			'flex',
			HORIZONTAL_ALIGN_ITEMS_CLASSES[alignItems],
			HORIZONTAL_JUSTIFY_CONTENT_CLASSES[justifyContent],
			wrap ? 'flex-wrap' : 'flex-nowrap',
			HORIZONTAL_GAP_CLASSES[gap],
			className
		);
	}

	static getSpacerClasses(axis: SpacerAxis, className = ''): string {
		const axisClass = SPACER_AXIS_CLASSES[axis];
		return `inline-block flex-shrink-0 ${axisClass} ${className}`.trim();
	}

	static getSpacerSize(size?: string | number): string {
		if (typeof size === 'number') return `${size}px`;
		return size ?? '1rem';
	}
}
