import type { QuoteRequestValue } from '$stylist/input/type/struct/interaction-input/quote-request-value';
import type { ExtendedQuoteRequestProps } from '$stylist/commerce/type/struct/extended-quote-request-props';

export function createQuoteRequestState(props: ExtendedQuoteRequestProps) {
	let request = $state<QuoteRequestValue>({
		requesterName: '',
		requesterEmail: '',
		requesterPhone: '',
		companyName: '',
		companyAddress: '',
		shippingAddress: '',
		products: [{ id: '1', name: '', quantity: 1 }],
		message: '',
		urgent: false,
		validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
	});

	return {
		get request() {
			return request;
		},
		addProduct() {
			request = {
				...request,
				products: [...request.products, { id: `${Date.now()}`, name: '', quantity: 1 }]
			};
		},
		removeProduct(index: number) {
			if (request.products.length < 2) return;
			request = {
				...request,
				products: request.products.filter((_, i) => i !== index)
			};
		},
		setValidUntil(value: string) {
			request = { ...request, validUntil: value ? new Date(value) : undefined };
		},
		submit() {
			props.onSubmit?.(request);
		},
		cancel() {
			props.onCancel?.();
		}
	};
}

export default createQuoteRequestState;
