import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';

export class SearchBarStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSearchBarClasses(
		disabled = false,
		error = false,
		size: TokenSize = 'md',
		variant: TokenAppearance = 'default',
		className?: string
	): string {
		return InputStyleManager.getInputClasses(variant, size, error, disabled, false, className);
	}

	static getSearchBarContainerClasses(className?: string): string {
		return this.join([
			'relative flex items-center',
			className
		]);
	}

	static getSearchBarIconClasses(className?: string): string {
		return this.join([
			'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]',
			className
		]);
	}

	static getSearchBarInputWrapperClasses(className?: string): string {
		return this.join([
			'flex-1',
			className
		]);
	}

	static getSearchBarClearButtonClasses(disabled = false, className?: string): string {
		return this.join([
			'absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]',
			'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getSearchBarClearIconClasses(className?: string): string {
		return this.join([
			'w-3.5 h-3.5',
			className
		]);
	}

	// Legacy aliases for backward compatibility
	static getAllClasses(props: { class?: string }): string {
		return this.getSearchBarContainerClasses(props.class);
	}

	static getIconContainerClasses(): string {
		return this.getSearchBarIconClasses();
	}

	static getInputClasses(): string {
		return this.getSearchBarInputWrapperClasses();
	}

	static getControlsContainerClasses(): string {
		return this.getSearchBarClearButtonClasses();
	}
}
