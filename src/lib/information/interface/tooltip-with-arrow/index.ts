import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';

export interface TooltipWithArrowProps extends InformationHTMLAttributes<HTMLDivElement> {
  content?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  class?: string;
}


