import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

const PAGE_BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-7 h-7 text-xs',
	sm: 'w-8 h-8 text-sm',
	md: 'w-9 h-9 text-sm',
	lg: 'w-11 h-11 text-base',
	xl: 'w-12 h-12 text-base',
	'2xl': 'w-14 h-14 text-lg',
	'1/4': 'w-7 h-7 text-xs',
	'1/3': 'w-8 h-8 text-sm',
	'2/5': 'w-8 h-8 text-sm',
	'1/2': 'w-9 h-9 text-sm',
	'3/5': 'w-9 h-9 text-sm',
	'2/3': 'w-11 h-11 text-base',
	'3/4': 'w-12 h-12 text-base',
	full: 'w-14 h-14 text-lg'
};

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
