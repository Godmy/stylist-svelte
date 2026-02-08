import type { ColorVariant, CommonSize, NeutralVariant, SemanticVariant } from './variants';
import type { ExtendedSize } from './sizes';

/**
 * Icon token model.
 * Used by:
 * - information/media/base-icon.ts
 * - information/media/icons.ts
 */
export type TokenIconVariant = 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';
export type TokenIconSize = 'xs' | ExtendedSize | '2xl';

export type TokenIconChevronSize = CommonSize;
export type TokenIconCircleVariant = SemanticVariant | NeutralVariant | 'dark' | 'light';
export type TokenIconWrapperSize = CommonSize | 'xl';
export type TokenIconWrapperVariant =
	| 'default'
	| SemanticVariant
	| NeutralVariant
	| 'dark'
	| 'light';
export type TokenIconWrapperShape = 'circle' | 'square' | 'rounded';

export const TOKEN_ICON_SIZE_CLASSES: Record<TokenIconSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8',
	'2xl': 'w-10 h-10'
};

export const TOKEN_ICON_VARIANT_CLASSES: Record<TokenIconVariant, string> = {
	default: 'text-current',
	primary: 'text-[var(--color-primary-500)]',
	secondary: 'text-[var(--color-secondary-500)]',
	success: 'text-[var(--color-success-500)]',
	warning: 'text-[var(--color-warning-500)]',
	danger: 'text-[var(--color-danger-500)]',
	info: 'text-[var(--color-info-500)]',
	neutral: 'text-[var(--color-neutral-500)]',
	dark: 'text-[var(--color-text-primary)]',
	light: 'text-[var(--color-text-inverse)]'
};

export const TOKEN_ICON_WRAPPER_PADDING_CLASSES: Record<TokenIconSize, string> = {
	xs: 'p-0.5',
	sm: 'p-1',
	md: 'p-1.5',
	lg: 'p-2',
	xl: 'p-3',
	'2xl': 'p-4'
};

export const TOKEN_ICON_WRAPPER_SHAPE_CLASSES: Record<TokenIconWrapperShape, string> = {
	circle: 'rounded-full',
	square: 'rounded-none',
	rounded: 'rounded-md'
};

export const TOKEN_ICON_WRAPPER_COLOR_CLASSES: Record<ColorVariant, string> = {
	primary: 'text-[var(--color-primary-500)] bg-[var(--color-primary-100)]',
	secondary: 'text-[var(--color-secondary-500)] bg-[var(--color-secondary-100)]',
	success: 'text-[var(--color-success-500)] bg-[var(--color-success-100)]',
	warning: 'text-[var(--color-warning-500)] bg-[var(--color-warning-100)]',
	danger: 'text-[var(--color-danger-500)] bg-[var(--color-danger-100)]',
	info: 'text-[var(--color-info-500)] bg-[var(--color-info-100)]',
	gray: 'text-[var(--color-neutral-500)] bg-[var(--color-neutral-100)]'
};

export const TOKEN_ICON_DIRECTION_ROTATION_CLASSES = {
	up: 'rotate-0',
	right: 'rotate-90',
	down: 'rotate-180',
	left: '-rotate-90'
} as const;

export const TOKEN_ICON_CHEVRON_DEFAULTS = {
	isOpen: false,
	size: 'md' as TokenIconChevronSize,
	direction: 'down' as const,
	variant: 'default' as const,
	disabled: false,
	iconName: 'chevron-down'
};

export const TOKEN_ICON_CIRCLE_DEFAULTS = {
	variant: 'primary' as TokenIconCircleVariant,
	size: 'md' as CommonSize,
	filled: false,
	disabled: false
};

export const TOKEN_ICON_WRAPPER_DEFAULTS = {
	size: 'md' as TokenIconWrapperSize,
	variant: 'default' as TokenIconWrapperVariant,
	shape: 'circle' as TokenIconWrapperShape,
	color: 'primary' as ColorVariant,
	disabled: false
};
