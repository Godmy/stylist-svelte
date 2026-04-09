import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { ICON_BUTTON_SIZE_CLASSES } from '$stylist/control/const/record/icon-button-size-classes';
import { ICON_BUTTON_ICON_SIZE_CLASSES } from '$stylist/control/const/record/icon-button-icon-size-classes';

export class IconButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getIconButtonClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		disabled = false,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			InteractionStyleManager.getVariantClasses(variant),
			ICON_BUTTON_SIZE_CLASSES[size] ?? ICON_BUTTON_SIZE_CLASSES.md,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getIconButtonIconClass(size: TokenSize = 'md', className?: string): string {
		return this.join([
			ICON_BUTTON_ICON_SIZE_CLASSES[size] ?? ICON_BUTTON_ICON_SIZE_CLASSES.md,
			className
		]);
	}
}
