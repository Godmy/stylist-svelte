import { cn, mergeClasses } from '../../utils/cn/index';
import type { InputVariant } from '../../tokens/interaction/variants';
import type { ComponentSize } from '../../tokens/architecture/component-size';
import { COMPONENT_SIZE } from '../../tokens/architecture/component-size';
import { INPUT_VARIANTS } from '../../tokens/interaction/variants';
import {
	ACCESSIBILITY_CLASSES,
	BASE_CLASSES,
	STATE_CLASSES
} from '../../runtime/foundation';
import { INPUT_BASE_CLASS, INPUT_DOUBLE_CONTAINER_CLASS, INPUT_ERROR_CLASS, INPUT_FIELD_CONTAINER_CLASS, INPUT_FIELD_ERROR_TEXT_CLASS, INPUT_FIELD_HELPER_TEXT_CLASS, INPUT_FIELD_LABEL_CLASS, INPUT_GROUP_BUTTON_CLASS, INPUT_GROUP_CONTAINER_CLASS, INPUT_GROUP_INPUT_CLASS, INPUT_LONG_RESIZE_HANDLE_CLASS, INPUT_PASSWORD_TOGGLE_CLASS, INPUT_SIZE_CLASSES, INPUT_VARIANT_CLASSES, TEXTAREA_SIZE_CLASSES } from '../../constants/interaction/input';

export { INPUT_VARIANTS };
export {
	INPUT_DOUBLE_CONTAINER_CLASS,
	INPUT_FIELD_CONTAINER_CLASS,
	INPUT_FIELD_ERROR_TEXT_CLASS,
	INPUT_FIELD_HELPER_TEXT_CLASS,
	INPUT_FIELD_LABEL_CLASS,
	INPUT_GROUP_BUTTON_CLASS,
	INPUT_GROUP_CONTAINER_CLASS,
	INPUT_GROUP_INPUT_CLASS,
	INPUT_LONG_RESIZE_HANDLE_CLASS,
	INPUT_PASSWORD_TOGGLE_CLASS,
	INPUT_SIZE_CLASSES,
	TEXTAREA_SIZE_CLASSES
};

export class InputStyleManager {
	static getInputClasses(
		variant: InputVariant = 'default',
		size: ComponentSize = 'md',
		error = false,
		disabled = false,
		block = false,
		className = ''
	): string {
		const variantClass =
			(INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
		const sizeClass = INPUT_SIZE_CLASSES[size] ?? INPUT_SIZE_CLASSES.md;
		const errorClass = error ? INPUT_ERROR_CLASS : '';
		const disabledClass = disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '';
		const blockClass = block ? 'w-full' : '';

		return mergeClasses(
			INPUT_BASE_CLASS,
			variantClass,
			sizeClass,
			errorClass,
			disabledClass,
			blockClass,
			className
		);
	}

	static getTextareaClasses(
		variant: InputVariant = 'default',
		size: ComponentSize = 'md',
		error = false,
		disabled = false,
		block = false,
		className = ''
	): string {
		const variantClass =
			(INPUT_VARIANT_CLASSES as Record<string, string>)[variant] ?? INPUT_VARIANT_CLASSES.default;
		const sizeClass = TEXTAREA_SIZE_CLASSES[size] ?? TEXTAREA_SIZE_CLASSES.md;
		const errorClass = error ? INPUT_ERROR_CLASS : '';
		const disabledClass = disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '';
		const blockClass = block ? 'w-full' : '';

		return mergeClasses(
			INPUT_BASE_CLASS,
			variantClass,
			sizeClass,
			errorClass,
			disabledClass,
			blockClass,
			className
		);
	}

	static getContainerClass(className = ''): string {
		return cn(INPUT_FIELD_CONTAINER_CLASS, className);
	}

	static getLabelClass(className = ''): string {
		return cn(INPUT_FIELD_LABEL_CLASS, className);
	}

	static getHelperTextClass(className = ''): string {
		return cn(INPUT_FIELD_HELPER_TEXT_CLASS, className);
	}

	static getErrorTextClass(className = ''): string {
		return cn(INPUT_FIELD_ERROR_TEXT_CLASS, className);
	}

	static getRequiredIndicatorClass(className = ''): string {
		return cn('input-field-required text-[var(--color-danger-500)]', className);
	}

	static getInputGroupContainerClass(className = ''): string {
		return cn(INPUT_GROUP_CONTAINER_CLASS, className);
	}

	static getInputGroupInputClass(className = ''): string {
		return cn(INPUT_GROUP_INPUT_CLASS, className);
	}

	static getInputGroupButtonClass(className = ''): string {
		return cn(INPUT_GROUP_BUTTON_CLASS, className);
	}

	static getInputGroupAddonClass(className = ''): string {
		return cn(
			'input-group-addon flex items-center px-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)]',
			className
		);
	}

	static getPasswordToggleClass(className = ''): string {
		return cn(INPUT_PASSWORD_TOGGLE_CLASS, className);
	}

	static getInputLongResizeHandleClass(className = ''): string {
		return cn(INPUT_LONG_RESIZE_HANDLE_CLASS, className);
	}

	static getInputDoubleContainerClass(className = ''): string {
		return cn(INPUT_DOUBLE_CONTAINER_CLASS, className);
	}

	static getInputFieldContainerClass(className = ''): string {
		return this.getContainerClass(className);
	}

	static getInputFieldHelperTextClass(className = ''): string {
		return this.getHelperTextClass(className);
	}

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

export default InputStyleManager;




