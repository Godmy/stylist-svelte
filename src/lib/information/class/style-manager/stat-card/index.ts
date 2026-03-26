import { cn } from '$stylist/information/function/cn/index';
import { CardStyleManager } from '$stylist/information/class/style-manager/card';
import type { TokenBackground } from '$stylist/information/type/token/background';

const STAT_CARD_VARIANT_CLASSES = {
	default: '',
	gradient:
		'[background-image:var(--gradient-primary)] border-[var(--color-primary-200)]'
} as const;

const STAT_CARD_TREND_TEXT_CLASSES = {
	up: 'text-[var(--color-success-700)]',
	down: 'text-[var(--color-danger-700)]',
	neutral: 'text-[var(--color-text-secondary)]'
} as const;





export class StatCardStyleManager {
	static getBaseClasses(
		variant: TokenBackground = 'default',
		className = ''
	): string {
		const resolvedVariant = variant in STAT_CARD_VARIANT_CLASSES ? variant : 'default';
		return cn(
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
		return cn('text-xs font-medium', STAT_CARD_TREND_TEXT_CLASSES[trend]);
	}

	static getTrendIconClasses(trend: 'up' | 'down' | 'neutral' = 'neutral'): string {
		return cn('mr-1 h-3 w-3', STAT_CARD_TREND_TEXT_CLASSES[trend]);
	}

	static getDescriptionClasses(): string {
		return 'stat-card-description mt-2 text-xs text-[var(--color-text-secondary)]';
	}
}

