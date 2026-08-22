import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeReturnPolicy extends ComputeIntersectAll<[SlotTheme]> {
	onPolicyClick?: () => void;
	onReturnInitiate?: () => void;

	policyPeriod: number;

	policyDescription?: string;

	conditions?: {
		id: string;
		title: string;
		description: string;
		appliesTo: string[];
		exceptions?: string[];
	}[];

	returnSteps?: {
		id: string;
		title: string;
		description: string;
		icon: any;
	}[];

	eligibleProducts?: string[];

	ineligibleProducts?: string[];

	shippingCosts?: 'buyer' | 'seller' | 'partial';

	restockingFee?: number;

	faqs?: {
		question: string;
		answer: string;
	}[];

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
