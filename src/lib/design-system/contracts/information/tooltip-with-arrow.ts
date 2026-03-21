import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';

export interface TooltipWithArrowProps extends InformationHTMLAttributes<HTMLDivElement> {
  content?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  class?: string;
}


