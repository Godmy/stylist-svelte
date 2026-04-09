import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { VARIANT_CLASSES } from '$stylist/interaction/const/record/variant-classes';

const INTERACTIVE_BASE_CLASS = StyleManagerBase.classes.interactive;

const PRIMARY_SOLID_CLASSES =
	'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
	'border border-transparent hover:bg-[var(--color-primary-700)]';

const INTERACTIVE_VARIANTS = Object.keys(VARIANT_CLASSES) as (keyof typeof VARIANT_CLASSES)[];

export class InteractionStyleManager {
	static getInteractiveBaseClasses(className = ''): string {
		return mergeClassNames(INTERACTIVE_BASE_CLASS, className);
	}

	static getInteractiveBaseClass(): string {
		return INTERACTIVE_BASE_CLASS;
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
			INTERACTIVE_BASE_CLASS,
			VARIANT_CLASSES[options.variant ?? 'default'],
			options.className ?? ''
		);
	}

	static getInteractiveVariants(): readonly (keyof typeof VARIANT_CLASSES)[] {
		return INTERACTIVE_VARIANTS;
	}

	static getVariantClassMap(): typeof VARIANT_CLASSES {
		return VARIANT_CLASSES;
	}

	static getPrimarySolidClasses(): string {
		return PRIMARY_SOLID_CLASSES;
	}
}

