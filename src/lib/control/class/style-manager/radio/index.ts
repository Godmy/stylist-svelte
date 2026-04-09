import type { TokenSize } from '$stylist/layout/type/enum/size';
import { RADIO_SIZE_CLASSES } from '$stylist/control/const/record/radio-size-classes';
import { RADIO_INDICATOR_SIZE_CLASSES } from '$stylist/control/const/record/radio-indicator-size-classes';

export class RadioStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getRadioIndicatorClasses(checked = false, size: TokenSize = 'md'): string {
		return this.join([
			'rounded-full bg-[var(--color-text-inverse)]',
			this.getRadioIndicatorSizeClass(size),
			!checked && 'opacity-0 scale-0'
		]);
	}

	static getRadioIndicatorSizeClass(size: TokenSize = 'md'): string {
		return RADIO_INDICATOR_SIZE_CLASSES[size] ?? RADIO_INDICATOR_SIZE_CLASSES.md;
	}

	static getRadioSizeClass(size: TokenSize = 'md'): string {
		return RADIO_SIZE_CLASSES[size] ?? RADIO_SIZE_CLASSES.md;
	}

	static getRadioClasses(
		checked = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			this.getRadioSizeClass(size),
			checked
				? 'border-[var(--color-primary-600)]'
				: 'border-[var(--color-border-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer',
			className
		]);
	}

	static getRadioContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center gap-2',
			className
		]);
	}

	static getRadioLabelClasses(disabled = false, className?: string): string {
		return this.join([
			'text-sm text-[var(--color-text-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}
}
