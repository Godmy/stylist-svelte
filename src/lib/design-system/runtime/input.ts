import type { InputPreset } from '../runtime/types';
import type { ComponentSize } from '../tokens/architecture/component-size';
import { COMPONENT_SIZE } from '../tokens/architecture/component-size';
import { INPUT_VARIANTS } from '../tokens/interaction/variants';
import { createBasePreset } from './preset';
import {
	INPUT_SIZE_CLASSES,
	TEXTAREA_SIZE_CLASSES,
	INPUT_FIELD_CONTAINER_CLASS,
	INPUT_FIELD_HELPER_TEXT_CLASS,
	INPUT_FIELD_ERROR_TEXT_CLASS,
	INPUT_FIELD_LABEL_CLASS,
	INPUT_GROUP_CONTAINER_CLASS,
	INPUT_GROUP_INPUT_CLASS,
	INPUT_GROUP_BUTTON_CLASS,
	INPUT_PASSWORD_TOGGLE_CLASS,
	INPUT_LONG_RESIZE_HANDLE_CLASS,
	INPUT_DOUBLE_CONTAINER_CLASS
} from '../styles/interaction/input';

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
		size: INPUT_SIZE_CLASSES
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
		size: TEXTAREA_SIZE_CLASSES
	}
} as const;

// ============================================================================
// Input Group Preset
// ============================================================================

export const INPUT_GROUP_PRESET = {
	containerClass: INPUT_GROUP_CONTAINER_CLASS,
	inputClass: INPUT_GROUP_INPUT_CLASS,
	buttonClass: INPUT_GROUP_BUTTON_CLASS
} as const;

// ============================================================================
// Input Specialized Presets
// ============================================================================

export const INPUT_PASSWORD_PRESET = {
	...INPUT_FIELD_PRESET,
	toggleClass: INPUT_PASSWORD_TOGGLE_CLASS
} as const;

export const INPUT_LONG_PRESET = {
	...INPUT_FIELD_PRESET,
	resizeHandleClass: INPUT_LONG_RESIZE_HANDLE_CLASS
} as const;

export const INPUT_DOUBLE_PRESET = {
	containerClass: INPUT_DOUBLE_CONTAINER_CLASS
} as const;

// ============================================================================
// Input Container Presets
// ============================================================================

export const INPUT_CONTAINER_PRESET = {
	containerClass: INPUT_FIELD_CONTAINER_CLASS,
	helperTextClass: INPUT_FIELD_HELPER_TEXT_CLASS,
	errorTextClass: INPUT_FIELD_ERROR_TEXT_CLASS,
	labelClass: INPUT_FIELD_LABEL_CLASS
} as const;








