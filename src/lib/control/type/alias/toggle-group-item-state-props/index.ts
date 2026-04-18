import type { RecipeToggleGroupItemProps as RecipeToggleGroupItemProps } from '$stylist/control/interface/recipe/toggle-group-item-props';

export type ToggleGroupItemStateProps = RecipeToggleGroupItemProps & {
  groupValue?: string | string[] | null;
  groupDisabled?: boolean;
  updateValue?: (value: string) => void;
};
