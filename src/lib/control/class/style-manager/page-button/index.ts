import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { PAGE_BUTTON_SIZE_CLASSES } from '$stylist/control/const/record/page-button-size-classes';

export class PageButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getPageButtonClasses(
		active = false,
		disabled = false,
		size: TokenSize = 'md',
		variant: TokenAppearance = 'default',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			PAGE_BUTTON_SIZE_CLASSES[size] ?? PAGE_BUTTON_SIZE_CLASSES.md,
			active
				? 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]'
				: InteractionStyleManager.getVariantClasses(variant),
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getPageButtonIconClasses(className?: string): string {
		return this.join([
			'w-4 h-4',
			className
		]);
	}
}
