import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotDiscountRule } from '$stylist/commerce/interface/slot/discount-rule';
export interface RecipeDiscountApplier
	extends ComputeIntersectAll<[SlotTheme]> {
	onApplyCode?: (code: string) => void;
	onApplyRule?: (rule: SlotDiscountRule) => void;
	onRemoveRule?: (ruleId: string) => void;
	onValidateCode?: (code: string) => Promise<boolean>;

	rules: SlotDiscountRule[];

	cartItems: ({
id: string;
	name: string;
	price: number;
	quantity: number;
	category?: string;
})[];

	cartTotal: number;

	appliedCodes?: string[];

	currency?: string;

	locale?: string;

	showCodeInput?: boolean;

	showRuleList?: boolean;

	showAppliedRules?: boolean;

	inputClass?: string;

	buttonClass?: string;
}
