import type { Alignment, Justification } from '../tokens';
import type { SpacerAxis } from '../props';

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