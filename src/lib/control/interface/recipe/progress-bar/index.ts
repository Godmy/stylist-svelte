import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
export interface RecipeProgressBar
	extends ComputeIntersectAll<[SlotText, SlotStatus]> {}
