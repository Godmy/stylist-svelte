export type SpacerAxis = 'vertical' | 'horizontal';

export interface SpacerProps {
  size?: string | number;
  axis?: SpacerAxis;
  class?: string;
}

export const getSpacerSize = (size?: string | number) => {
  if (typeof size === 'number') return `${size}px`;
  return size ?? '1rem';
};

export const getSpacerClasses = (axis: SpacerAxis, className = '') => {
  const axisClass = axis === 'horizontal' ? 'w-[--spacer-size]' : 'h-[--spacer-size]';
  return `inline-block flex-shrink-0 ${axisClass} ${className}`.trim();
};
