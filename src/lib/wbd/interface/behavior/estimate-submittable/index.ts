import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export interface BehaviorWbdEstimateSubmit {
	onSubmit?: (estimate: StructWbdEstimate) => void;
}
