import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotSubscription } from '$stylist/commerce/interface/slot/subscription';
import type { BehaviorSubscriptionManagerEvents } from '$stylist/commerce/interface/behavior/subscription-manager-events';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeSubscriptionManager
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotText]>,
		BehaviorSubscriptionManagerEvents {
	subscription: SlotSubscription;

	showActions?: boolean;

	showBillingInfo?: boolean;

	showPaymentMethod?: boolean;

	headerClass?: string;

	planClass?: string;

	actionsClass?: string;

	footerClass?: string;
}
