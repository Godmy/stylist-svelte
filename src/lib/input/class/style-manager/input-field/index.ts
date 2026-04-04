import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';

export class InputFieldStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getInputClasses(
		disabled = false,
		error = false,
		size: TokenSize = 'md',
		variant: TokenAppearance = 'default',
		className?: string
	): string {
		return InputStyleManager.getInputClasses(variant, size, error, disabled, false, className);
	}

	static getInputSizeClass(size: TokenSize = 'md'): string {
		return InputStyleManager.getInputSizeClass(size);
	}

	static getInputFieldContainerClasses(className?: string): string {
		return this.join([
			'flex flex-col gap-1',
			className
		]);
	}

	static getInputFieldLabelClasses(required = false, className?: string): string {
		return this.join([
			'text-sm font-medium text-[var(--color-text-primary)]',
			required ? 'after:content-["*"] after:text-[var(--color-danger-500)] after:ml-1' : '',
			className
		]);
	}

	static getInputFieldHelperTextClasses(className?: string): string {
		return this.join([
			'text-xs text-[var(--color-text-secondary)]',
			className
		]);
	}

	static getInputFieldErrorTextClasses(className?: string): string {
		return this.join([
			'text-xs text-[var(--color-danger-600)]',
			className
		]);
	}

	static getInputFieldIconClasses(className?: string): string {
		return this.join([
			'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]',
			className
		]);
	}

	static getInputFieldWrapperClasses(className?: string): string {
		return this.join([
			'relative',
			className
		]);
	}
}
