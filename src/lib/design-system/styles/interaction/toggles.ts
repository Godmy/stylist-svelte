import {
	TOKEN_TOGGLE_SIZE_CLASSES,
	TOKEN_TOGGLE_HANDLE_SIZE_CLASSES
} from '../../classes/interaction/toggles';

export class TogglesStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSwitchInputClasses(disabled = false): string {
		return this.join(['peer sr-only', disabled ? 'cursor-not-allowed' : '']);
	}

	static getSwitchTrackClasses(
		switchSizeOrClass: 'sm' | 'md' | 'lg' | string = 'md',
		disabled = false,
		checked?: boolean
	): string {
		if (
			typeof switchSizeOrClass === 'string' &&
			!['sm', 'md', 'lg'].includes(switchSizeOrClass)
		) {
			return this.join([
				'relative inline-flex h-6 w-11 rounded-full transition-colors',
				switchSizeOrClass,
				disabled ? 'opacity-50' : ''
			]);
		}

		const size = switchSizeOrClass as 'sm' | 'md' | 'lg';
		const sizeClass = size === 'sm' ? 'h-4 w-8' : size === 'lg' ? 'h-6 w-12' : 'h-5 w-10';
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
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		]);
	}

	static getSwitchKnobClasses(
		switchSize: 'sm' | 'md' | 'lg' = 'md',
		disabled = false,
		checked?: boolean
	): string {
		const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[switchSize];
		const state = checked === undefined ? 'translate-x-0' : checked ? 'translate-x-5' : 'translate-x-0';
		return this.join([
			'pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform',
			sizeClasses,
			state,
			disabled ? 'opacity-50' : ''
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
			'relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ease-in-out',
			state,
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		]);
	}

	static getToggleThumbClasses(
		size: 'sm' | 'md' | 'lg' = 'md',
		disabled = false,
		checked?: boolean
	): string {
		const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[size];
		const state = checked === undefined ? 'translate-x-0.5' : checked ? 'translate-x-5' : 'translate-x-0.5';
		return this.join([
			'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-200 ease-in-out',
			sizeClasses,
			state,
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		]);
	}

	static getToggleSizeClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return TOKEN_TOGGLE_SIZE_CLASSES[size];
	}

	static getToggleDisabledClass(disabled = true): string {
		return disabled ? 'opacity-50 cursor-not-allowed' : '';
	}

	static getToggleGroupItemClasses(isActive: boolean, disabled: boolean): string {
		const baseClasses =
			'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
		const activeClasses = isActive
			? 'bg-primary text-primary-foreground shadow-sm'
			: 'text-muted-foreground hover:bg-muted hover:text-foreground';
		return this.join([baseClasses, activeClasses, disabled ? 'opacity-50 cursor-not-allowed' : '']);
	}

	static getToggleHandleSizeClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[size];
	}
}
