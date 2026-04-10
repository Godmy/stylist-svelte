import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenPaymentStatus } from '$stylist/commerce/type/enum/payment-status';
import type { PaymentSummaryItem } from '../payment-summary-item';
import type { PaymentSummaryDiscount } from '../payment-summary-discount';
import type { PaymentSummaryTax } from '../payment-summary-tax';

export interface PaymentSummaryProps extends InteractionHTMLAttributes<HTMLDivElement> {
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
}
