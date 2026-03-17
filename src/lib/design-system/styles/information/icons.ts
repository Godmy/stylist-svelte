import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import { cn } from '$stylist/design-system/utils/cn/index';
import type { IconWrapperShape } from '$stylist/design-system/tokens/information/icon-wrapper';

export class IconStyleManager {
	static getIconClasses(
		size: ComponentSize = 'md',
		className = ''
	): string {
		return cn(
			{ xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10' }[size],
			className
		);
	}

	static getIconChevronClasses(options: {
		isOpen?: boolean;
		size?: ComponentSize;
		direction?: 'up' | 'right' | 'down' | 'left';
		variant?: DefaultVariants;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? 'md';
		const direction = options.direction ?? (options.isOpen ? 'up' : 'down');
		const variant = options.variant ?? 'default';
		const disabled = options.disabled ?? false;

		return cn(
			{ xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10' }[size],
			{ up: 'rotate-0', right: 'rotate-90', down: 'rotate-180', left: '-rotate-90' }[direction],
			variant !== 'default'
				? {
						default: 'text-current',
						primary: 'text-[--color-primary-500]',
						secondary: 'text-[--color-secondary-500]',
						success: 'text-[--color-success-500]',
						warning: 'text-[--color-warning-500]',
						danger: 'text-[--color-danger-500]',
						error: 'text-[--color-danger-500]',
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
					}[variant]
				: '',
			disabled ? 'opacity-[var(--opacity-50)]' : '',
			options.className ?? ''
		);
	}

	static getIconCircleClasses(options: {
		variant?: DefaultVariants;
		size?: ComponentSize;
		filled?: boolean;
		disabled?: boolean;
		className?: string;
	}): string {
		const variant = options.variant ?? 'default';
		const size = options.size ?? 'md';

		return cn(
			{
				default: 'text-current',
				primary: 'text-[--color-primary-500]',
				secondary: 'text-[--color-secondary-500]',
				success: 'text-[--color-success-500]',
				warning: 'text-[--color-warning-500]',
				danger: 'text-[--color-danger-500]',
				error: 'text-[--color-danger-500]',
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
			}[variant],
			{ xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10' }[size],
			options.filled ? 'fill-current' : '',
			options.disabled ? 'opacity-[var(--opacity-50)]' : '',
			options.className ?? ''
		);
	}

	static getIconWrapperClasses(options: {
		size?: ComponentSize;
		variant?: DefaultVariants;
		shape?: IconWrapperShape;
		color?: DefaultVariants;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? 'md';
		const variant = options.variant ?? 'default';
		const shape = options.shape ?? 'circle';
		const color = options.color ?? 'primary';

		return cn(
			'inline-flex items-center justify-center',
			{ xs: 'p-0.5', sm: 'p-1', md: 'p-1.5', lg: 'p-2', xl: 'p-3', '2xl': 'p-4' }[size],
			{ circle: 'rounded-full', square: 'rounded-none', rounded: 'rounded-md', pill: 'rounded-full px-2' }[shape],
			{
				default: 'text-[--color-text-primary] bg-[--color-background-secondary]',
				primary: 'text-[--color-primary-500] bg-[--color-primary-100]',
				secondary: 'text-[--color-secondary-500] bg-[--color-secondary-100]',
				success: 'text-[--color-success-500] bg-[--color-success-100]',
				warning: 'text-[--color-warning-500] bg-[--color-warning-100]',
				danger: 'text-[--color-danger-500] bg-[--color-danger-100]',
				error: 'text-[--color-danger-500] bg-[--color-danger-100]',
				info: 'text-[--color-info-500] bg-[--color-info-100]',
				gray: 'text-[--color-neutral-500] bg-[--color-neutral-100]',
				solid: 'text-[--color-primary-600] bg-[--color-primary-100]',
				outline: 'text-[--color-text-primary] bg-transparent border border-[--color-border-primary]',
				ghost: 'text-[--color-text-primary] bg-transparent',
				link: 'text-[--color-primary-600] bg-transparent',
				subtle: 'text-[--color-text-primary] bg-[--color-background-secondary]',
				neutral: 'text-[--color-neutral-500] bg-[--color-neutral-100]',
				dark: 'text-[--color-text-inverse] bg-[--color-neutral-800]',
				light: 'text-[--color-text-primary] bg-[--color-neutral-50]'
			}[color],
			variant !== 'default'
				? {
						default: 'text-current',
						primary: 'text-[--color-primary-500]',
						secondary: 'text-[--color-secondary-500]',
						success: 'text-[--color-success-500]',
						warning: 'text-[--color-warning-500]',
						danger: 'text-[--color-danger-500]',
						error: 'text-[--color-danger-500]',
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
					}[variant]
				: '',
			options.disabled ? 'opacity-[var(--opacity-50)]' : '',
			options.className ?? ''
		);
	}
}





