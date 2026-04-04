import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';

export class NumberInputStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getNumberInputClasses(
		disabled = false,
		error = false,
		size: TokenSize = 'md',
		variant: TokenAppearance = 'default',
		className?: string
	): string {
		return InputStyleManager.getInputClasses(variant, size, error, disabled, false, className);
	}

	static getNumberInputContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center gap-0',
			className
		]);
	}

	static getNumberInputButtonClasses(
		disabled = false,
		position: 'left' | 'right' | 'top' | 'bottom' = 'right',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center w-8 h-9 bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)] text-[var(--color-text-primary)]',
			'transition-colors hover:bg-[var(--color-background-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			position === 'left' ? 'rounded-l-md rounded-r-none' : '',
			position === 'right' ? 'rounded-r-md rounded-l-none' : '',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getNumberInputButtonIconClasses(className?: string): string {
		return this.join([
			'w-4 h-4',
			className
		]);
	}

	static getNumberInputWrapperClasses(className?: string): string {
		return this.join([
			'relative flex items-center',
			className
		]);
	}
}
