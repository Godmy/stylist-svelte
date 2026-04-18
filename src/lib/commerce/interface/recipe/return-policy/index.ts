/**
 * ReturnPolicyContract вЂ” РїРѕР»РёС‚РёРєР° РІРѕР·РІСЂР°С‚Р° С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotReturnCondition } from '$stylist/commerce/interface/slot/return-condition';
import type { SlotReturnStep } from '$stylist/commerce/interface/slot/return-step';
import type { SlotFaq } from '$stylist/commerce/interface/slot/faq';
import type { BehaviorReturnPolicyEvents } from '$stylist/commerce/interface/behavior/return-policy-events';

export interface RecipeReturnPolicy extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorReturnPolicyEvents {
	/** Policy period in days */
	policyPeriod: number;
	/** Policy description */
	policyDescription?: string;
	/** List of conditions */
	conditions?: SlotReturnCondition[];
	/** List of steps */
	returnSteps?: SlotReturnStep[];
	/** Eligible products */
	eligibleProducts?: string[];
	/** Ineligible products */
	ineligibleProducts?: string[];
	/** Shipping costs responsibility */
	shippingCosts?: 'buyer' | 'seller' | 'partial';
	/** Restocking fee percentage */
	restockingFee?: number;
	/** List of FAQs */
	faqs?: SlotFaq[];
	/** Policy effective date */
	policyEffectiveDate?: Date;
	/** Locale for formatting */
	locale?: string;
	/** Show conditions */
	showConditions?: boolean;
	/** Show steps */
	showSteps?: boolean;
	/** Show eligibility */
	showEligibility?: boolean;
	/** Show shipping info */
	showShippingInfo?: boolean;
	/** Show FAQ */
	showFAQ?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for content */
	contentClass?: string;
	/** Additional CSS class for condition */
	conditionClass?: string;
	/** Additional CSS class for step */
	stepClass?: string;
	/** Additional CSS class for shipping info */
	shippingInfoClass?: string;
}
