import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import { STAT_CARD_VARIANT_CLASSES } from '$stylist/information/const/map/stat-card-variant-classes';
import { STAT_CARD_TREND_TEXT_CLASSES } from '$stylist/information/const/map/stat-card-trend-text-classes';





export class StatCardStyleManager {
	static getBaseClasses(
		variant: TokenBackground = 'default',
		className = ''
	): string {
		const resolvedVariant = variant in STAT_CARD_VARIANT_CLASSES ? variant : 'default';
		return mergeClassNames(
			'stat-card p-6',
			CardStyleManager.getBaseClasses(),
			STAT_CARD_VARIANT_CLASSES[resolvedVariant as keyof typeof STAT_CARD_VARIANT_CLASSES],
			className
		);
	}

	static getVariantClasses(variant: keyof typeof STAT_CARD_VARIANT_CLASSES): string {
		return STAT_CARD_VARIANT_CLASSES[variant] ?? STAT_CARD_VARIANT_CLASSES.default;
	}

	static getIconContainerClasses(): string {
		return 'mb-4';
	}

	static getTitleClasses(): string {
		return 'stat-card-title mb-1 text-sm font-medium text-[var(--color-text-secondary)]';
	}

	static getValueClasses(): string {
		return 'stat-card-value text-2xl font-bold text-[var(--color-text-primary)]';
	}

	static getTrendContainerClasses(): string {
		return 'mt-1 flex items-center';
	}

	static getTrendTextClasses(trend: 'up' | 'down' | 'neutral' = 'neutral'): string {
		return mergeClassNames('text-xs font-medium', STAT_CARD_TREND_TEXT_CLASSES[trend]);
	}

	static getTrendIconClasses(trend: 'up' | 'down' | 'neutral' = 'neutral'): string {
		return mergeClassNames('mr-1 h-3 w-3', STAT_CARD_TREND_TEXT_CLASSES[trend]);
	}

	static getDescriptionClasses(): string {
		return 'stat-card-description mt-2 text-xs text-[var(--color-text-secondary)]';
	}
}


