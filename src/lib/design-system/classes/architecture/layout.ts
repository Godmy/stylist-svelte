import type { Alignment, Justification } from '../../tokens';
import type { SpacerAxis } from '../../props';
import type { LayoutSize } from '../../props/architecture/layout-extended';

/**
 * Layout class tokens.
 * Used by:
 * - architecture/layout/container.ts
 * - architecture/layout/horizontal-layout.ts
 * - architecture/layout/spacer.ts
 */

export const CONTAINER_MAX_WIDTH_CLASSES = {
	sm: 'max-w-screen-sm',
	md: 'max-w-screen-md',
	lg: 'max-w-screen-lg',
	xl: 'max-w-screen-xl',
	'2xl': 'max-w-screen-2xl',
	full: 'max-w-full'
} as const;
export type TokenContainerMaxWidth = keyof typeof CONTAINER_MAX_WIDTH_CLASSES;

export const HORIZONTAL_GAP_CLASSES = {
	none: 'gap-0',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
} as const;
export type HorizontalGap = keyof typeof HORIZONTAL_GAP_CLASSES;

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

/**
 * Layout direction classes
 */
export const LAYOUT_DIRECTION_CLASSES = {
	vertical: 'flex-col',
	horizontal: 'flex-row'
} as const;

/**
 * Layout size classes for responsive layouts
 */
export const LAYOUT_SIZE_CLASSES: Record<LayoutSize, string> = {
	'1/4': 'w-1/4',
	'1/3': 'w-1/3',
	'2/5': 'w-2/5',
	'1/2': 'w-1/2',
	'3/5': 'w-3/5',
	'2/3': 'w-2/3',
	'3/4': 'w-3/4',
	full: 'w-full'
} as const;

/**
 * Responsive layout size classes
 */
export const RESPONSIVE_LAYOUT_SIZE_CLASSES: Record<LayoutSize, string> = {
	'1/4': 'md:w-1/4',
	'1/3': 'md:w-1/3',
	'2/5': 'md:w-2/5',
	'1/2': 'md:w-1/2',
	'3/5': 'md:w-3/5',
	'2/3': 'md:w-2/3',
	'3/4': 'md:w-3/4',
	full: 'md:w-full'
} as const;
