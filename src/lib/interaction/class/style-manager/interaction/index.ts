import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { VARIANT_CLASSES } from '$stylist/interaction/const/record/variant-classes';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base';

export class InteractionStyleManager {
	static getInteractiveBaseClasses(className = ''): string {
		return mergeClassNames(StyleManagerBase.classes.interactive, className);
	}

	static getInteractiveBaseClass(): string {
		return StyleManagerBase.classes.interactive;
	}

	static getVariantClasses(
		variant: keyof typeof VARIANT_CLASSES = 'default',
		className = ''
	): string {
		return mergeClassNames(VARIANT_CLASSES[variant], className);
	}

	static getInteractiveClasses(options: {
		variant?: keyof typeof VARIANT_CLASSES;
		className?: string;
	} = {}): string {
		return mergeClassNames(
			StyleManagerBase.classes.interactive,
			VARIANT_CLASSES[options.variant ?? 'default'],
			options.className ?? ''
		);
	}

	static getInteractiveVariants(): readonly (keyof typeof VARIANT_CLASSES)[] {
		return Object.keys(VARIANT_CLASSES) as (keyof typeof VARIANT_CLASSES)[];
	}

	static getVariantClassMap(): typeof VARIANT_CLASSES {
		return VARIANT_CLASSES;
	}

	static getPrimarySolidClasses(): string {
		return VARIANT_CLASSES.primary;
	}
}

