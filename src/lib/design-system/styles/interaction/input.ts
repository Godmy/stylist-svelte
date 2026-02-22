import {
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
	INPUT_TOKENS
} from '../../classes/interaction/input';
import { cn, mergeClasses } from '../../utils/cn/index';
import type { InputVariant } from '../../tokens/architecture/variants';
import type { CompactSize, ComponentSize } from '../../tokens/architecture/sizes';

// ============================================================================
// Input Style Manager
// ============================================================================

export class InputStyleManager {
	// ------------------------------------------------------------------------
	// Base Input Classes
	// ------------------------------------------------------------------------

	static getInputClasses(
		variant: InputVariant = 'default',
		size: CompactSize = 'md',
		error: boolean = false,
		disabled: boolean = false,
		block: boolean = false,
		className: string = ''
	): string {
		const baseClasses = INPUT_BASE_CLASS;
		const variantClass =
			(INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
		const sizeClass = INPUT_SIZE_CLASSES[size] ?? INPUT_SIZE_CLASSES.md;
		const errorClass = error ? INPUT_ERROR_CLASS : '';
		const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
		const blockClass = block ? 'w-full' : '';

		return mergeClasses(baseClasses, variantClass, sizeClass, errorClass, disabledClass, blockClass, className);
	}

	static getTextareaClasses(
		variant: InputVariant = 'default',
		size: ComponentSize = 'md',
		error: boolean = false,
		disabled: boolean = false,
		block: boolean = false,
		className: string = ''
	): string {
		const baseClasses = INPUT_BASE_CLASS;
		const variantClass =
			(INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
		const sizeClass = TEXTAREA_SIZE_CLASSES[size] ?? TEXTAREA_SIZE_CLASSES.md;
		const errorClass = error ? INPUT_ERROR_CLASS : '';
		const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
		const blockClass = block ? 'w-full' : '';

		return mergeClasses(baseClasses, variantClass, sizeClass, errorClass, disabledClass, blockClass, className);
	}

	// ------------------------------------------------------------------------
	// Container & Helper Classes
	// ------------------------------------------------------------------------

	static getContainerClass(className: string = ''): string {
		return cn(INPUT_FIELD_CONTAINER_CLASS, className);
	}

	static getLabelClass(className: string = ''): string {
		return cn(INPUT_FIELD_LABEL_CLASS, className);
	}

	static getHelperTextClass(className: string = ''): string {
		return cn(INPUT_FIELD_HELPER_TEXT_CLASS, className);
	}

	static getErrorTextClass(className: string = ''): string {
		return cn(INPUT_FIELD_ERROR_TEXT_CLASS, className);
	}

	static getRequiredIndicatorClass(className: string = ''): string {
		return cn(INPUT_FIELD_REQUIRED_INDICATOR_CLASS, className);
	}

	// ------------------------------------------------------------------------
	// Input Group Classes
	// ------------------------------------------------------------------------

	static getInputGroupContainerClass(className: string = ''): string {
		return cn(INPUT_GROUP_CONTAINER_CLASS, className);
	}

	static getInputGroupInputClass(className: string = ''): string {
		return cn(INPUT_GROUP_INPUT_CLASS, className);
	}

	static getInputGroupButtonClass(className: string = ''): string {
		return cn(INPUT_GROUP_BUTTON_CLASS, className);
	}

	static getInputGroupAddonClass(className: string = ''): string {
		return cn(INPUT_GROUP_ADDON_CLASS, className);
	}

	// ------------------------------------------------------------------------
	// Specialized Input Classes
	// ------------------------------------------------------------------------

	static getPasswordToggleClass(className: string = ''): string {
		return cn(INPUT_PASSWORD_TOGGLE_CLASS, className);
	}

	static getInputLongResizeHandleClass(className: string = ''): string {
		return cn(INPUT_LONG_RESIZE_HANDLE_CLASS, className);
	}

	static getInputDoubleContainerClass(className: string = ''): string {
		return cn(INPUT_DOUBLE_CONTAINER_CLASS, className);
	}

	// ------------------------------------------------------------------------
	// Alias Methods (for backward compatibility)
	// ------------------------------------------------------------------------

	static getInputFieldContainerClass(className = ''): string {
		return this.getContainerClass(className);
	}

	static getInputFieldHelperTextClass(className = ''): string {
		return this.getHelperTextClass(className);
	}

	// ------------------------------------------------------------------------
	// Legacy Methods (for backward compatibility)
	// ------------------------------------------------------------------------

	static getInputFieldContainerClasses(): string {
		return this.getContainerClass();
	}

	static getInputFieldHelperTextClasses(): string {
		return this.getHelperTextClass();
	}

	static getInputGroupContainerClasses(): string {
		return this.getInputGroupContainerClass();
	}

	static getInputGroupInputClasses(className = ''): string {
		return this.getInputGroupInputClass(className);
	}

	static getInputGroupButtonClasses(): string {
		return this.getInputGroupButtonClass();
	}
}

// ============================================================================
// Exports
// ============================================================================

export { INPUT_TOKENS };
export default InputStyleManager;
