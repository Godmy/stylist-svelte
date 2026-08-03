import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotUpsellProduct } from '$stylist/commerce/interface/slot/upsell-product';
import type { BehaviorUpsellEvents } from '$stylist/commerce/interface/behavior/upsell-events';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeUpsell
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotText]>,
		BehaviorUpsellEvents {
	currentProduct: SlotUpsellProduct;

	upsellProducts: SlotUpsellProduct[];

	maxProducts?: number;

	currency?: string;

	locale?: string;

	showSavings?: boolean;

	showReason?: boolean;

	headerClass?: string;

	productListClass?: string;

	productCardClass?: string;
}
