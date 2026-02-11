import type { Alignment, Justification } from '../tokens';
import { cn } from '../utils/classnames';
import { BASE_CLASSES } from './classes';
import type { ContainerMaxWidth, SpacerAxis } from '../props';

export const getAspectRatioClasses = (className = '') => {
	return `relative w-full [aspect-ratio:var(--aspect-ratio)] ${className}`.trim();
};

export const getContainerClasses = (maxWidth: ContainerMaxWidth, className = '') => {
	const maxWidthClass = CONTAINER_MAX_WIDTH_CLASSES[maxWidth as keyof typeof CONTAINER_MAX_WIDTH_CLASSES] || CONTAINER_MAX_WIDTH_CLASSES.full;
	return cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthClass, className);
};

export const getDividerLineClass = (dashed: boolean) => {
	return dashed
		? 'border-dashed border-[--color-border-secondary]'
		: 'border-solid border-[--color-border-secondary]';
};

export const getDividerLineFlexClass = (align: Alignment, side: 'left' | 'right') => {
	if (side === 'left' && align === 'start') return 'flex-none w-4';
	if (side === 'right' && align === 'end') return 'flex-none w-4';
	return 'flex-1';
};

export const getGridLayoutContainerClass = (className = '') => {
	return `grid ${className}`.trim();
};

export const getGridLayoutItemClass = (className = '', itemClass = '') => {
	return `${BASE_CLASSES.card} p-4 ${className} ${itemClass}`.trim();
};

export const getGridLayoutStyle = (columns: string, gap: string) => {
	return `grid-template-columns: ${columns}; gap: ${gap};`;
};

export const getHorizontalLayoutClasses = (
	gap: HorizontalGap,
	alignItems: Alignment,
	justifyContent: Justification,
	wrap: boolean,
	className = ''
) => {
	const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';
	return cn(
		'flex',
		HORIZONTAL_ALIGN_ITEMS_CLASSES[alignItems],
		HORIZONTAL_JUSTIFY_CONTENT_CLASSES[justifyContent],
		wrapClass,
		HORIZONTAL_GAP_CLASSES[gap],
		className
	);
};

export const getSpacerSize = (size?: string | number) => {
	if (typeof size === 'number') return `${size}px`;
	return size ?? '1rem';
};

export const getSpacerClasses = (axis: SpacerAxis, className = '') => {
	const axisClass = SPACER_AXIS_CLASSES[axis];
	return `inline-block flex-shrink-0 ${axisClass} ${className}`.trim();
};

/**
 * Layout class tokens.
 * Used by:
 * - architecture/layout/container.ts
 * - architecture/layout/horizontal-layout.ts
 * - architecture/layout/spacer.ts
 */

export type TokenContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type HorizontalGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export const CONTAINER_MAX_WIDTH_CLASSES: Record<TokenContainerMaxWidth, string> = {
	sm: 'max-w-screen-sm',
	md: 'max-w-screen-md',
	lg: 'max-w-screen-lg',
	xl: 'max-w-screen-xl',
	'2xl': 'max-w-screen-2xl',
	full: 'max-w-full'
};

export const HORIZONTAL_GAP_CLASSES: Record<HorizontalGap, string> = {
	none: 'gap-0',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
};

export const HORIZONTAL_ALIGN_ITEMS_CLASSES: Record<Alignment, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch'
};

export const HORIZONTAL_JUSTIFY_CONTENT_CLASSES: Record<Justification, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};

export const SPACER_AXIS_CLASSES: Record<SpacerAxis, string> = {
	horizontal: 'w-[var(--spacer-size)]',
	vertical: 'h-[var(--spacer-size)]'
} as const;

