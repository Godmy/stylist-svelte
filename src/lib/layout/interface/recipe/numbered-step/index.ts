import type { NumberedStep } from '$stylist/layout/type/object/numbered-step';

/** No `LayoutHTMLAttributes` here — its `title` (tooltip) attribute would collide with `NumberedStep.title`. */
export interface RecipeNumberedStep extends NumberedStep {
	class?: string;
	/** 1-based position in the list — rendered zero-padded (`1` → `"01"`). */
	index: number;
}
