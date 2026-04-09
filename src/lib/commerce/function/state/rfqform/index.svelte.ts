import type { RFQProduct } from '$stylist/commerce/type/struct/rfq-product';
import type { RFQFormData } from '$stylist/commerce/type/struct/rfq-form-data';
import type { RFQFormProps } from '$stylist/commerce/type/struct/rfqform-props';

export function createRFQFormState(props: RFQFormProps) {
	let rfqData = $state<RFQFormData>({
		requesterName: '',
		requesterEmail: '',
		requesterPhone: '',
		companyName: '',
		companyAddress: '',
		shippingAddress: '',
		products: [
			{
				id: '1',
				name: '',
				description: '',
				quantity: 1,
				unit: 'pcs',
				specifications: '',
				deliveryDate: '',
				notes: ''
			}
		],
		message: '',
		urgent: false,
		validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
		deliveryTerms: '',
		paymentTerms: '',
		currency: props.defaultCurrency ?? 'USD',
		attachments: []
	});

	return {
		get rfqData() {
			return rfqData;
		},
		handleInputChange(field: keyof RFQFormData, value: RFQFormData[keyof RFQFormData]) {
			rfqData = { ...rfqData, [field]: value };
		},
		handleProductChange(index: number, field: keyof RFQProduct, value: RFQProduct[keyof RFQProduct]) {
			const nextProducts = [...rfqData.products];
			nextProducts[index] = { ...nextProducts[index], [field]: value };
			rfqData = { ...rfqData, products: nextProducts };
		},
		addProduct() {
			rfqData = {
				...rfqData,
				products: [
					...rfqData.products,
					{
						id: `product-${Date.now()}`,
						name: '',
						description: '',
						quantity: 1,
						unit: 'pcs',
						specifications: '',
						deliveryDate: '',
						notes: ''
					}
				]
			};
		},
		removeProduct(index: number) {
			if (rfqData.products.length <= 1) return;
			rfqData = {
				...rfqData,
				products: rfqData.products.filter((_, i) => i !== index)
			};
		},
		handleFileUpload(fileList: FileList | null) {
			if (!fileList) return;
			const files = Array.from(fileList);
			const maxAttachments = props.maxAttachments ?? 5;
			if (rfqData.attachments.length + files.length > maxAttachments) return;
			rfqData = { ...rfqData, attachments: [...rfqData.attachments, ...files] };
		},
		removeAttachment(index: number) {
			const nextAttachments = [...rfqData.attachments];
			nextAttachments.splice(index, 1);
			rfqData = { ...rfqData, attachments: nextAttachments };
		},
		handleSubmit() {
			props.onSubmit?.(rfqData);
		},
		handleCancel() {
			props.onCancel?.();
		},
		isValid() {
			return (
				!!rfqData.requesterName &&
				!!rfqData.requesterEmail &&
				rfqData.products.length > 0 &&
				rfqData.products.every((product) => product.name && product.quantity > 0)
			);
		},
		calculateTotalValue(index: number) {
			const product = rfqData.products[index];
			if (product.unitPrice && product.quantity) {
				return product.unitPrice * product.quantity;
			}
			return 0;
		}
	};
}

export default createRFQFormState;
