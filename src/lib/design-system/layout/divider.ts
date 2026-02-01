export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerAlign = 'start' | 'center' | 'end';

export interface DividerProps {
  orientation?: DividerOrientation;
  label?: string;
  align?: DividerAlign;
  dashed?: boolean;
  class?: string;
}

export const getDividerLineClass = (dashed: boolean) => {
  return dashed
    ? 'border-dashed border-[--color-border-secondary]'
    : 'border-solid border-[--color-border-secondary]';
};

export const getDividerLineFlexClass = (align: DividerAlign, side: 'left' | 'right') => {
  if (side === 'left' && align === 'start') return 'flex-none w-4';
  if (side === 'right' && align === 'end') return 'flex-none w-4';
  return 'flex-1';
};
