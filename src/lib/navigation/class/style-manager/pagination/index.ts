import type { TokenSize } from '$stylist/layout/type/enum/size';

const PAGINATION_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-7 min-w-7 text-xs',
	sm: 'h-8 min-w-8 text-sm',
	md: 'h-9 min-w-9 text-sm',
	lg: 'h-11 min-w-11 text-base',
	xl: 'h-12 min-w-12 text-base',
	'2xl': 'h-14 min-w-14 text-lg',
	'1/4': 'h-7 min-w-7 text-xs',
	'1/3': 'h-8 min-w-8 text-sm',
	'2/5': 'h-8 min-w-8 text-sm',
	'1/2': 'h-9 min-w-9 text-sm',
	'3/5': 'h-9 min-w-9 text-sm',
	'2/3': 'h-11 min-w-11 text-base',
	'3/4': 'h-12 min-w-12 text-base',
	full: 'h-14 min-w-14 text-lg'
};

export class PaginationStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getPaginationClasses(
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center gap-1',
			className
		]);
	}

	static getPageItemClasses(
		active = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			PAGINATION_SIZE_CLASSES[size] ?? PAGINATION_SIZE_CLASSES.md,
			active
				? 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]'
				: 'text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getPaginationEllipsisClasses(className?: string): string {
		return this.join([
			'inline-flex items-center justify-center w-9 h-9 text-[var(--color-text-secondary)]',
			className
		]);
	}

	static getPaginationPrevClasses(disabled = false, className?: string): string {
		return this.join([
			'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			'h-9 w-9 text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getPaginationNextClasses(disabled = false, className?: string): string {
		return this.join([
			'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			'h-9 w-9 text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getPaginationContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center gap-1',
			className
		]);
	}
}
