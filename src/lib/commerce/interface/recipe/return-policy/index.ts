import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotReturnCondition } from '$stylist/commerce/interface/slot/return-condition';
import type { SlotReturnStep } from '$stylist/commerce/interface/slot/return-step';
import type { SlotFaq } from '$stylist/commerce/interface/slot/faq';
import type { BehaviorReturnPolicyEvents } from '$stylist/commerce/interface/behavior/return-policy-events';

export interface RecipeReturnPolicy
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorReturnPolicyEvents {
	policyPeriod: number;

	policyDescription?: string;

	conditions?: SlotReturnCondition[];

	returnSteps?: SlotReturnStep[];

	eligibleProducts?: string[];

	ineligibleProducts?: string[];

	shippingCosts?: 'buyer' | 'seller' | 'partial';

	restockingFee?: number;

	faqs?: SlotFaq[];

	policyEffectiveDate?: Date;

	locale?: string;

	showConditions?: boolean;

	showSteps?: boolean;

	showEligibility?: boolean;

	showShippingInfo?: boolean;

	showFAQ?: boolean;

	headerClass?: string;

	contentClass?: string;

	conditionClass?: string;

	stepClass?: string;

	shippingInfoClass?: string;
}
