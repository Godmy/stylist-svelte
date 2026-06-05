import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { RecipeActionSegmentedControlProps as ActionSegmentedControlComponentProps } from '$stylist/control/interface/recipe/action-segmented-control-props';

export type RecipeActionSegmentedControlProps = ActionSegmentedControlComponentProps &
	InteractionHTMLAttributes<HTMLDivElement>;
