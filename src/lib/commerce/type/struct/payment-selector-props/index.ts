import type { HTMLAttributes } from 'svelte/elements';
import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';

export type PaymentSelectorProps = HTMLAttributes<HTMLDivElement> & {
	methods: PaymentMethod[];
	selectedMethod?: string;
	showAddButton?: boolean;
	showEditButton?: boolean;
	showDeleteButton?: boolean;
	showSetDefault?: boolean;
	title?: string;
	subtitle?: string;
	class?: string;
	onSelect?: (id: string) => void;
	onAdd?: () => void;
	onEdit?: (id: string) => void;
	onDelete?: (id: string) => void;
	onSetDefault?: (id: string) => void;
};
