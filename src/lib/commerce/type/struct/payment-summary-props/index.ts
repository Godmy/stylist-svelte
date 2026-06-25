import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenPaymentStatus } from '$stylist/commerce/type/enum/payment-status';
import type { PaymentSummaryItem } from '$stylist/commerce/type/struct/payment-summary-item';
import type { PaymentSummaryDiscount } from '$stylist/commerce/type/struct/payment-summary-discount';
import type { PaymentSummaryTax } from '$stylist/commerce/type/struct/payment-summary-tax';

export type PaymentSummaryProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	title?: string;
	subtitle?: string;
	items: PaymentSummaryItem[];
	discounts?: PaymentSummaryDiscount[];
	taxes?: PaymentSummaryTax[];
	total: number;
	currency?: string;
	paymentMethod?: string;
	transactionId?: string;
	date?: Date;
	status?: TokenPaymentStatus;
	class?: string;
};
