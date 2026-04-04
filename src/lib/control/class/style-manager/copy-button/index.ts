import type { TokenSize } from '$stylist/layout/type/enum/size';

export class CopyButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getCopyButtonClasses(
		disabled = false,
		size: TokenSize = 'md',
		variant: string = 'default',
		className?: string
	): string {
		const sizeClasses: Record<TokenSize, string> = {
			xs: 'w-6 h-6 px-1.5 text-xs',
			sm: 'w-7 h-7 px-2 text-sm',
			md: 'w-8 h-8 px-2.5 text-sm',
			lg: 'w-10 h-10 px-3 text-base',
			xl: 'w-11 h-11 px-3.5 text-base',
			'2xl': 'w-12 h-12 px-4 text-lg',
			'1/4': 'w-6 h-6 px-1.5 text-xs',
			'1/3': 'w-7 h-7 px-2 text-sm',
			'2/5': 'w-7 h-7 px-2 text-sm',
			'1/2': 'w-8 h-8 px-2.5 text-sm',
			'3/5': 'w-8 h-8 px-2.5 text-sm',
			'2/3': 'w-10 h-10 px-3 text-base',
			'3/4': 'w-11 h-11 px-3.5 text-base',
			full: 'w-12 h-12 px-4 text-lg'
		};

		const variantClasses: Record<string, string> = {
			default: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]',
			primary: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-700)]',
			ghost: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]',
			outline: 'border border-[var(--color-border-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
		};

		return this.join([
			'inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			sizeClasses[size] ?? sizeClasses.md,
			variantClasses[variant] ?? variantClasses.default,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getCopyButtonIconClasses(size: TokenSize = 'md', className?: string): string {
		const iconSizeClasses: Record<TokenSize, string> = {
			xs: 'w-3 h-3',
			sm: 'w-3.5 h-3.5',
			md: 'w-4 h-4',
			lg: 'w-4.5 h-4.5',
			xl: 'w-5 h-5',
			'2xl': 'w-5.5 h-5.5',
			'1/4': 'w-3 h-3',
			'1/3': 'w-3.5 h-3.5',
			'2/5': 'w-3.5 h-3.5',
			'1/2': 'w-4 h-4',
			'3/5': 'w-4 h-4',
			'2/3': 'w-4.5 h-4.5',
			'3/4': 'w-5 h-5',
			full: 'w-5.5 h-5.5'
		};

		return this.join([
			iconSizeClasses[size] ?? iconSizeClasses.md,
			className
		]);
	}

	static getCopyButtonTooltipClasses(className?: string): string {
		return this.join([
			'text-xs text-[var(--color-text-secondary)]',
			className
		]);
	}
}
