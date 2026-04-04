import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

const SPINNER_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8',
	'2xl': 'w-10 h-10',
	'1/4': 'w-3 h-3',
	'1/3': 'w-4 h-4',
	'2/5': 'w-4 h-4',
	'1/2': 'w-5 h-5',
	'3/5': 'w-5 h-5',
	'2/3': 'w-6 h-6',
	'3/4': 'w-8 h-8',
	full: 'w-10 h-10'
};

const SPINNER_COLOR_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-secondary)]',
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	error: 'text-[var(--color-danger-600)]',
	info: 'text-[var(--color-info-600)]',
	solid: 'text-[var(--color-primary-600)]',
	outline: 'text-[var(--color-text-primary)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)]',
	subtle: 'text-[var(--color-neutral-400)]',
	neutral: 'text-[var(--color-neutral-500)]',
	gray: 'text-[var(--color-neutral-500)]',
	dark: 'text-[var(--color-neutral-800)]',
	light: 'text-[var(--color-neutral-200)]',
	elevated: 'text-[var(--color-primary-600)]',
	flat: 'text-[var(--color-text-primary)]'
};

const SPINNER_VARIANT_CLASSES: Record<string, string> = {
	spin: 'animate-spin',
	pulse: 'animate-pulse',
	bounce: 'animate-bounce'
};

export class SpinnerStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSpinnerSizeClass(size: TokenSize = 'md'): string {
		return SPINNER_SIZE_CLASSES[size] ?? SPINNER_SIZE_CLASSES.md;
	}

	static getSpinnerColorClass(color: TokenAppearance = 'primary'): string {
		return SPINNER_COLOR_CLASSES[color] ?? SPINNER_COLOR_CLASSES.primary;
	}

	static getSpinnerContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center justify-center',
			className
		]);
	}

	static getSpinnerClasses(
		variant: string = 'spin',
		size: TokenSize = 'md',
		color: TokenAppearance = 'primary',
		className?: string
	): string {
		return this.join([
			'inline-block',
			this.getSpinnerSizeClass(size),
			this.getSpinnerColorClass(color),
			SPINNER_VARIANT_CLASSES[variant] ?? SPINNER_VARIANT_CLASSES.spin,
			className
		]);
	}
}
