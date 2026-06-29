import type { SlotSubscriptionPlan } from '$stylist/commerce/interface/slot/subscription-plan';
import type { SubscriptionStatus } from '$stylist/commerce/type/alias/subscription-status';

export interface SlotSubscription {
	id: string;
	plan: SlotSubscriptionPlan;
	startDate: Date;
	endDate?: Date;
	nextBillingDate?: Date;
	status: SubscriptionStatus;
	paymentMethod?: string;
	autoRenew: boolean;
}

