import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { PROGRESS_BAR_SIZE_CLASSES } from '$stylist/notification/const/record/progress-bar-size-classes';
import { PROGRESS_BAR_VARIANT_CLASSES } from '$stylist/notification/const/record/progress-bar-variant-classes';

export class ProgressBarStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getProgressBarSizeClass(size: TokenSize = 'md'): string {
		return PROGRESS_BAR_SIZE_CLASSES[size] ?? PROGRESS_BAR_SIZE_CLASSES.md;
	}

	static getProgressBarFillClass(value: number, variant: TokenAppearance = 'primary'): string {
		const animationClass = value < 100 ? 'transition-all duration-300 ease-in-out' : '';
		return this.join([
			'h-full rounded-full',
			PROGRESS_BAR_VARIANT_CLASSES[variant] ?? PROGRESS_BAR_VARIANT_CLASSES.primary,
			animationClass
		]);
	}

	static getProgressBarClasses(
		value: number,
		variant: TokenAppearance = 'primary',
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'w-full bg-[var(--color-background-secondary)] overflow-hidden',
			this.getProgressBarSizeClass(size),
			className
		]);
	}

	static getProgressBarContainerClasses(className?: string): string {
		return this.join([
			'w-full',
			className
		]);
	}

	static getProgressBarLabelClasses(className?: string): string {
		return this.join([
			'text-sm font-medium text-[var(--color-text-secondary)]',
			className
		]);
	}

	static getProgressBarValueClasses(className?: string): string {
		return this.join([
			'text-sm font-medium text-[var(--color-text-primary)]',
			className
		]);
	}
}
