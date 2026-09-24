import type { NumberedStep } from '$stylist/layout/type/object/numbered-step';

/** No `LayoutHTMLAttributes` here — its `title` (tooltip) attribute would collide with the heading `title` below. */
export interface RecipeNumberedStepGrid {
	class?: string;
	/** Small uppercase label above `title`, e.g. "Как это работает". */
	kicker?: string;
	title?: string;
	steps: NumberedStep[];
	/** Column count at the widest breakpoint; collapses to 1 column under 820px. */
	columns?: number;
}
