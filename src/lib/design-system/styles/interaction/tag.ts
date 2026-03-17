import type { ComponentSize } from '$stylist/design-system/tokens';
import { InteractionStyleManager } from '$stylist/design-system/styles/interaction/interaction';

const TAG_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'px-1 py-0.5 text-[10px]',
	sm: 'px-1.5 py-0.5 text-xs',
	md: 'px-2 py-1 text-sm',
	lg: 'px-3 py-1.5 text-base',
	xl: 'px-3.5 py-2 text-lg',
	'2xl': 'px-4 py-2.5 text-xl'
};

export class TagStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getVariantClass(variant?: string): string {
		return InteractionStyleManager.getVariantClasses((variant ?? 'default') as Parameters<typeof InteractionStyleManager.getVariantClasses>[0]);
	}

	static getSizeClass(size: ComponentSize = 'md'): string {
		return TAG_SIZE_CLASSES[size];
	}

	static getTagClasses(
		variant?: string,
		size: ComponentSize = 'md',
		disabled = false,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center rounded-md font-medium',
			this.getVariantClass(variant),
			this.getSizeClass(size),
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}

	static getCloseButtonClasses(disabled = false, className?: string): string {
		return this.join([
			'ml-1 p-0.5 rounded-full hover:bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
			disabled && 'cursor-not-allowed',
			className
		]);
	}

	static getCloseButtonIconClasses(className?: string): string {
		return this.join(['w-3 h-3', className]);
	}
}
