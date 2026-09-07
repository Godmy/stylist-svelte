import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBacklogData } from '$stylist/portfolio/interface/slot/backlog-data';
import type { SlotBacklogItem } from '$stylist/portfolio/interface/slot/backlog-item';
export interface RecipeScrumBacklog extends ComputeIntersectAll<[]> {
	data: SlotBacklogData;
	showFilters?: boolean;
	onItemAdd?: (item: SlotBacklogItem) => void;
	onItemUpdate?: (item: SlotBacklogItem) => void;
	onItemDelete?: (id: string) => void;
}
