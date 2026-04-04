/**
 * PricingTableContract — таблица тарифных планов.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PricingPlanContract {
	name: string;
	price: string;
	period: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
}

export interface PricingTableContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of pricing plans */
	plans: PricingPlanContract[];
}
