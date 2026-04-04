import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

const PROGRESS_BAR_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-1 rounded-sm',
	sm: 'h-2 rounded-md',
	md: 'h-3 rounded-md',
	lg: 'h-4 rounded-lg',
	xl: 'h-5 rounded-lg',
	'2xl': 'h-6 rounded-xl',
	'1/4': 'h-1 rounded-sm',
	'1/3': 'h-2 rounded-md',
	'2/5': 'h-2 rounded-md',
	'1/2': 'h-3 rounded-md',
	'3/5': 'h-3 rounded-md',
	'2/3': 'h-4 rounded-lg',
	'3/4': 'h-5 rounded-lg',
	full: 'h-6 rounded-xl'
};

const PROGRESS_BAR_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'bg-[var(--color-primary-600)]',
	primary: 'bg-[var(--color-primary-600)]',
	secondary: 'bg-[var(--color-secondary-600)]',
	success: 'bg-[var(--color-success-600)]',
	warning: 'bg-[var(--color-warning-500)]',
	danger: 'bg-[var(--color-danger-600)]',
	error: 'bg-[var(--color-danger-600)]',
	info: 'bg-[var(--color-info-600)]',
	solid: 'bg-[var(--color-primary-600)]',
	outline: 'bg-[var(--color-primary-600)] border border-[var(--color-primary-700)]',
	ghost: 'bg-[var(--color-primary-300)]',
	link: 'bg-[var(--color-primary-600)]',
	subtle: 'bg-[var(--color-neutral-400)]',
	neutral: 'bg-[var(--color-neutral-500)]',
	gray: 'bg-[var(--color-neutral-500)]',
	dark: 'bg-[var(--color-neutral-700)]',
	light: 'bg-[var(--color-neutral-300)]',
	elevated: 'bg-[var(--color-primary-600)] shadow-sm',
	flat: 'bg-[var(--color-primary-600)]'
};

export class ProgressBarStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getProgressBarSizeClass(size: TokenSize = 'md'): string {
		return PROGRESS_BAR_SIZE_CLASSES[size] ?? PROGRESS_BAR_SIZE_CLASSES.md;
	}

	static getProgressBarFillClass(value: number, variant: TokenAppearance = 'primary'): string {
		const animationClass = value < 100 ? 'transition-all duration-300 ease-in-out' : '';
		return this.join([
			'h-full rounded-full',
			PROGRESS_BAR_VARIANT_CLASSES[variant] ?? PROGRESS_BAR_VARIANT_CLASSES.primary,
			animationClass
		]);
	}

	static getProgressBarClasses(
		value: number,
		variant: TokenAppearance = 'primary',
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'w-full bg-[var(--color-background-secondary)] overflow-hidden',
			this.getProgressBarSizeClass(size),
			className
		]);
	}

	static getProgressBarContainerClasses(className?: string): string {
		return this.join([
			'w-full',
			className
		]);
	}

	static getProgressBarLabelClasses(className?: string): string {
		return this.join([
			'text-sm font-medium text-[var(--color-text-secondary)]',
			className
		]);
	}

	static getProgressBarValueClasses(className?: string): string {
		return this.join([
			'text-sm font-medium text-[var(--color-text-primary)]',
			className
		]);
	}
}
