import type { TokenSize } from '$stylist/layout/type/enum/size';

export class CloseButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getCloseButtonClasses(
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		const sizeClasses: Record<TokenSize, string> = {
			xs: 'w-5 h-5',
			sm: 'w-6 h-6',
			md: 'w-7 h-7',
			lg: 'w-8 h-8',
			xl: 'w-9 h-9',
			'2xl': 'w-10 h-10',
			'1/4': 'w-5 h-5',
			'1/3': 'w-6 h-6',
			'2/5': 'w-6 h-6',
			'1/2': 'w-7 h-7',
			'3/5': 'w-7 h-7',
			'2/3': 'w-8 h-8',
			'3/4': 'w-9 h-9',
			full: 'w-10 h-10'
		};

		return this.join([
			'inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]',
			sizeClasses[size] ?? sizeClasses.md,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getCloseButtonIconClasses(size: TokenSize = 'md', className?: string): string {
		const iconSizeClasses: Record<TokenSize, string> = {
			xs: 'w-2.5 h-2.5',
			sm: 'w-3 h-3',
			md: 'w-3.5 h-3.5',
			lg: 'w-4 h-4',
			xl: 'w-4.5 h-4.5',
			'2xl': 'w-5 h-5',
			'1/4': 'w-2.5 h-2.5',
			'1/3': 'w-3 h-3',
			'2/5': 'w-3 h-3',
			'1/2': 'w-3.5 h-3.5',
			'3/5': 'w-3.5 h-3.5',
			'2/3': 'w-4 h-4',
			'3/4': 'w-4.5 h-4.5',
			full: 'w-5 h-5'
		};

		return this.join([
			iconSizeClasses[size] ?? iconSizeClasses.md,
			className
		]);
	}
}
