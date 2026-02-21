import type { ColorVariant, DefaultVariants } from '../../tokens/architecture/variants';
import type { ExtendedSize } from '../../tokens/architecture/sizes';
import type { IconWrapperShape } from '../../tokens/architecture/shapes';

export const TOKEN_ICON_SIZE_CLASSES: Record<ExtendedSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8',
	'2xl': 'w-10 h-10'
};

export const TOKEN_ICON_VARIANT_CLASSES: Record<DefaultVariants, string> = {
	default: 'text-current',
	primary: 'text-[var(--color-primary-500)]',
	secondary: 'text-[var(--color-secondary-500)]',
	success: 'text-[var(--color-success-500)]',
	warning: 'text-[var(--color-warning-500)]',
	danger: 'text-[var(--color-danger-500)]',
	info: 'text-[var(--color-info-500)]',
	solid: 'text-[var(--color-primary-500)]',
	outline: 'text-[var(--color-text-primary)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)]',
	subtle: 'text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-500)]',
	dark: 'text-[var(--color-text-inverse)]',
	light: 'text-[var(--color-text-primary)]'
};

export const TOKEN_ICON_WRAPPER_PADDING_CLASSES: Record<ExtendedSize, string> = {
	xs: 'p-0.5',
	sm: 'p-1',
	md: 'p-1.5',
	lg: 'p-2',
	xl: 'p-3',
	'2xl': 'p-4'
};

export const TOKEN_ICON_WRAPPER_SHAPE_CLASSES: Record<IconWrapperShape, string> = {
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
	size: 'md' as const
};
export const TOKEN_ICON_CIRCLE_DEFAULTS = {
	variant: 'default' as const,
	size: 'md' as const
};
export const TOKEN_ICON_WRAPPER_DEFAULTS = {
	size: 'md' as const,
	variant: 'default' as const,
	shape: 'circle' as const,
	color: 'primary' as const
};
