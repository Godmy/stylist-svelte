import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';

export interface RangeInputProps extends InteractionHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  class?: string;
}


