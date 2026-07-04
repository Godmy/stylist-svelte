import type { GraphNodeCardProps as LegacyGraphNodeCardProps1 } from '$stylist/workspace/type/struct/graph-node-card-props';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeGraphNodeCard
	extends ComputeIntersectAll<[LegacyGraphNodeCardProps1, SlotChildren]> {
	id?: string;
	name?: string;
	type?: string;
	description?: string;
	fields?: { name: string; type: string; isRequired?: boolean }[];
	class?: string;
}
