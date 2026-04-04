/**
 * SubscriptionManagerContract — управление подпиской.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок)
 *   ICaptionSlot      (information) — subtitle (подзаголовок)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'trialing' | 'past_due' | 'paused';

export interface SubscriptionPlanContract {
	id: string;
	name: string;
	description: string;
	price: number;
	period: string;
	currency: string;
	features: string[];
}

export interface SubscriptionContract {
	id: string;
	plan: SubscriptionPlanContract;
	startDate: Date;
	endDate?: Date;
	nextBillingDate?: Date;
	status: SubscriptionStatus;
	paymentMethod?: string;
	autoRenew: boolean;
}

export interface SubscriptionManagerEventsContract {
	onUpgrade?: () => void;
	onDowngrade?: () => void;
	onCancel?: () => void;
	onPause?: () => void;
	onResume?: () => void;
	onBillingChange?: () => void;
	onPaymentMethodChange?: () => void;
}

export interface SubscriptionManagerContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]>, SubscriptionManagerEventsContract {
	/** Subscription data */
	subscription: SubscriptionContract;
	/** Show actions */
	showActions?: boolean;
	/** Show billing info */
	showBillingInfo?: boolean;
	/** Show payment method */
	showPaymentMethod?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for plan */
	planClass?: string;
	/** Additional CSS class for actions */
	actionsClass?: string;
	/** Additional CSS class for footer */
	footerClass?: string;
}
