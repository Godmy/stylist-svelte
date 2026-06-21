import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotKanbanCard } from '$stylist/management/interface/slot/kanban-card';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeKanbanCard extends ComputeIntersectAll<[SlotKanbanCard, SlotChildren]> {}