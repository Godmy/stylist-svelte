/**
 * Toggle domain classes.
 * Used by:
 * - interaction/controls/toggles/BaseToggle.ts
 */

export type TokenToggleSize = 'sm' | 'md' | 'lg';

export const TOKEN_TOGGLE_SIZE_CLASSES: Record<TokenToggleSize, string> = {
	sm: 'w-8 h-4',
	md: 'w-10 h-5',
	lg: 'w-12 h-6'
};

export const TOKEN_TOGGLE_HANDLE_SIZE_CLASSES: Record<TokenToggleSize, string> = {
	sm: 'h-3 w-3',
	md: 'h-4 w-4',
	lg: 'h-5 w-5'
};

const DEFAULT_SWITCH_SIZE: TokenToggleSize = 'md';
const DEFAULT_TOGGLE_SIZE: TokenToggleSize = 'md';

export const getSwitchInputClasses = (disabled = false) =>
	['peer sr-only', disabled ? 'cursor-not-allowed' : ''].filter(Boolean).join(' ');

export const getSwitchTrackClasses = (
	switchSizeOrClass: TokenToggleSize | string = DEFAULT_SWITCH_SIZE,
	disabled = false,
	checked?: boolean
) => {
	if (typeof switchSizeOrClass === 'string' && !['sm', 'md', 'lg'].includes(switchSizeOrClass)) {
		return [
			'relative inline-flex h-6 w-11 rounded-full transition-colors',
			switchSizeOrClass,
			disabled ? 'opacity-50' : ''
		]
			.filter(Boolean)
			.join(' ');
	}

	const size = switchSizeOrClass as TokenToggleSize;
	const sizeClass = size === 'sm' ? 'h-4 w-8' : size === 'lg' ? 'h-6 w-12' : 'h-5 w-10';
	const state =
		checked === undefined
			? 'bg-[--color-border-primary]'
			: checked
				? 'bg-[--color-primary-500]'
				: 'bg-[--color-border-primary]';
	return [
		'relative inline-flex cursor-pointer rounded-full border-2 border-transparent transition-colors',
		sizeClass,
		state,
		disabled ? 'opacity-50 cursor-not-allowed' : ''
	]
		.filter(Boolean)
		.join(' ');
};

export const getSwitchKnobClasses = (
	switchSize: TokenToggleSize = DEFAULT_SWITCH_SIZE,
	disabled = false,
	checked?: boolean
) => {
	const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[switchSize];
	const state =
		checked === undefined ? 'translate-x-0' : checked ? 'translate-x-5' : 'translate-x-0';
	return [
		'pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform',
		sizeClasses,
		state,
		disabled ? 'opacity-50' : ''
	]
		.filter(Boolean)
		.join(' ');
};

export const getToggleContainerClasses = (className = '') =>
	['relative inline-flex items-center', className].filter(Boolean).join(' ');

export const getToggleTrackClasses = (disabled = false, checked?: boolean) => {
	const base =
		'relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ease-in-out';
	const state =
		checked === undefined
			? 'bg-[--color-border-primary]'
			: checked
				? 'bg-[--color-primary-500]'
				: 'bg-[--color-border-primary]';
	return [base, state, disabled ? 'opacity-50 cursor-not-allowed' : ''].filter(Boolean).join(' ');
};

export const getToggleThumbClasses = (
	size: TokenToggleSize = DEFAULT_TOGGLE_SIZE,
	disabled = false,
	checked?: boolean
) => {
	const base =
		'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-200 ease-in-out';
	const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[size];
	const state =
		checked === undefined ? 'translate-x-0.5' : checked ? 'translate-x-5' : 'translate-x-0.5';
	return [base, sizeClasses, state, disabled ? 'opacity-50 cursor-not-allowed' : '']
		.filter(Boolean)
		.join(' ');
};

export const getToggleSizeClasses = (size: TokenToggleSize = DEFAULT_TOGGLE_SIZE) =>
	TOKEN_TOGGLE_SIZE_CLASSES[size];

export const getToggleDisabledClass = (disabled = true) =>
	disabled ? 'opacity-50 cursor-not-allowed' : '';

export const getToggleGroupItemClasses = (isActive: boolean, disabled: boolean) => {
	const baseClasses =
		'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
	const activeClasses = isActive
		? 'bg-primary text-primary-foreground shadow-sm'
		: 'text-muted-foreground hover:bg-muted hover:text-foreground';
	const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

	return [baseClasses, activeClasses, disabledClasses].filter(Boolean).join(' ');
};
