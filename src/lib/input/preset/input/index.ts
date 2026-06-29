import type { InputPreset } from '$stylist/interaction/type/struct/preset/input-preset';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import { TOKEN_SIZE } from '$stylist/layout/const/array/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { TOKEN_APPEARANCE } from '$stylist/interaction/const/array/appearance';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { RECORD_CLASS_SIZE } from '$stylist/layout/const/record/class-size';

// ============================================================================
// Input Field Preset
// ============================================================================

const inputBase = createBasePreset(TOKEN_APPEARANCE, TOKEN_SIZE, {
	variant: 'default',
	size: 'md'
});

export const INPUT_FIELD_PRESET: InputPreset<TokenAppearance, TokenSize> = {
	...inputBase,
	classes: {
		...inputBase.classes,
		error:
			'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
		size: Object.fromEntries(
			TOKEN_SIZE.map((size) => [size, RECORD_CLASS_SIZE[size] ?? 'h-9 px-3 text-sm'])
		) as Record<TokenSize, string>
	}
} as const;

// ============================================================================
// Textarea Preset
// ============================================================================

const textareaBase = createBasePreset(TOKEN_APPEARANCE, TOKEN_SIZE, {
	variant: 'default',
	size: 'md'
});

export const TEXTAREA_PRESET: InputPreset<TokenAppearance, TokenSize> = {
	...textareaBase,
	classes: {
		...textareaBase.classes,
		error:
			'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
		size: Object.fromEntries(
			TOKEN_SIZE.map((size) => [size, RECORD_CLASS_SIZE[size] ?? 'min-h-24 px-3 py-2 text-sm'])
		) as Record<TokenSize, string>
	}
} as const;

// ============================================================================
// Input Group Preset
// ============================================================================

export const INPUT_GROUP_PRESET = {
	containerClass: 'input-group',
	inputClass: 'input-group__input',
	buttonClass: 'input-group__button'
} as const;

// ============================================================================
// Input Specialized Presets
// ============================================================================

export const INPUT_PASSWORD_PRESET = {
	...INPUT_FIELD_PRESET,
	toggleClass: 'input-password__toggle'
} as const;

export const INPUT_LONG_PRESET = {
	...INPUT_FIELD_PRESET,
	resizeHandleClass: 'input-long__resize-handle'
} as const;

export const INPUT_DOUBLE_PRESET = {
	containerClass: 'input-double'
} as const;

// ============================================================================
// Input Container Presets
// ============================================================================

export const INPUT_CONTAINER_PRESET = {
	containerClass: 'input-field',
	helperTextClass: 'input-field__helper-text',
	errorTextClass: 'input-field__error-text',
	labelClass: 'input-field__label'
} as const;
