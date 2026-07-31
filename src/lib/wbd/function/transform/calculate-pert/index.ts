import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';
import type { StructWbdPertResult } from '$stylist/wbd/type/struct/pert-result';

export function calculateWbdPert(estimate: StructWbdEstimate): StructWbdPertResult {
	const { optimistic, mostLikely, pessimistic } = estimate;
	const expected = (optimistic + 4 * mostLikely + pessimistic) / 6;
	const stdDev = (pessimistic - optimistic) / 6;
	return { expected, stdDev, optimistic, pessimistic };
}
