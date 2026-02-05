import type { ToggleGroupRootProps } from '$stylist/design-system/attributes';
import { getToggleGroupRootClasses } from '../helpers';

export const createToggleGroupRootState = (props: ToggleGroupRootProps) => {
  return {
    classes: getToggleGroupRootClasses(props.class)
  };
};
