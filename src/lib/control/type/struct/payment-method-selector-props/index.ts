import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { PaymentMethod } from '../payment-method';

export interface PaymentMethodSelectorProps extends InteractionHTMLAttributes<HTMLDivElement> {
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
}
