import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

const ICON_BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-6 h-6',
	sm: 'w-7 h-7',
	md: 'w-8 h-8',
	lg: 'w-10 h-10',
	xl: 'w-11 h-11',
	'2xl': 'w-12 h-12',
	'1/4': 'w-6 h-6',
	'1/3': 'w-7 h-7',
	'2/5': 'w-7 h-7',
	'1/2': 'w-8 h-8',
	'3/5': 'w-8 h-8',
	'2/3': 'w-10 h-10',
	'3/4': 'w-11 h-11',
	full: 'w-12 h-12'
};

const ICON_BUTTON_ICON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-3.5 h-3.5',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-5.5 h-5.5',
	'2xl': 'w-6 h-6',
	'1/4': 'w-3 h-3',
	'1/3': 'w-3.5 h-3.5',
	'2/5': 'w-3.5 h-3.5',
	'1/2': 'w-4 h-4',
	'3/5': 'w-4 h-4',
	'2/3': 'w-5 h-5',
	'3/4': 'w-5.5 h-5.5',
	full: 'w-6 h-6'
};

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
