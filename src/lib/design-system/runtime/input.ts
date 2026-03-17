import type { InputPreset } from '$stylist/design-system/runtime/types';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';
import { INPUT_VARIANTS } from '$stylist/design-system/tokens/interaction/variants';
import { createBasePreset } from '$stylist/design-system/runtime/preset';
import { InputStyleManager } from '$stylist/design-system/styles/interaction/input';

// ============================================================================
// Input Field Preset
// ============================================================================

const inputBase = createBasePreset(INPUT_VARIANTS.input, COMPONENT_SIZE, {
	variant: 'default',
	size: 'md'
});

export const INPUT_FIELD_PRESET: InputPreset<(typeof INPUT_VARIANTS.input)[number], ComponentSize> = {
	...inputBase,
	classes: {
		...inputBase.classes,
		error: 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
		size: Object.fromEntries(COMPONENT_SIZE.map((size) => [size, InputStyleManager.getInputSizeClass(size)])) as Record<ComponentSize, string>
	}
} as const;

// ============================================================================
// Textarea Preset
// ============================================================================

const textareaBase = createBasePreset(INPUT_VARIANTS.input, COMPONENT_SIZE, {
	variant: 'default',
	size: 'md'
});

export const TEXTAREA_PRESET: InputPreset<(typeof INPUT_VARIANTS.input)[number], ComponentSize> = {
	...textareaBase,
	classes: {
		...textareaBase.classes,
		error: 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
		size: Object.fromEntries(COMPONENT_SIZE.map((size) => [size, InputStyleManager.getTextareaSizeClass(size)])) as Record<ComponentSize, string>
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









