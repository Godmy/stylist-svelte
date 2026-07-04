import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotMessageMeta } from '$stylist/chat/interface/slot/message-meta';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeMessageMeta extends ComputeIntersectAll<[SlotMessageMeta, SlotChildren]> {}