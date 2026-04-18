/**
 * DiscountApplierContract вЂ” РїСЂРёРјРµРЅРµРЅРёРµ СЃРєРёРґРѕРє Рё РїСЂРѕРјРѕРєРѕРґРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotDiscountRule } from '$stylist/commerce/interface/slot/discount-rule';

export interface BehaviorDiscountApplierEvents {
	onApplyCode?: (code: string) => void;
	onApplyRule?: (rule: SlotDiscountRule) => void;
	onRemoveRule?: (ruleId: string) => void;
	onValidateCode?: (code: string) => Promise<boolean>;
}
