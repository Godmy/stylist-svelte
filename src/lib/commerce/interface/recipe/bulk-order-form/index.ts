import type { HTMLAttributes } from 'svelte/elements';
import type { SlotBulkOrderForm } from '$stylist/commerce/interface/slot/bulk-order-form';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeBulkOrderForm
	extends ComputeIntersectAll<[Omit<HTMLAttributes<HTMLElement>, 'class'>, SlotBulkOrderForm]> {}
