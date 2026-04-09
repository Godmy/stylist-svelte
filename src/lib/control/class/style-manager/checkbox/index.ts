import type { TokenSize } from '$stylist/layout/type/enum/size';
import { CHECKBOX_SIZE_CLASSES } from '$stylist/control/const/record/checkbox-size-classes';

export class CheckboxStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getCheckboxIndicatorClasses(checked = false, size: TokenSize = 'md'): string {
		return this.join([
			'flex items-center justify-center rounded text-[var(--color-text-inverse)]',
			this.getCheckboxSizeClass(size),
			checked ? 'bg-[var(--color-primary-600)]' : 'bg-transparent',
			!checked && 'opacity-0'
		]);
	}

	static getCheckboxSizeClass(size: TokenSize = 'md'): string {
		return CHECKBOX_SIZE_CLASSES[size] ?? CHECKBOX_SIZE_CLASSES.md;
	}

	static getCheckboxClasses(
		checked = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center rounded border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			this.getCheckboxSizeClass(size),
			checked
				? 'bg-[var(--color-primary-600)] border-[var(--color-primary-600)]'
				: 'bg-[var(--color-background-primary)] border-[var(--color-border-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer',
			className
		]);
	}

	static getCheckboxContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center gap-2',
			className
		]);
	}

	static getCheckboxLabelClasses(disabled = false, className?: string): string {
		return this.join([
			'text-sm text-[var(--color-text-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}
}
