import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PaymentMethod } from '$stylist/commerce/interface/slot/payment-method';

export interface RecipePaymentSelector extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement> & {
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
}]> {}
