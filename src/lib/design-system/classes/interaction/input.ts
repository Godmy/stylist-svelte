import { ACCESSIBILITY_CLASSES, BASE_CLASSES, STATE_CLASSES } from '../information/classes';
import { DEFAULT_FLAGS } from '../../tokens/information/flags';
import { COMPACT_SIZE_SCALE, COMPONENT_SIZE_SCALE } from '../../tokens/architecture/sizes';
import { INPUT_VARIANTS } from '../../tokens/architecture/variants';

// ============================================================================
// Base Input Classes
// ============================================================================

export const INPUT_BASE_CLASS = BASE_CLASSES.input;

export const INPUT_VARIANT_CLASSES = {
	default:
		'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	filled:
		'bg-[var(--color-secondary-50)] text-[var(--color-text-primary)] ' +
		'border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	outlined:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-secondary-50)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	info:
		'bg-[var(--color-primary-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-primary-200)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	success:
		'bg-[var(--color-success-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-success-200)] focus:ring-2 focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]',
	warning:
		'bg-[var(--color-warning-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-warning-200)] focus:ring-2 focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]',
	danger:
		'bg-[var(--color-danger-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-danger-200)] focus:ring-2 focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
	solid:
		'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]'
} as const;

export const INPUT_ERROR_CLASS =
	'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]';

// ============================================================================
// Input Size Classes
// ============================================================================

export const INPUT_SIZE_CLASSES = {
	sm: 'h-8 px-3 text-xs rounded-md',
	md: 'h-9 px-4 text-sm rounded-md',
	lg: 'h-11 px-6 text-base rounded-lg'
} as const;

export const TEXTAREA_SIZE_CLASSES = {
	sm: 'px-3 text-xs rounded-md min-h-[80px]',
	md: 'px-4 text-sm rounded-md min-h-[100px]',
	lg: 'px-6 text-base rounded-lg min-h-[140px]',
	xl: 'px-6 text-base rounded-lg min-h-[200px]'
} as const;

// ============================================================================
// Input Container & Helper Classes
// ============================================================================

export const INPUT_FIELD_CONTAINER_CLASS = 'input-field-container flex flex-col gap-1';
export const INPUT_FIELD_HELPER_TEXT_CLASS = 'input-field-helper-text text-xs text-[var(--color-text-secondary)]';
export const INPUT_FIELD_ERROR_TEXT_CLASS = 'input-field-error-text text-xs text-[var(--color-danger-600)]';
export const INPUT_FIELD_LABEL_CLASS = 'input-field-label text-sm font-medium text-[var(--color-text-primary)]';
export const INPUT_FIELD_REQUIRED_INDICATOR_CLASS = 'input-field-required text-[var(--color-danger-500)]';

// ============================================================================
// Input Group Classes
// ============================================================================

export const INPUT_GROUP_CONTAINER_CLASS = 'input-group-container flex items-stretch gap-0';
export const INPUT_GROUP_INPUT_CLASS = 'input-group-input flex-1 rounded-r-none';
export const INPUT_GROUP_BUTTON_CLASS = 'input-group-button rounded-l-none';
export const INPUT_GROUP_ADDON_CLASS = 'input-group-addon flex items-center px-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]';

// ============================================================================
// Input Specialized Classes
// ============================================================================

export const INPUT_PASSWORD_TOGGLE_CLASS = 'input-password-toggle p-2 hover:bg-[var(--color-bg-secondary)] rounded-md';
export const INPUT_LONG_RESIZE_HANDLE_CLASS = 'input-long-resize-handle absolute bottom-0 right-0 p-1 cursor-nwse-resize';
export const INPUT_DOUBLE_CONTAINER_CLASS = 'input-double-container grid grid-cols-2 gap-4';

// ============================================================================
// Input Tokens Export
// ============================================================================

export { INPUT_VARIANTS };
export const INPUT_TOKENS = {
	INPUT_VARIANTS,
	COMPACT_SIZE_SCALE: COMPACT_SIZE_SCALE,
	COMPONENT_SIZE_SCALE: COMPONENT_SIZE_SCALE,
	DEFAULT_FLAGS,
	STATE_CLASSES,
	INPUT_BASE_CLASS,
	INPUT_VARIANT_CLASSES,
	INPUT_SIZE_CLASSES,
	TEXTAREA_SIZE_CLASSES,
	INPUT_ERROR_CLASS,
	INPUT_FIELD_CONTAINER_CLASS,
	INPUT_FIELD_HELPER_TEXT_CLASS,
	INPUT_FIELD_ERROR_TEXT_CLASS,
	INPUT_FIELD_LABEL_CLASS,
	INPUT_FIELD_REQUIRED_INDICATOR_CLASS,
	INPUT_GROUP_CONTAINER_CLASS,
	INPUT_GROUP_INPUT_CLASS,
	INPUT_GROUP_BUTTON_CLASS,
	INPUT_GROUP_ADDON_CLASS,
	INPUT_PASSWORD_TOGGLE_CLASS,
	INPUT_LONG_RESIZE_HANDLE_CLASS,
	INPUT_DOUBLE_CONTAINER_CLASS,
	ACCESSIBILITY_CLASSES
} as const;

