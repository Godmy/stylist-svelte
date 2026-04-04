import type { TokenSize } from '$stylist/layout/type/enum/size';

export class ToggleStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getToggleClasses(
		checked = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		const sizeClasses: Record<TokenSize, string> = {
			xs: 'h-6 px-2 text-xs rounded',
			sm: 'h-8 px-3 text-sm rounded-md',
			md: 'h-9 px-4 text-sm rounded-md',
			lg: 'h-11 px-6 text-base rounded-lg',
			xl: 'h-12 px-7 text-lg rounded-xl',
			'2xl': 'h-14 px-8 text-xl rounded-xl',
			'1/4': 'h-6 px-2 text-xs rounded',
			'1/3': 'h-8 px-3 text-sm rounded-md',
			'2/5': 'h-8 px-3 text-sm rounded-md',
			'1/2': 'h-9 px-4 text-sm rounded-md',
			'3/5': 'h-9 px-4 text-sm rounded-md',
			'2/3': 'h-11 px-6 text-base rounded-lg',
			'3/4': 'h-12 px-7 text-lg rounded-xl',
			full: 'h-14 px-8 text-xl rounded-xl w-full'
		};

		return this.join([
			'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			sizeClasses[size] ?? sizeClasses.md,
			checked
				? 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]'
				: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			className
		]);
	}

	static getToggleGroupClasses(className?: string): string {
		return this.join([
			'inline-flex items-center gap-1',
			className
		]);
	}

	static getToggleIconClasses(className?: string): string {
		return this.join([
			'w-4 h-4',
			className
		]);
	}
}
