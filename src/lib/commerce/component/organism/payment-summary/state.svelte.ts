import type { PaymentSummaryProps } from '$stylist/commerce/type/struct/payment-summary-props';
import type { PaymentSummaryDiscount } from '$stylist/commerce/type/struct/payment-summary-discount';
import type { PaymentSummaryItem } from '$stylist/commerce/type/struct/payment-summary-item';
import type { PaymentSummaryTax } from '$stylist/commerce/type/struct/payment-summary-tax';

export function createPaymentSummaryState(props: PaymentSummaryProps) {
	const subtotal = $derived(
		(props.items ?? []).reduce((sum: number, item: PaymentSummaryItem) => sum + item.total, 0)
	);
	const discountTotal = $derived(
		(props.discounts ?? []).reduce((sum: number, d: PaymentSummaryDiscount) => sum + d.amount, 0)
	);
	const taxTotal = $derived(
		(props.taxes ?? []).reduce((sum: number, t: PaymentSummaryTax) => sum + t.amount, 0)
	);

	return {
		get subtotal() {
			return subtotal;
		},
		get discountTotal() {
			return discountTotal;
		},
		get taxTotal() {
			return taxTotal;
		},
		money(v: number): string {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: props.currency ?? 'USD'
			}).format(v);
		}
	};
}

export default createPaymentSummaryState;
