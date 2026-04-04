import type { TokenSize } from '$stylist/layout/type/enum/size';

const RADIO_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-7 h-7',
	'2xl': 'w-8 h-8',
	'1/4': 'w-3 h-3',
	'1/3': 'w-4 h-4',
	'2/5': 'w-4 h-4',
	'1/2': 'w-5 h-5',
	'3/5': 'w-5 h-5',
	'2/3': 'w-6 h-6',
	'3/4': 'w-7 h-7',
	full: 'w-8 h-8'
};

const RADIO_INDICATOR_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-1 h-1',
	sm: 'w-1.5 h-1.5',
	md: 'w-2 h-2',
	lg: 'w-2.5 h-2.5',
	xl: 'w-3 h-3',
	'2xl': 'w-3.5 h-3.5',
	'1/4': 'w-1 h-1',
	'1/3': 'w-1.5 h-1.5',
	'2/5': 'w-1.5 h-1.5',
	'1/2': 'w-2 h-2',
	'3/5': 'w-2 h-2',
	'2/3': 'w-2.5 h-2.5',
	'3/4': 'w-3 h-3',
	full: 'w-3.5 h-3.5'
};

export class RadioStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getRadioIndicatorClasses(checked = false, size: TokenSize = 'md'): string {
		return this.join([
			'rounded-full bg-[var(--color-text-inverse)]',
			this.getRadioIndicatorSizeClass(size),
			!checked && 'opacity-0 scale-0'
		]);
	}

	static getRadioIndicatorSizeClass(size: TokenSize = 'md'): string {
		return RADIO_INDICATOR_SIZE_CLASSES[size] ?? RADIO_INDICATOR_SIZE_CLASSES.md;
	}

	static getRadioSizeClass(size: TokenSize = 'md'): string {
		return RADIO_SIZE_CLASSES[size] ?? RADIO_SIZE_CLASSES.md;
	}

	static getRadioClasses(
		checked = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			this.getRadioSizeClass(size),
			checked
				? 'border-[var(--color-primary-600)]'
				: 'border-[var(--color-border-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer',
			className
		]);
	}

	static getRadioContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center gap-2',
			className
		]);
	}

	static getRadioLabelClasses(disabled = false, className?: string): string {
		return this.join([
			'text-sm text-[var(--color-text-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}
}
