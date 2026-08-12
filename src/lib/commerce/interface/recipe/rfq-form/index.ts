import type { HTMLAttributes } from 'svelte/elements';
import type { RFQFormData } from '$stylist/commerce/interface/slot/rfq-form-data';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeRfqForm extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
				title?: string;
				description?: string;
				onSubmit?: (data: RFQFormData) => void;
				onCancel?: () => void;
				onProductAdd?: () => void;
				onProductRemove?: (productId: string) => void;
				onAttachmentChange?: (attachments: File[]) => void;
				formData?: RFQFormData;
				currency?: string;
				locale?: string;
				defaultCurrency?: string;
				showCompanyInfo?: boolean;
				showCompanyFields?: boolean;
				showShippingAddress?: boolean;
				showShippingFields?: boolean;
				showProductList?: boolean;
				showAttachments?: boolean;
				showUrgentOption?: boolean;
				showDeliveryTerms?: boolean;
				showPaymentTerms?: boolean;
				showValidUntil?: boolean;
				maxProducts?: number;
				maxAttachments?: number;
				allowedFileTypes?: string[];
				maxFileSize?: number;
				class?: string;
				formClass?: string;
				sectionClass?: string;
				inputClass?: string;
				buttonClass?: string;
				productListClass?: string;
				actionsClass?: string;
			},
			SlotTheme,
			SlotText
		]
	> {}
