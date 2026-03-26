import { cn, mergeClasses } from '$stylist/information/function/cn/index';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import { TOKEN_APPEARANCE } from '$stylist/information/const/token/appearance';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';

export { TOKEN_APPEARANCE };

const INPUT_BASE_CLASS = StyleManagerBase.classes.input;
const INPUT_VARIANT_CLASSES: Record<TokenAppearance | 'filled', string> = {
	default:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	filled:
		'bg-[var(--color-secondary-50)] text-[var(--color-text-primary)] border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	outline:
		'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] border border-transparent hover:bg-[var(--color-secondary-50)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	info:
		'bg-[var(--color-primary-50)] text-[var(--color-text-primary)] border border-[var(--color-primary-200)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	success:
		'bg-[var(--color-success-50)] text-[var(--color-text-primary)] border border-[var(--color-success-200)] focus:ring-2 focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]',
	warning:
		'bg-[var(--color-warning-50)] text-[var(--color-text-primary)] border border-[var(--color-warning-200)] focus:ring-2 focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]',
	danger:
		'bg-[var(--color-danger-50)] text-[var(--color-text-primary)] border border-[var(--color-danger-200)] focus:ring-2 focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
	error:
		'bg-[var(--color-danger-50)] text-[var(--color-text-primary)] border border-[var(--color-danger-200)] focus:ring-2 focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
	primary:
		'bg-[var(--color-primary-50)] text-[var(--color-text-primary)] border border-[var(--color-primary-200)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	solid:
		'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	secondary:
		'bg-[var(--color-secondary-50)] text-[var(--color-text-primary)] border border-[var(--color-secondary-200)] focus:ring-2 focus:ring-[var(--color-secondary-500)] focus:border-[var(--color-secondary-500)]',
	link:
		'bg-transparent text-[var(--color-primary-600)] border border-transparent underline underline-offset-2 focus:ring-2 focus:ring-[var(--color-primary-500)]',
	subtle:
		'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)] border border-[var(--color-neutral-100)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	neutral:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] border border-[var(--color-neutral-300)] focus:ring-2 focus:ring-[var(--color-neutral-400)]',
	gray:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] border border-[var(--color-neutral-300)] focus:ring-2 focus:ring-[var(--color-neutral-400)]',
	dark:
		'bg-[var(--color-neutral-900)] text-[var(--color-text-inverse)] border border-[var(--color-neutral-800)] focus:ring-2 focus:ring-[var(--color-neutral-700)]',
	light:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	elevated:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-secondary)] shadow-sm focus:ring-2 focus:ring-[var(--color-primary-500)]',
	flat:
		'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)]'
};
const INPUT_ERROR_CLASS = 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]';
const INPUT_SIZE_CLASSES = {
	xs: 'h-7 px-2.5 text-[10px] rounded',
	sm: 'h-8 px-3 text-xs rounded-md',
	md: 'h-9 px-4 text-sm rounded-md',
	lg: 'h-11 px-6 text-base rounded-lg',
	xl: 'h-12 px-7 text-lg rounded-xl',
	'2xl': 'h-14 px-8 text-xl rounded-xl',
	'1/4': 'h-7 px-2.5 text-[10px] rounded',
	'1/3': 'h-8 px-3 text-xs rounded-md',
	'2/5': 'h-8 px-3 text-xs rounded-md',
	'1/2': 'h-9 px-4 text-sm rounded-md',
	'3/5': 'h-9 px-4 text-sm rounded-md',
	'2/3': 'h-11 px-6 text-base rounded-lg',
	'3/4': 'h-12 px-7 text-lg rounded-xl',
	full: 'h-14 px-8 text-xl rounded-xl w-full'
} as const;
const TEXTAREA_SIZE_CLASSES = {
	xs: 'px-2.5 text-[10px] rounded min-h-[64px]',
	sm: 'px-3 text-xs rounded-md min-h-[80px]',
	md: 'px-4 text-sm rounded-md min-h-[100px]',
	lg: 'px-6 text-base rounded-lg min-h-[140px]',
	xl: 'px-6 text-base rounded-lg min-h-[200px]',
	'2xl': 'px-7 text-xl rounded-xl min-h-[240px]',
	'1/4': 'px-2.5 text-[10px] rounded min-h-[64px]',
	'1/3': 'px-3 text-xs rounded-md min-h-[80px]',
	'2/5': 'px-3 text-xs rounded-md min-h-[80px]',
	'1/2': 'px-4 text-sm rounded-md min-h-[100px]',
	'3/5': 'px-4 text-sm rounded-md min-h-[100px]',
	'2/3': 'px-6 text-base rounded-lg min-h-[140px]',
	'3/4': 'px-6 text-base rounded-lg min-h-[200px]',
	full: 'px-7 text-xl rounded-xl min-h-[240px] w-full'
} as const;
const INPUT_FIELD_CONTAINER_CLASS = 'input-field-container flex flex-col gap-1';
const INPUT_FIELD_HELPER_TEXT_CLASS = 'input-field-helper-text text-xs text-[var(--color-text-secondary)]';
const INPUT_FIELD_ERROR_TEXT_CLASS = 'input-field-error-text text-xs text-[var(--color-danger-600)]';
const INPUT_FIELD_LABEL_CLASS = 'input-field-label text-sm font-medium text-[var(--color-text-primary)]';
const INPUT_GROUP_CONTAINER_CLASS = 'input-group-container flex items-stretch gap-0';
const INPUT_GROUP_INPUT_CLASS = 'input-group-input flex-1 rounded-r-none';
const INPUT_GROUP_BUTTON_CLASS = 'input-group-button rounded-l-none';
const INPUT_PASSWORD_TOGGLE_CLASS = 'input-password-toggle p-2 hover:bg-[var(--color-background-secondary)] rounded-md';
const INPUT_LONG_RESIZE_HANDLE_CLASS = 'input-long-resize-handle absolute bottom-0 right-0 p-1 cursor-nwse-resize';
const INPUT_DOUBLE_CONTAINER_CLASS = 'input-double-container grid grid-cols-2 gap-4';

export class InputStyleManager {
	static getInputClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		error = false,
		disabled = false,
		block = false,
		className = ''
	): string {
		const variantClass = (INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
		const sizeClass = INPUT_SIZE_CLASSES[size] ?? INPUT_SIZE_CLASSES.md;
		const errorClass = error ? INPUT_ERROR_CLASS : '';
		const disabledClass = disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '';
		const blockClass = block ? 'w-full' : '';
		return mergeClasses(INPUT_BASE_CLASS, variantClass, sizeClass, errorClass, disabledClass, blockClass, className);
	}

	static getInputBaseClass(): string { return INPUT_BASE_CLASS; }
	static getInputVariantClass(variant: TokenAppearance = 'default'): string {
		return (INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
	}
	static getInputErrorClass(): string { return INPUT_ERROR_CLASS; }
	static getInputSizeClass(size: TokenSize = 'md'): string { return INPUT_SIZE_CLASSES[size] ?? INPUT_SIZE_CLASSES.md; }
	static getTextareaSizeClass(size: TokenSize = 'md'): string { return TEXTAREA_SIZE_CLASSES[size] ?? TEXTAREA_SIZE_CLASSES.md; }

	static getTextareaClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		error = false,
		disabled = false,
		block = false,
		className = ''
	): string {
		const variantClass = (INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
		const sizeClass = TEXTAREA_SIZE_CLASSES[size] ?? TEXTAREA_SIZE_CLASSES.md;
		const errorClass = error ? INPUT_ERROR_CLASS : '';
		const disabledClass = disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '';
		const blockClass = block ? 'w-full' : '';
		return mergeClasses(INPUT_BASE_CLASS, variantClass, sizeClass, errorClass, disabledClass, blockClass, className);
	}

	static getContainerClass(className = ''): string { return cn(INPUT_FIELD_CONTAINER_CLASS, className); }
	static getLabelClass(className = ''): string { return cn(INPUT_FIELD_LABEL_CLASS, className); }
	static getHelperTextClass(className = ''): string { return cn(INPUT_FIELD_HELPER_TEXT_CLASS, className); }
	static getErrorTextClass(className = ''): string { return cn(INPUT_FIELD_ERROR_TEXT_CLASS, className); }
	static getRequiredIndicatorClass(className = ''): string { return cn('input-field-required text-[var(--color-danger-500)]', className); }
	static getInputGroupContainerClass(className = ''): string { return cn(INPUT_GROUP_CONTAINER_CLASS, className); }
	static getInputGroupInputClass(className = ''): string { return cn(INPUT_GROUP_INPUT_CLASS, className); }
	static getInputGroupButtonClass(className = ''): string { return cn(INPUT_GROUP_BUTTON_CLASS, className); }
	static getInputGroupAddonClass(className = ''): string { return cn('input-group-addon flex items-center px-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)]', className); }
	static getPasswordToggleClass(className = ''): string { return cn(INPUT_PASSWORD_TOGGLE_CLASS, className); }
	static getInputLongResizeHandleClass(className = ''): string { return cn(INPUT_LONG_RESIZE_HANDLE_CLASS, className); }
	static getInputDoubleContainerClass(className = ''): string { return cn(INPUT_DOUBLE_CONTAINER_CLASS, className); }
	static getInputFieldContainerClass(className = ''): string { return this.getContainerClass(className); }
	static getInputFieldHelperTextClass(className = ''): string { return this.getHelperTextClass(className); }
	static getInputFieldContainerClasses(): string { return this.getContainerClass(); }
	static getInputFieldHelperTextClasses(): string { return this.getHelperTextClass(); }
	static getInputGroupContainerClasses(): string { return this.getInputGroupContainerClass(); }
	static getInputGroupInputClasses(className = ''): string { return this.getInputGroupInputClass(className); }
	static getInputGroupButtonClasses(): string { return this.getInputGroupButtonClass(); }
}

export default InputStyleManager;

