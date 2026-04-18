/**
 * DiscountApplierContract вЂ” РїСЂРёРјРµРЅРµРЅРёРµ СЃРєРёРґРѕРє Рё РїСЂРѕРјРѕРєРѕРґРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotDiscountRule } from '$stylist/commerce/interface/slot/discount-rule';
import type { SlotCartItem } from '$stylist/commerce/interface/slot/cart-item';
import type { BehaviorDiscountApplierEvents } from '$stylist/commerce/interface/behavior/discount-applier-events';

export interface RecipeDiscountApplier extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorDiscountApplierEvents {
	/** List of discount rules */
	rules: SlotDiscountRule[];
	/** List of cart items */
	cartItems: SlotCartItem[];
	/** Cart total amount */
	cartTotal: number;
	/** Applied discount codes */
	appliedCodes?: string[];
	/** SlotCurrency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show code input */
	showCodeInput?: boolean;
	/** Show rule list */
	showRuleList?: boolean;
	/** Show applied rules */
	showAppliedRules?: boolean;
	/** Additional CSS class for input */
	inputClass?: string;
	/** Additional CSS class for button */
	buttonClass?: string;
}
