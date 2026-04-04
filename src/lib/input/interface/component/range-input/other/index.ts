import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface RangeInputProps extends InteractionHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  class?: string;
}


