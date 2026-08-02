import type { StructWbdMutationStatus } from '$stylist/wbd/type/struct/mutation-status';

export interface SlotWbdMutationStatusToast {
	statuses: StructWbdMutationStatus[];
	class?: string;
}
