import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
import { cn } from '$stylist/layout/function/script/merge-class-names';

export class IconStyleManager {
	private static getWrapperShapeClass(shape: TokenShape | 'rounded'): string {
		const shapeClassMap: Partial<Record<TokenShape | 'rounded', string>> = {
			circle: 'rounded-full',
			square: 'rounded-none',
			rectangle: 'rounded-md',
			rounded: 'rounded-md',
			pill: 'rounded-full px-2'
		};

		return shapeClassMap[shape] ?? 'rounded-full';
	}

	static getIconClasses(
		size: TokenSize = 'md',
		className = ''
	): string {
		return cn(
			{ xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10', '1/4': 'w-3 h-3', '1/3': 'w-4 h-4', '2/5': 'w-4 h-4', '1/2': 'w-5 h-5', '3/5': 'w-5 h-5', '2/3': 'w-6 h-6', '3/4': 'w-8 h-8', full: 'w-10 h-10' }[size] ?? 'w-5 h-5',
			className
		);
	}

	static getIconChevronClasses(options: {
		isOpen?: boolean;
		size?: TokenSize;
		direction?: 'up' | 'right' | 'down' | 'left';
		variant?: TokenAppearance;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? 'md';
		const direction = options.direction ?? (options.isOpen ? 'up' : 'down');
		const variant = options.variant ?? 'default';
		const disabled = options.disabled ?? false;

		return cn(
			{ xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10', '1/4': 'w-3 h-3', '1/3': 'w-4 h-4', '2/5': 'w-4 h-4', '1/2': 'w-5 h-5', '3/5': 'w-5 h-5', '2/3': 'w-6 h-6', '3/4': 'w-8 h-8', full: 'w-10 h-10' }[size] ?? 'w-5 h-5',
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
			,
			elevated: 'text-[--color-text-primary]',
			flat: 'text-[--color-text-primary]'
		}[variant]
				: '',
			disabled ? 'opacity-[var(--opacity-50)]' : '',
			options.className ?? ''
		);
	}

	static getIconCircleClasses(options: {
		variant?: TokenAppearance;
		size?: TokenSize;
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
				,
				elevated: 'text-[--color-text-primary]',
				flat: 'text-[--color-text-primary]'
			}[variant],
			{ xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10', '1/4': 'w-3 h-3', '1/3': 'w-4 h-4', '2/5': 'w-4 h-4', '1/2': 'w-5 h-5', '3/5': 'w-5 h-5', '2/3': 'w-6 h-6', '3/4': 'w-8 h-8', full: 'w-10 h-10' }[size] ?? 'w-5 h-5',
			options.filled ? 'fill-current' : '',
			options.disabled ? 'opacity-[var(--opacity-50)]' : '',
			options.className ?? ''
		);
	}

	static getIconWrapperClasses(options: {
		size?: TokenSize;
		variant?: TokenAppearance;
		shape?: TokenShape | 'rounded';
		color?: TokenAppearance;
		disabled?: boolean;
		className?: string;
	}): string {
		const size = options.size ?? 'md';
		const variant = options.variant ?? 'default';
		const shape = options.shape ?? 'circle';
		const color = options.color ?? 'primary';

		return cn(
			'inline-flex items-center justify-center',
			{ xs: 'p-0.5', sm: 'p-1', md: 'p-1.5', lg: 'p-2', xl: 'p-3', '2xl': 'p-4', '1/4': 'p-0.5', '1/3': 'p-1', '2/5': 'p-1', '1/2': 'p-1.5', '3/5': 'p-1.5', '2/3': 'p-2', '3/4': 'p-3', full: 'p-4' }[size] ?? 'p-1.5',
			this.getWrapperShapeClass(shape),
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
				,
				elevated: 'text-[--color-text-primary] bg-[--color-background-primary] shadow-sm',
				flat: 'text-[--color-text-primary] bg-[--color-background-secondary]'
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
						,
						elevated: 'text-[--color-text-primary]',
						flat: 'text-[--color-text-primary]'
					}[variant]
				: '',
			options.disabled ? 'opacity-[var(--opacity-50)]' : '',
			options.className ?? ''
		);
	}
}







