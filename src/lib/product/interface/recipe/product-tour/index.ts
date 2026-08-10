import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeProductTour
	extends ComputeIntersectAll<[SlotTheme]> {
	onComplete?: () => void;

	steps: ({
title: string;
	content: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
})[];
	currentStep?: number;
	showTour?: boolean;
}
