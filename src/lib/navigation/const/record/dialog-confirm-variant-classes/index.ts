export const DIALOG_CONFIRM_VARIANT_CLASSES: Record<string, string> = {
	danger: 'bg-[var(--color-danger-600)] hover:bg-[var(--color-danger-700)] focus:ring-red-500',
	warning: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
	info: 'bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:ring-indigo-500'
};

export const DIALOG_CONFIRM_ICON_COLORS: Record<string, string> = {
	danger: 'text-[var(--color-danger-600)]',
	warning: 'text-yellow-600',
	info: 'text-[var(--color-primary-600)]'
};

export const DIALOG_CONFIRM_ICON_NAMES: Record<string, string> = {
	danger: 'alert-triangle',
	warning: 'alert-triangle',
	info: 'info'
};
