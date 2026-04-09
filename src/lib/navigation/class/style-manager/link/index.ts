import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { LINK_VARIANT_CLASSES } from '$stylist/navigation/const/record/link-variant-classes';
import { LINK_SIZE_CLASSES } from '$stylist/navigation/const/record/link-size-classes';

export class LinkStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getLinkClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		disabled = false,
		underline = true,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			LINK_VARIANT_CLASSES[variant] ?? LINK_VARIANT_CLASSES.default,
			LINK_SIZE_CLASSES[size] ?? LINK_SIZE_CLASSES.md,
			underline && variant !== 'outline' && variant !== 'ghost' ? 'underline underline-offset-2' : '',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer hover:opacity-[var(--opacity-80)]',
			className
		]);
	}

	static getLinkIconClasses(className?: string): string {
		return this.join([
			'w-4 h-4 ml-1',
			className
		]);
	}
}
