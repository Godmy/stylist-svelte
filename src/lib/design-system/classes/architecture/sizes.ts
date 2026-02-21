import type { ComponentSize } from '../../tokens/architecture/sizes';

/**
 * Size class mappings for components.
 */

export const PADDING_SIZES: Record<ComponentSize, string> = {
	sm: 'px-3 py-1.5',
	md: 'px-4 py-2',
	lg: 'px-6 py-3',
	xl: 'px-7 py-3.5'
};

export const TEXT_SIZES: Record<ComponentSize, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl'
};

export const ICON_SIZES: Record<ComponentSize, string> = {
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6'
};

export const SIZE_CLASSES: Record<ComponentSize, string> = {
	sm: `${PADDING_SIZES.sm} ${TEXT_SIZES.sm}`,
	md: `${PADDING_SIZES.md} ${TEXT_SIZES.md}`,
	lg: `${PADDING_SIZES.lg} ${TEXT_SIZES.lg}`,
	xl: `${PADDING_SIZES.xl} ${TEXT_SIZES.xl}`
};
