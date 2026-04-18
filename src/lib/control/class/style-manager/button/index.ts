import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { BUTTON_VARIANT_CLASSES } from '$stylist/control/const/record/button-variant-classes';
import { BUTTON_SIZE_CLASSES } from '$stylist/control/const/record/button-size-classes';
import { TOKEN_BUTTON_LOADER_CLASSES } from '$stylist/control/const/enum/button-loader-classes';

export class ButtonStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getButtonVariantClass(variant: TokenAppearance = 'default'): string {
		return BUTTON_VARIANT_CLASSES[variant] ?? BUTTON_VARIANT_CLASSES.default;
	}

	static getButtonSizeClass(size: TokenSize = 'md'): string {
		return BUTTON_SIZE_CLASSES[size] ?? BUTTON_SIZE_CLASSES.md;
	}

	static getButtonLoaderClasses(): string {
		return TOKEN_BUTTON_LOADER_CLASSES.join(' ');
	}

	static getButtonClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		disabled = false,
		loading = false,
		block = false,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			'relative',
			this.getButtonVariantClass(variant),
			this.getButtonSizeClass(size),
			disabled || loading ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			block ? 'w-full' : '',
			loading ? 'text-transparent' : '',
			className
		]);
	}
}
