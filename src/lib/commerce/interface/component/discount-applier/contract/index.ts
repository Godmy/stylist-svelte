/**
 * DiscountApplierContract — применение скидок и промокодов.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type DiscountType = 'percentage' | 'fixed' | 'free_shipping';

export interface DiscountRuleContract {
	id: string;
	code: string;
	type: DiscountType;
	value: number;
	name: string;
	description?: string;
	minOrderAmount?: number;
	maxDiscountAmount?: number;
	startDate?: Date;
	endDate?: Date;
	usageLimit?: number;
	usedCount?: number;
	appliesTo?: 'all' | 'specific_products' | 'specific_categories';
	applicableItems?: string[];
}

export interface CartItemContract {
	id: string;
	name: string;
	price: number;
	quantity: number;
	category?: string;
}

export interface DiscountApplierEventsContract {
	onApplyCode?: (code: string) => void;
	onApplyRule?: (rule: DiscountRuleContract) => void;
	onRemoveRule?: (ruleId: string) => void;
	onValidateCode?: (code: string) => Promise<boolean>;
}

export interface DiscountApplierContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, DiscountApplierEventsContract {
	/** List of discount rules */
	rules: DiscountRuleContract[];
	/** List of cart items */
	cartItems: CartItemContract[];
	/** Cart total amount */
	cartTotal: number;
	/** Applied discount codes */
	appliedCodes?: string[];
	/** Currency code */
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
