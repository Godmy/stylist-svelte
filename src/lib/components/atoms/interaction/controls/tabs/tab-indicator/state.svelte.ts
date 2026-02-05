import type { TabIndicatorProps } from '$stylist/design-system/attributes';
import { getTabIndicatorClasses, getTabIndicatorStyle } from '../helpers';

export const createTabIndicatorState = (props: TabIndicatorProps) => {
  const color = props.color ?? 'primary';
  const disabled = props.disabled ?? false;
  const width = `${props.width ?? 0}px`;
  const left = `${props.left ?? 0}px`;

  return {
    classes: getTabIndicatorClasses(color, disabled, props.class),
    style: getTabIndicatorStyle(width, left)
  };
};
