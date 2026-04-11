import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { PaymentMethod } from '../payment-method';

export type PaymentSelectorProps = InteractionHTMLAttributes<HTMLDivElement> & {
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
}
