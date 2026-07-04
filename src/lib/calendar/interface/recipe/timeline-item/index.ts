import type { SlotContent } from '$stylist/theme/interface/slot/content';
import type { SlotTimelineItem } from '$stylist/calendar/interface/slot/timeline-item';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeTimelineItem extends ComputeIntersectAll<[SlotTimelineItem, SlotContent]> {}
