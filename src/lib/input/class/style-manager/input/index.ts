import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { INPUT_VARIANT_CLASSES } from '$stylist/input/const/record/input-variant-classes';
import { INPUT_SIZE_CLASSES } from '$stylist/input/const/map/input-size-classes';
import { TEXTAREA_SIZE_CLASSES } from '$stylist/input/const/map/textarea-size-classes';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base';
import { INPUT_DOUBLE_CONTAINER_CLASS } from '$stylist/input/const/value/input-double-container-class';
import { INPUT_ERROR_CLASS } from '$stylist/input/const/value/input-error-class';
import { INPUT_FIELD_CONTAINER_CLASS } from '$stylist/input/const/value/input-field-container-class';
import { INPUT_FIELD_ERROR_TEXT_CLASS } from '$stylist/input/const/value/input-field-error-text-class';
import { INPUT_FIELD_HELPER_TEXT_CLASS } from '$stylist/input/const/value/input-field-helper-text-class';
import { INPUT_FIELD_LABEL_CLASS } from '$stylist/input/const/value/input-field-label-class';
import { INPUT_GROUP_BUTTON_CLASS } from '$stylist/input/const/value/input-group-button-class';
import { INPUT_GROUP_CONTAINER_CLASS } from '$stylist/input/const/value/input-group-container-class';
import { INPUT_GROUP_INPUT_CLASS } from '$stylist/input/const/value/input-group-input-class';
import { INPUT_LONG_RESIZE_HANDLE_CLASS } from '$stylist/input/const/value/input-long-resize-handle-class';
import { INPUT_PASSWORD_TOGGLE_CLASS } from '$stylist/input/const/value/input-password-toggle-class';

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
		return mergeClassNames(StyleManagerBase.classes.input, variantClass, sizeClass, errorClass, disabledClass, blockClass, className);
	}

	static getInputBaseClass(): string { return StyleManagerBase.classes.input; }
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
		return mergeClassNames(StyleManagerBase.classes.input, variantClass, sizeClass, errorClass, disabledClass, blockClass, className);
	}

	static getContainerClass(className = ''): string { return mergeClassNames(INPUT_FIELD_CONTAINER_CLASS, className); }
	static getLabelClass(className = ''): string { return mergeClassNames(INPUT_FIELD_LABEL_CLASS, className); }
	static getHelperTextClass(className = ''): string { return mergeClassNames(INPUT_FIELD_HELPER_TEXT_CLASS, className); }
	static getErrorTextClass(className = ''): string { return mergeClassNames(INPUT_FIELD_ERROR_TEXT_CLASS, className); }
	static getRequiredIndicatorClass(className = ''): string { return mergeClassNames('input-field-required text-[var(--color-danger-500)]', className); }
	static getInputGroupContainerClass(className = ''): string { return mergeClassNames(INPUT_GROUP_CONTAINER_CLASS, className); }
	static getInputGroupInputClass(className = ''): string { return mergeClassNames(INPUT_GROUP_INPUT_CLASS, className); }
	static getInputGroupButtonClass(className = ''): string { return mergeClassNames(INPUT_GROUP_BUTTON_CLASS, className); }
	static getInputGroupAddonClass(className = ''): string { return mergeClassNames('input-group-addon flex items-center px-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)]', className); }
	static getPasswordToggleClass(className = ''): string { return mergeClassNames(INPUT_PASSWORD_TOGGLE_CLASS, className); }
	static getInputLongResizeHandleClass(className = ''): string { return mergeClassNames(INPUT_LONG_RESIZE_HANDLE_CLASS, className); }
	static getInputDoubleContainerClass(className = ''): string { return mergeClassNames(INPUT_DOUBLE_CONTAINER_CLASS, className); }
	static getInputFieldContainerClass(className = ''): string { return this.getContainerClass(className); }
	static getInputFieldHelperTextClass(className = ''): string { return this.getHelperTextClass(className); }
	static getInputFieldContainerClasses(): string { return this.getContainerClass(); }
	static getInputFieldHelperTextClasses(): string { return this.getHelperTextClass(); }
	static getInputGroupContainerClasses(): string { return this.getInputGroupContainerClass(); }
	static getInputGroupInputClasses(className = ''): string { return this.getInputGroupInputClass(className); }
	static getInputGroupButtonClasses(): string { return this.getInputGroupButtonClass(); }
}


