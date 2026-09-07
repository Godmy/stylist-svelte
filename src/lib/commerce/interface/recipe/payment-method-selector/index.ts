import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PaymentMethod } from '$stylist/commerce/interface/slot/payment-method';

export interface RecipePaymentMethodSelector
	extends ComputeIntersectAll<
		[
			HTMLAttributes<HTMLDivElement> & {
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
		]
	> {}
