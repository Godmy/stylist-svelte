import type { TokenSize } from '$stylist/layout/type/enum/size';

const TOKEN_TOGGLE_SIZE_CLASSES: Record<TokenSize, string> = {
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

const TOKEN_TOGGLE_HANDLE_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-2.5 w-2.5',
	sm: 'h-3 w-3',
	md: 'h-4 w-4',
	lg: 'h-5 w-5',
	xl: 'h-6 w-6',
	'2xl': 'h-7 w-7',
	'1/4': 'h-2.5 w-2.5',
	'1/3': 'h-3 w-3',
	'2/5': 'h-3 w-3',
	'1/2': 'h-4 w-4',
	'3/5': 'h-4 w-4',
	'2/3': 'h-5 w-5',
	'3/4': 'h-6 w-6',
	full: 'h-7 w-7'
};





export class TogglesStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSwitchInputClasses(disabled = false): string {
		return this.join(['peer sr-only', disabled ? 'cursor-not-allowed' : '']);
	}

	static getSwitchTrackClasses(
		switchSizeOrClass: TokenSize | string = 'md',
		disabled = false,
		checked?: boolean
	): string {
		if (
			typeof switchSizeOrClass === 'string' &&
			!['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(switchSizeOrClass)
		) {
			return this.join([
				'relative inline-flex h-6 w-11 rounded-full transition-colors',
				switchSizeOrClass,
				disabled ? 'opacity-[var(--opacity-50)]' : ''
			]);
		}

		const size = switchSizeOrClass as TokenSize;
		const sizeClass =
			size === 'xs'
				? 'h-3.5 w-7'
				: size === 'sm'
					? 'h-4 w-8'
					: size === 'lg'
						? 'h-6 w-12'
						: size === 'xl'
							? 'h-7 w-14'
							: size === '2xl'
								? 'h-8 w-16'
								: 'h-5 w-10';
		const state =
			checked === undefined
				? 'bg-[--color-border-primary]'
				: checked
					? 'bg-[--color-primary-500]'
					: 'bg-[--color-border-primary]';
		return this.join([
			'relative inline-flex cursor-pointer rounded-full border-2 border-transparent transition-colors',
			sizeClass,
			state,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
		]);
	}

	static getSwitchKnobClasses(
		switchSize: TokenSize = 'md',
		disabled = false,
		checked?: boolean
	): string {
		const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[switchSize];
		const translateClass =
			switchSize === 'xs'
				? 'translate-x-3'
				: switchSize === 'sm'
					? 'translate-x-4'
					: switchSize === 'lg'
						? 'translate-x-6'
						: switchSize === 'xl'
							? 'translate-x-7'
							: switchSize === '2xl'
								? 'translate-x-8'
								: 'translate-x-5';
		const state = checked === undefined ? 'translate-x-0' : checked ? translateClass : 'translate-x-0';
		return this.join([
			'pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform',
			sizeClasses,
			state,
			disabled ? 'opacity-[var(--opacity-50)]' : ''
		]);
	}

	static getToggleContainerClasses(className = ''): string {
		return this.join(['relative inline-flex items-center', className]);
	}

	static getToggleTrackClasses(disabled = false, checked?: boolean): string {
		const state =
			checked === undefined
				? 'bg-[--color-border-primary]'
				: checked
					? 'bg-[--color-primary-500]'
					: 'bg-[--color-border-primary]';
		return this.join([
			'relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-[var(--duration-200)] ease-in-out',
			state,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
		]);
	}

	static getToggleThumbClasses(
		size: TokenSize = 'md',
		disabled = false,
		checked?: boolean
	): string {
		const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[size];
		const translateClass =
			size === 'xs'
				? 'translate-x-3'
				: size === 'sm'
					? 'translate-x-4'
					: size === 'lg'
						? 'translate-x-6'
						: size === 'xl'
							? 'translate-x-7'
							: size === '2xl'
								? 'translate-x-8'
								: 'translate-x-5';
		const state = checked === undefined ? 'translate-x-0.5' : checked ? translateClass : 'translate-x-0.5';
		return this.join([
			'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-[var(--duration-200)] ease-in-out',
			sizeClasses,
			state,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
		]);
	}

	static getToggleSizeClasses(size: TokenSize = 'md'): string {
		return TOKEN_TOGGLE_SIZE_CLASSES[size];
	}

	static getToggleDisabledClass(disabled = true): string {
		return disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '';
	}

	static getToggleGroupItemClasses(isActive: boolean, disabled: boolean): string {
		const baseClasses =
			'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-[var(--opacity-50)]';
		const activeClasses = isActive
			? 'bg-primary text-primary-foreground shadow-sm'
			: 'text-muted-foreground hover:bg-muted hover:text-foreground';
		return this.join([baseClasses, activeClasses, disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '']);
	}

	static getToggleHandleSizeClass(size: TokenSize = 'md'): string {
		return TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[size];
	}
}



