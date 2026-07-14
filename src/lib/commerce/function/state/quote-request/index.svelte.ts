import type { RecipeQuoteRequest } from '$stylist/commerce/interface/recipe/quote-request';
import type { QuoteRequestValue } from '$stylist/commerce/type/struct/quote-request-value';

export function createQuoteRequestState(props: RecipeQuoteRequest) {
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
		get containerClass() {
			return ['quote-request', props.class].filter(Boolean).join(' ');
		},
		get formClass() {
			return ['quote-request__form', props.formClass].filter(Boolean).join(' ');
		},
		get headerClass() {
			return 'quote-request__header';
		},
		get titleClass() {
			return 'quote-request__title';
		},
		get descriptionClass() {
			return 'quote-request__description';
		},
		get sectionClass() {
			return ['quote-request__section', props.sectionClass].filter(Boolean).join(' ');
		},
		get sectionHeaderClass() {
			return 'quote-request__section-header';
		},
		get sectionTitleClass() {
			return 'quote-request__section-title';
		},
		get addButtonClass() {
			return 'quote-request__button quote-request__button--add';
		},
		get addIconClass() {
			return 'quote-request__button-icon';
		},
		get productListClass() {
			return 'quote-request__products';
		},
		get productRowClass() {
			return 'quote-request__product-row';
		},
		get inputClass() {
			return ['quote-request__input', props.inputClass].filter(Boolean).join(' ');
		},
		get quantityClass() {
			return ['quote-request__input', 'quote-request__input--quantity', props.inputClass]
				.filter(Boolean)
				.join(' ');
		},
		get removeButtonClass() {
			return 'quote-request__remove';
		},
		get removeIconClass() {
			return 'quote-request__remove-icon';
		},
		get checkboxRowClass() {
			return 'quote-request__checkbox-row';
		},
		get actionsClass() {
			return 'quote-request__actions';
		},
		get cancelButtonClass() {
			return 'quote-request__button quote-request__button--cancel';
		},
		get submitButtonClass() {
			return ['quote-request__button', 'quote-request__button--submit', props.buttonClass]
				.filter(Boolean)
				.join(' ');
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
				products: request.products.filter((_, itemIndex) => itemIndex !== index)
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
