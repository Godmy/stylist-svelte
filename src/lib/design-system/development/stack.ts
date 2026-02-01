export type StackDirection = 'vertical' | 'horizontal';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

export interface StackProps {
  children?: () => any;
  direction?: StackDirection;
  spacing?: string | number;
  align?: StackAlign;
  justify?: StackJustify;
  class?: string;
}

const DIRECTION_CLASSES: Record<StackDirection, string> = {
  vertical: 'flex-col',
  horizontal: 'flex-row'
};

const ALIGN_CLASSES: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline'
};

const JUSTIFY_CLASSES: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around'
};

export const getStackClasses = (
  direction: StackDirection,
  align: StackAlign,
  justify: StackJustify,
  className = ''
) => {
  return `flex ${DIRECTION_CLASSES[direction]} ${ALIGN_CLASSES[align]} ${JUSTIFY_CLASSES[justify]} ${className}`.trim();
};

export const getStackGap = (spacing: string | number) => {
  return typeof spacing === 'number' ? `${spacing}px` : spacing;
};
