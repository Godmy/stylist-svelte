import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeTimelineItem } from '$stylist/calendar/interface/recipe/timeline-item';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeTimeline extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	items: RecipeTimelineItem[];
	orientation?: 'vertical' | 'horizontal';
	class?: string;
	itemClass?: string;
	connectorClass?: string;
	iconClass?: string;
}
