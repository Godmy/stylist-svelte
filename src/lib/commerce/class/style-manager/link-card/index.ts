import type { TokenAppearance as LinkCardVariant } from '$stylist/interaction/type/record/appearance';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import { LINK_CARD_VARIANT_CLASSES } from '$stylist/commerce/const/record/link-card-variant-classes';

export class LinkCardStyleManager {
	static getContainerClasses(variant: LinkCardVariant = 'default'): string {
		return mergeClassNames(
			'link-card group block p-6 transition-all duration-[var(--duration-200)]',
			CardStyleManager.getBaseClasses(),
			LINK_CARD_VARIANT_CLASSES[variant] ?? LINK_CARD_VARIANT_CLASSES.default
		);
	}

	static getContentClasses(): string {
		return 'flex items-start';
	}

	static getIconContainerClasses(): string {
		return 'mr-4 mt-0.5 flex-shrink-0';
	}

	static getIconClasses(): string {
		return 'h-6 w-6 text-[var(--color-text-tertiary)] transition-colors duration-[var(--duration-200)] group-hover:text-[var(--color-text-secondary)]';
	}

	static getTextContainerClasses(): string {
		return 'min-w-0 flex-1';
	}

	static getTitleClasses(): string {
		return 'text-lg font-semibold text-[var(--color-text-primary)] transition-colors duration-[var(--duration-200)] group-hover:text-[var(--color-primary-600)]';
	}

	static getDescriptionClasses(): string {
		return 'mt-1 text-sm text-[var(--color-text-secondary)]';
	}

	static getArrowClasses(): string {
		return 'ml-2 flex-shrink-0 text-[var(--color-text-tertiary)] transition-colors duration-[var(--duration-200)] group-hover:text-[var(--color-primary-600)]';
	}
}

