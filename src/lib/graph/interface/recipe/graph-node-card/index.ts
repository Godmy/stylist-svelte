import type { GraphNodeCardProps as LegacyGraphNodeCardProps1 } from '$stylist/graph/type/struct/graph-node-card-props';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export interface RecipeGraphNodeCard
	extends StructIntersectAll<[LegacyGraphNodeCardProps1, SlotChildren]> {
	id?: string;
	name?: string;
	type?: string;
	description?: string;
	fields?: { name: string; type: string; isRequired?: boolean }[];
	class?: string;
}
