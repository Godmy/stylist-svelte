import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { RecipeAdvancedToggleProps as AdvancedToggleComponentProps } from '$stylist/control/interface/recipe/advanced-toggle-props';

export type RecipeAdvancedToggleProps = AdvancedToggleComponentProps &
	InteractionHTMLAttributes<HTMLDivElement>;
