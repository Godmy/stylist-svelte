/**
 * ReturnPolicyContract — политика возврата товара.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ReturnConditionContract {
	id: string;
	title: string;
	description: string;
	appliesTo: string[];
	exceptions?: string[];
}

export interface ReturnStepContract {
	id: string;
	title: string;
	description: string;
	icon: any;
}

export interface FAQContract {
	question: string;
	answer: string;
}

export interface ReturnPolicyEventsContract {
	onPolicyClick?: () => void;
	onReturnInitiate?: () => void;
}

export interface ReturnPolicyContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, ReturnPolicyEventsContract {
	/** Policy period in days */
	policyPeriod: number;
	/** Policy description */
	policyDescription?: string;
	/** List of conditions */
	conditions?: ReturnConditionContract[];
	/** List of steps */
	returnSteps?: ReturnStepContract[];
	/** Eligible products */
	eligibleProducts?: string[];
	/** Ineligible products */
	ineligibleProducts?: string[];
	/** Shipping costs responsibility */
	shippingCosts?: 'buyer' | 'seller' | 'partial';
	/** Restocking fee percentage */
	restockingFee?: number;
	/** List of FAQs */
	faqs?: FAQContract[];
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
