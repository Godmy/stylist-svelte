import type { InputPreset } from '$stylist/architecture/interface/preset/index';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import { TOKEN_SIZE } from '$stylist/architecture/const/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import { TOKEN_APPEARANCE } from '$stylist/information/const/token/appearance';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { InputStyleManager } from '$stylist/interaction/class/style-manager/input';

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
		error: 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
		size: Object.fromEntries(TOKEN_SIZE.map((size) => [size, InputStyleManager.getInputSizeClass(size)])) as Record<TokenSize, string>
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
		error: 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
		size: Object.fromEntries(TOKEN_SIZE.map((size) => [size, InputStyleManager.getTextareaSizeClass(size)])) as Record<TokenSize, string>
	}
} as const;

// ============================================================================
// Input Group Preset
// ============================================================================

export const INPUT_GROUP_PRESET = {
	containerClass: InputStyleManager.getInputGroupContainerClasses(),
	inputClass: InputStyleManager.getInputGroupInputClasses(),
	buttonClass: InputStyleManager.getInputGroupButtonClasses()
} as const;

// ============================================================================
// Input Specialized Presets
// ============================================================================

export const INPUT_PASSWORD_PRESET = {
	...INPUT_FIELD_PRESET,
	toggleClass: InputStyleManager.getPasswordToggleClass()
} as const;

export const INPUT_LONG_PRESET = {
	...INPUT_FIELD_PRESET,
	resizeHandleClass: InputStyleManager.getInputLongResizeHandleClass()
} as const;

export const INPUT_DOUBLE_PRESET = {
	containerClass: InputStyleManager.getInputDoubleContainerClass()
} as const;

// ============================================================================
// Input Container Presets
// ============================================================================

export const INPUT_CONTAINER_PRESET = {
	containerClass: InputStyleManager.getInputFieldContainerClasses(),
	helperTextClass: InputStyleManager.getInputFieldHelperTextClasses(),
	errorTextClass: InputStyleManager.getErrorTextClass(),
	labelClass: InputStyleManager.getLabelClass()
} as const;













