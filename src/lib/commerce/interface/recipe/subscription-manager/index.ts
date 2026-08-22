import type { SubscriptionStatus } from '$stylist/commerce/type/alias/subscription-status';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeSubscriptionManager extends ComputeIntersectAll<[SlotTheme, SlotText]> {
	onUpgrade?: () => void;
	onDowngrade?: () => void;
	onCancel?: () => void;
	onPause?: () => void;
	onResume?: () => void;
	onBillingChange?: () => void;
	onPaymentMethodChange?: () => void;

	subscription: {
		id: string;
		plan: {
			id: string;
			name: string;
			description: string;
			price: number;
			period: string;
			currency: string;
			features: string[];
		};
		startDate: Date;
		endDate?: Date;
		nextBillingDate?: Date;
		status: SubscriptionStatus;
		paymentMethod?: string;
		autoRenew: boolean;
	};

	showActions?: boolean;

	showBillingInfo?: boolean;

	showPaymentMethod?: boolean;

	headerClass?: string;

	planClass?: string;

	actionsClass?: string;

	footerClass?: string;
}
