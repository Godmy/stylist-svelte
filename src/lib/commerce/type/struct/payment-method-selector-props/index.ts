import type { HTMLAttributes } from 'svelte/elements';
import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';

export type PaymentMethodSelectorProps = HTMLAttributes<HTMLDivElement> & {
	methods: PaymentMethod[];
	selectedMethod?: string;
	class?: string;
	onMethodSelect?: (method: PaymentMethod) => void;
	onMethodAdd?: () => void;
	onMethodEdit?: (method: PaymentMethod) => void;
	onMethodRemove?: (methodId: string) => void;
	onMethodSetDefault?: (methodId: string) => void;
	showAddButton?: boolean;
	showEditButton?: boolean;
	showRemoveButton?: boolean;
	showSetDefaultButton?: boolean;
	disabled?: boolean;
};
