import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotProductTourStep } from '$stylist/product/interface/slot/product-tour-step';
import type { BehaviorProductTourEvents } from '$stylist/product/interface/behavior/product-tour-events';

export interface RecipeProductTour
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductTourEvents {
	steps: SlotProductTourStep[];
	currentStep?: number;
	showTour?: boolean;
}
