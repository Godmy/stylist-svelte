import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

const SPLIT_BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-6 text-xs rounded',
	sm: 'h-8 text-sm rounded-md',
	md: 'h-9 text-sm rounded-md',
	lg: 'h-11 text-base rounded-lg',
	xl: 'h-12 text-lg rounded-xl',
	'2xl': 'h-14 text-xl rounded-xl',
	'1/4': 'h-6 text-xs rounded',
	'1/3': 'h-8 text-sm rounded-md',
	'2/5': 'h-8 text-sm rounded-md',
	'1/2': 'h-9 text-sm rounded-md',
	'3/5': 'h-9 text-sm rounded-md',
	'2/3': 'h-11 text-base rounded-lg',
	'3/4': 'h-12 text-lg rounded-xl',
	full: 'h-14 text-xl rounded-xl w-full'
};

export class SplitButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSplitButtonClasses(
		variant: TokenAppearance = 'default',
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center',
			InteractionStyleManager.getVariantClasses(variant),
			SPLIT_BUTTON_SIZE_CLASSES[size] ?? SPLIT_BUTTON_SIZE_CLASSES.md,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			className
		]);
	}

	static getSplitButtonMainClasses(
		variant: TokenAppearance = 'default',
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center gap-1.5 px-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			InteractionStyleManager.getVariantClasses(variant),
			SPLIT_BUTTON_SIZE_CLASSES[size] ?? SPLIT_BUTTON_SIZE_CLASSES.md,
			'rounded-r-none border-r-0',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			className
		]);
	}

	static getSplitButtonTriggerClasses(
		variant: TokenAppearance = 'default',
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center px-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
			InteractionStyleManager.getVariantClasses(variant),
			SPLIT_BUTTON_SIZE_CLASSES[size] ?? SPLIT_BUTTON_SIZE_CLASSES.md,
			'rounded-l-none border-l-0',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			className
		]);
	}

	static getSplitButtonIconClasses(className?: string): string {
		return this.join([
			'w-4 h-4',
			className
		]);
	}

	static getSplitButtonContainerClasses(className?: string): string {
		return this.join([
			'inline-flex',
			className
		]);
	}
}
