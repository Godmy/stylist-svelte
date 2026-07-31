import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export function validateWbdEstimate(estimate: Partial<StructWbdEstimate>): boolean {
	const { optimistic, mostLikely, pessimistic } = estimate;
	if (optimistic === undefined || mostLikely === undefined || pessimistic === undefined) {
		return false;
	}
	if (optimistic < 0 || mostLikely < 0 || pessimistic < 0) {
		return false;
	}
	return optimistic <= mostLikely && mostLikely <= pessimistic;
}
