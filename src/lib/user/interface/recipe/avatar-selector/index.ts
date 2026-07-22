import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface AvatarSelectorProps extends ComputeIntersectAll<[SlotChildren]> {
	src?: string;
	alt?: string;
	size?: string;
	class?: string;
}
