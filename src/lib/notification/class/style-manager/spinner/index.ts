import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { SPINNER_SIZE_CLASSES } from '$stylist/notification/const/record/spinner-size-classes';
import { SPINNER_COLOR_CLASSES } from '$stylist/notification/const/record/spinner-color-classes';
import { SPINNER_VARIANT_CLASSES } from '$stylist/notification/const/record/spinner-variant-classes';

export class SpinnerStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSpinnerSizeClass(size: TokenSize = 'md'): string {
		return SPINNER_SIZE_CLASSES[size] ?? SPINNER_SIZE_CLASSES.md;
	}

	static getSpinnerColorClass(color: TokenAppearance = 'primary'): string {
		return SPINNER_COLOR_CLASSES[color] ?? SPINNER_COLOR_CLASSES.primary;
	}

	static getSpinnerContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center justify-center',
			className
		]);
	}

	static getSpinnerClasses(
		variant: string = 'spin',
		size: TokenSize = 'md',
		color: TokenAppearance = 'primary',
		className?: string
	): string {
		return this.join([
			'inline-block',
			this.getSpinnerSizeClass(size),
			this.getSpinnerColorClass(color),
			SPINNER_VARIANT_CLASSES[variant] ?? SPINNER_VARIANT_CLASSES.spin,
			className
		]);
	}
}
