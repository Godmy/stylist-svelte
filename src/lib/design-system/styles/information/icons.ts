import type { DefaultVariants } from '../../tokens/information/input-variants';
import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { ComponentShape } from '../../tokens/architecture/shapes';
import { cn } from '../../utils/cn/index';

export const TOKEN_ICON_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8',
	'2xl': 'w-10 h-10'
};

export const TOKEN_ICON_VARIANT_CLASSES: Record<DefaultVariants, string> = {
	default: 'text-current',
	primary: 'text-[--color-primary-500]',
	secondary: 'text-[--color-secondary-500]',
	success: 'text-[--color-success-500]',
	warning: 'text-[--color-warning-500]',
	danger: 'text-[--color-danger-500]',
	info: 'text-[--color-info-500]',
	solid: 'text-[--color-primary-500]',
	outline: 'text-[--color-text-primary]',
	ghost: 'text-[--color-text-primary]',
	link: 'text-[--color-primary-600]',
	subtle: 'text-[--color-text-primary]',
	neutral: 'text-[--color-neutral-500]',
	gray: 'text-[--color-neutral-500]',
	dark: 'text-[--color-text-inverse]',
	light: 'text-[--color-text-primary]'
};

export const TOKEN_ICON_WRAPPER_PADDING_CLASSES: Record<ComponentSize, string> = {
	xs: 'p-0.5',
	sm: 'p-1',
	md: 'p-1.5',
	lg: 'p-2',
	xl: 'p-3',
	'2xl': 'p-4'
};

export const TOKEN_ICON_WRAPPER_SHAPE_CLASSES: Record<ComponentShape, string> = {
	circle: 'rounded-full',
	square: 'rounded-none',
	rounded: 'rounded-md',
	pill: 'rounded-full px-2'
};

export const TOKEN_ICON_WRAPPER_COLOR_CLASSES: Record<DefaultVariants, string> = {
	default: 'text-[--color-text-primary] bg-[--color-bg-secondary]',
	primary: 'text-[--color-primary-500] bg-[--color-primary-100]',
	secondary: 'text-[--color-secondary-500] bg-[--color-secondary-100]',
	success: 'text-[--color-success-500] bg-[--color-success-100]',
	warning: 'text-[--color-warning-500] bg-[--color-warning-100]',
	danger: 'text-[--color-danger-500] bg-[--color-danger-100]',
	info: 'text-[--color-info-500] bg-[--color-info-100]',
	gray: 'text-[--color-neutral-500] bg-[--color-neutral-100]',
	solid: 'text-[--color-primary-600] bg-[--color-primary-100]',
	outline:
		'text-[--color-text-primary] bg-transparent border border-[--color-border-primary]',
	ghost: 'text-[--color-text-primary] bg-transparent',
	link: 'text-[--color-primary-600] bg-transparent',
	subtle: 'text-[--color-text-primary] bg-[--color-bg-secondary]',
	neutral: 'text-[--color-neutral-500] bg-[--color-neutral-100]',
	dark: 'text-[--color-text-inverse] bg-[--color-neutral-800]',
	light: 'text-[--color-text-primary] bg-[--color-neutral-50]'
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

export class IconStyleManager {
	static getIconClasses(
		size: keyof typeof TOKEN_ICON_SIZE_CLASSES = 'md',
		className = ''
	): string {
		return cn(TOKEN_ICON_SIZE_CLASSES[size], className);
	}

	static getIconChevronClasses(options: {
		isOpen?: boolean;
		size?: keyof typeof TOKEN_ICON_SIZE_CLASSES;
		direction?: keyof typeof TOKEN_ICON_DIRECTION_ROTATION_CLASSES;
		variant?: keyof typeof TOKEN_ICON_VARIANT_CLASSES;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? TOKEN_ICON_CHEVRON_DEFAULTS.size;
		const direction = options.direction ?? (options.isOpen ? 'up' : 'down');
		const variant = options.variant ?? 'default';
		const disabled = options.disabled ?? false;

		return cn(
			TOKEN_ICON_SIZE_CLASSES[size],
			TOKEN_ICON_DIRECTION_ROTATION_CLASSES[direction],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
			disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
	}

	static getIconCircleClasses(options: {
		variant?: keyof typeof TOKEN_ICON_VARIANT_CLASSES;
		size?: keyof typeof TOKEN_ICON_SIZE_CLASSES;
		filled?: boolean;
		disabled?: boolean;
		className?: string;
	}): string {
		const variant = options.variant ?? TOKEN_ICON_CIRCLE_DEFAULTS.variant;
		const size = options.size ?? TOKEN_ICON_CIRCLE_DEFAULTS.size;

		return cn(
			TOKEN_ICON_VARIANT_CLASSES[variant],
			TOKEN_ICON_SIZE_CLASSES[size],
			options.filled ? 'fill-current' : '',
			options.disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
	}

	static getIconWrapperClasses(options: {
		size?: keyof typeof TOKEN_ICON_WRAPPER_PADDING_CLASSES;
		variant?: keyof typeof TOKEN_ICON_VARIANT_CLASSES;
		shape?: keyof typeof TOKEN_ICON_WRAPPER_SHAPE_CLASSES;
		color?: keyof typeof TOKEN_ICON_WRAPPER_COLOR_CLASSES;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? TOKEN_ICON_WRAPPER_DEFAULTS.size;
		const variant = options.variant ?? TOKEN_ICON_WRAPPER_DEFAULTS.variant;
		const shape = options.shape ?? TOKEN_ICON_WRAPPER_DEFAULTS.shape;
		const color = options.color ?? TOKEN_ICON_WRAPPER_DEFAULTS.color;

		return cn(
			'inline-flex items-center justify-center',
			TOKEN_ICON_WRAPPER_PADDING_CLASSES[size],
			TOKEN_ICON_WRAPPER_SHAPE_CLASSES[shape],
			TOKEN_ICON_WRAPPER_COLOR_CLASSES[color],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
			options.disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
	}
}
