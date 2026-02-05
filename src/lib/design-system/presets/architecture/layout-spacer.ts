import type { SpacerProps } from '$stylist/design-system/attributes';
import { SPACER_AXIS_CLASSES } from '$stylist/design-system/tokens';

export type SpacerAxis = NonNullable<SpacerProps['axis']>;

export const getSpacerSize = (size?: string | number) => {
  if (typeof size === 'number') return `${size}px`;
  return size ?? '1rem';
};

export const getSpacerClasses = (axis: SpacerAxis, className = '') => {
  const axisClass = SPACER_AXIS_CLASSES[axis];
  return `inline-block flex-shrink-0 ${axisClass} ${className}`.trim();
};
