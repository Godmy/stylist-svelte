import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export interface BehaviorWbdTaskEstimateSubmit {
	onSubmitEstimate?: (taskId: string, estimate: StructWbdEstimate) => void;
}
