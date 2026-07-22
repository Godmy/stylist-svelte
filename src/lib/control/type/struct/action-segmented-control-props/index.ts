import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeActionSegmentedControlProps as ActionSegmentedControlComponentProps } from '$stylist/control/interface/recipe/action-segmented-control-props';

export type RecipeActionSegmentedControlProps = ActionSegmentedControlComponentProps &
	HTMLAttributes<HTMLDivElement>;
