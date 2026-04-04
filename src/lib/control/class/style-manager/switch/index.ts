import type { TokenSize } from '$stylist/layout/type/enum/size';

const SWITCH_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-7 h-3.5',
	sm: 'w-8 h-4',
	md: 'w-10 h-5',
	lg: 'w-12 h-6',
	xl: 'w-14 h-7',
	'2xl': 'w-16 h-8',
	'1/4': 'w-7 h-3.5',
	'1/3': 'w-8 h-4',
	'2/5': 'w-8 h-4',
	'1/2': 'w-10 h-5',
	'3/5': 'w-10 h-5',
	'2/3': 'w-12 h-6',
	'3/4': 'w-14 h-7',
	full: 'w-16 h-8'
};

const SWITCH_THUMB_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-2.5 h-2.5',
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6',
	'2xl': 'w-7 h-7',
	'1/4': 'w-2.5 h-2.5',
	'1/3': 'w-3 h-3',
	'2/5': 'w-3 h-3',
	'1/2': 'w-4 h-4',
	'3/5': 'w-4 h-4',
	'2/3': 'w-5 h-5',
	'3/4': 'w-6 h-6',
	full: 'w-7 h-7'
};

const SWITCH_THUMB_TRANSLATE_CLASSES: Record<TokenSize, string> = {
	xs: 'translate-x-3',
	sm: 'translate-x-4',
	md: 'translate-x-5',
	lg: 'translate-x-6',
	xl: 'translate-x-7',
	'2xl': 'translate-x-8',
	'1/4': 'translate-x-3',
	'1/3': 'translate-x-4',
	'2/5': 'translate-x-4',
	'1/2': 'translate-x-5',
	'3/5': 'translate-x-5',
	'2/3': 'translate-x-6',
	'3/4': 'translate-x-7',
	full: 'translate-x-8'
};

export class SwitchStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSwitchSizeClass(size: TokenSize = 'md'): string {
		return SWITCH_SIZE_CLASSES[size] ?? SWITCH_SIZE_CLASSES.md;
	}

	static getSwitchThumbClasses(checked = false, size: TokenSize = 'md'): string {
		return this.join([
			'pointer-events-none block rounded-full bg-[var(--color-background-primary)] shadow-lg ring-0 transition-transform',
			this.getSwitchThumbSizeClass(size),
			checked ? SWITCH_THUMB_TRANSLATE_CLASSES[size] ?? SWITCH_THUMB_TRANSLATE_CLASSES.md : 'translate-x-0.5'
		]);
	}

	static getSwitchThumbSizeClass(size: TokenSize = 'md'): string {
		return SWITCH_THUMB_SIZE_CLASSES[size] ?? SWITCH_THUMB_SIZE_CLASSES.md;
	}

	static getSwitchClasses(
		checked = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'peer inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-primary)]',
			this.getSwitchSizeClass(size),
			checked ? 'bg-[var(--color-primary-600)]' : 'bg-[var(--color-border-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}

	static getSwitchInputClasses(): string {
		return 'sr-only';
	}

	static getSwitchContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center',
			className
		]);
	}

	static getSwitchLabelClasses(disabled = false, className?: string): string {
		return this.join([
			'text-sm text-[var(--color-text-primary)] ml-2',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}
}
